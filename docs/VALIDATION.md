# Release validation

The release uses automated checks for keys, randomization, grading, backups and tutor-response validation, plus browser checks on desktop and a mobile viewport.

## Automated unit checks

13 checks cover question identities/source mappings; seeded Fisher–Yates shuffling; identity-preserving choice keys; strict unseen sampling; unambiguous typos and protected anatomical distinctions; component and sequence credit; pending-score exclusion; malformed backups; complete backup round trips; all automatic keys; loopback/model restrictions; and evidence/citation validation for AI assessments.

## Browser checks

16 scenarios (8 on desktop and 8 on mobile) cover all primary routes, viewport overflow, WCAG A/AA automated audits, diagram labeling, immediate reload and draft recovery, history, export/import, assessment feedback concealment, later written self-assessment, mistake/source retention, weak-concept review, atlas stage controls, keyboard dialogs, tutor grading and failure recovery, sequence controls, partial multiple-selection credit, storage fallback, and enlarged text at widths 320, 360, 768 and 1024.

A simulated Ollama API validates deterministic UI behavior. A separate integration check also exercised a streamed model download and Windows custom-folder command generation. This does not prove real model reliability, browser permission behavior on every system, or that the OS protocol handler exists on every installation.

## Human visual inspection

Desktop/mobile study screens and the original anatomical labeling layout were reviewed from actual browser screenshots. Muted-text contrast was improved after the automated audit, and typed drafts were given a synchronous recovery journal to survive immediate reloads.

## Deployment

GitHub Actions runs unit checks and both browser projects before uploading `app/` and deploying Pages. Failed browser checks save traces for seven days. Tags preserve each completed implementation phase.

## Remaining validation limits

Independent anatomy-instructor review, a larger grading calibration set on real local models, Safari/Firefox-specific local-Ollama permissions, and OS-specific installation walkthroughs remain unverified. These are stated in the app and setup guide. Core quiz behavior has no AI dependency.
