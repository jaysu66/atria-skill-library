# Compact E2E evidence loop

Use this loop for S2/S3 acceptance and for any UI claim. It is intentionally small enough to repeat after a focused fix.

## Browser loop

1. Start the documented app in a clean process and record the command and URL.
2. Confirm the expected page identity and that the page is not blank or covered by a framework error overlay.
3. Capture the initial state if it matters to the requirement.
4. Perform only the steps named in the acceptance row.
5. Record the visible result, relevant URL or route, console errors, network/API failure, and persisted state when applicable.
6. Exercise the selected failure or recovery action: retry, cancel, refresh, back, or reload.
7. Save a screenshot or recording for a meaningful visual claim; attach the exact row ID.

## API/data loop

1. Record the request shape or command and the environment.
2. Assert the response status and the business-relevant fields, not only that the request returned.
3. Check the resulting data state and idempotency when the action writes.
4. Repeat the representative failure or timeout and confirm the recovery state.
5. Keep mock and real-service evidence in separate rows.

## Compact report

```markdown
### AC-R03-02 — retry a timed out generation
- Status: PASS / PARTIAL / FAIL / NOT TESTED
- Environment: ...
- Steps: ...
- Expected: ...
- Observed: ...
- Evidence: screenshot, recording, response, log, or data state
- Remaining risk: ...
```

If a check cannot be run, say why. Do not infer a real API, model, export, or publication result from a mock or preview.
