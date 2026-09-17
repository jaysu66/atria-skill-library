import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifests', 'skills.json'), 'utf8'));
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
assert.equal(manifest.version, packageJson.version, 'manifest/package version mismatch');
assert.equal(packageJson.private, true, 'skill library must not be publishable through npm by accident');

for (const required of [
  'LICENSE',
  'NOTICE',
  'TRADEMARKS.md',
  'THIRD_PARTY_NOTICES.md',
  'PROVENANCE.md',
  'MAINTENANCE.md',
  'SECURITY.md'
]) {
  assert.equal(fs.existsSync(path.join(root, required)), true, `missing release file: ${required}`);
}

const findings = [];
const files = [];
const excluded = new Set(['.git', 'node_modules', 'incubator']);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excluded.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isSymbolicLink()) findings.push({ type: 'reparse-point', path: path.relative(root, full) });
    else if (entry.isDirectory()) walk(full);
    else files.push(full);
  }
}
walk(root);

const forbiddenSegments = new Set(['.agent-memory', '.agent-workbench', '.qa-reports', 'mailbox', 'locks', 'recordings', 'outputs', 'knowledge-base', 'company-assets', 'customer-data', 'personal', 'refero-archive']);
const forbiddenExtensions = new Set(['.exe', '.dll', '.zip', '.7z', '.tar', '.gz', '.pem', '.pfx', '.key', '.otf', '.ttf', '.woff', '.woff2']);
for (const full of files) {
  const rel = path.relative(root, full).replaceAll('\\', '/');
  const parts = rel.split('/').map(part => part.toLowerCase());
  if (parts.some(part => forbiddenSegments.has(part))) findings.push({ type: 'private-path', path: rel });
  if (forbiddenExtensions.has(path.extname(rel).toLowerCase())) findings.push({ type: 'binary-or-archive', path: rel });
  if (/^\.env(?:\.|$)/i.test(path.basename(rel))) findings.push({ type: 'environment-file', path: rel });
  if (fs.statSync(full).size > 2_000_000) findings.push({ type: 'unexpected-large-file', path: rel });
  const text = fs.readFileSync(full, 'utf8');
  if (/C:\\Users\\[^\\\s]+/i.test(text)) findings.push({ type: 'maintainer-absolute-path', path: rel });
  if (/(?:api[_-]?key|access[_-]?token|client[_-]?secret|password)\s*[:=]\s*["'][^"'\s]{16,}["']/i.test(text)) findings.push({ type: 'secret-like-assignment', path: rel });
  if (text.includes(['-----BEGIN ', 'PRIVATE KEY-----'].join(''))) findings.push({ type: 'private-key', path: rel });
}

assert.equal(
  fs.existsSync(path.join(root, 'skills', 'agent-engineering', 'design-os', '3-references', 'REFERO.md')),
  true,
  'design-os: missing Refero external-source boundary'
);

for (const skill of manifest.skills) {
  const dir = path.join(root, skill.path);
  const entry = path.join(dir, 'SKILL.md');
  const readme = path.join(dir, 'README.md');
  assert.equal(fs.existsSync(entry), true, `${skill.id}: missing SKILL.md`);
  assert.equal(fs.existsSync(readme), true, `${skill.id}: missing README.md`);
  assert.equal(path.basename(dir), skill.id, `${skill.id}: path/name mismatch`);
  const source = fs.readFileSync(entry, 'utf8');
  const frontmatter = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  assert.ok(frontmatter, `${skill.id}: missing YAML frontmatter`);
  const declaredName = frontmatter[1].match(/^name:\s*(.+?)\s*$/m)?.[1];
  assert.equal(declaredName, skill.id, `${skill.id}: frontmatter name mismatch`);
}

assert.deepEqual(findings, [], `public-boundary findings:\n${JSON.stringify(findings, null, 2)}`);
console.log(JSON.stringify({
  ok: true,
  version: manifest.version,
  publicSkills: manifest.skills.map(skill => skill.id),
  excludedIncubator: manifest.excludedLocalIncubator.map(skill => skill.id),
  scannedFiles: files.length,
  findings
}, null, 2));
