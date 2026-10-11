# Release validation

The release uses automated checks for keys, randomization, grading, backups and tutor-response validation, plus browser checks on desktop and a mobile viewport.

## Automated unit checks

17 checks cover question identities/source mappings; seeded Fisher–Yates shuffling; identity-preserving choice keys; strict unseen sampling; unambiguous typos and protected anatomical distinctions; component and sequence credit; pending-score exclusion; malformed backups; complete backup round trips; all automatic keys; loopback/model restrictions; evidence/citation validation for AI assessments; bounded multi-turn chat context; escaped message formatting; interrupted conversation recovery; and split UTF-8/NDJSON stream handling.

## Browser checks

29 executed scenarios (15 on desktop and 14 on mobile; one desktop-only check is skipped in the mobile project) cover all primary routes, viewport overflow, WCAG A/AA automated audits, diagram labeling, immediate reload and draft recovery, history, export/import, assessment feedback concealment, later written self-assessment, mistake/source retention, weak-concept review, atlas stage controls, keyboard dialogs, tutor grading and failure recovery, sequence controls, partial multiple-selection credit, storage fallback, enlarged text at widths 320, 360, 768 and 1024; general-topic chat context; streamed replies; chat draft/history recovery; stop/retry controls; readable conversation export; guided connection; model download; and generated Windows helper inspection. Additional checks cover ten populated/empty routes at desktop sizes 1024×600, 1024×768, 1280×650, 1280×720, 1366×768, 1440×900 and 1920×1080; visible primary controls; contained diagram/concept text; atlas keyboard tabs; selecting and searching review records; long conversations and multi-line drafts; stable message elements during streaming; and immediate cancellation of animations when motion is reduced.

A simulated Ollama API validates deterministic UI behavior. A real two-turn browser conversation also passed on Ollama 0.40.3 with the installed qwen3.5:4b-q4_K_M model: an initial general-topic explanation, a follow-up using that discussion, streamed output, and no page errors. This validates the conversation path on this machine; it does not calibrate academic grading or every model. A separate integration check also exercised a streamed model download and Windows custom-folder command generation. This does not prove real model reliability, browser permission behavior on every system, or that the OS protocol handler exists on every installation.

## Human visual inspection

All desktop routes, populated progress/notebook/report/labeling screens, atlas views and the redesigned desktop/mobile tutor were reviewed from actual browser screenshots. Desktop frames hold navigation and primary controls in view; growing records, long explanations and short-window concept maps scroll within labeled panels. Orbital motion, staged entrances, ambient pointer response, thinking waves and streaming cursors respect both system and in-app motion preferences. Muted-text contrast was improved after the automated audit, and typed drafts were given a synchronous recovery journal to survive immediate reloads.

The Windows helper was generated in the browser, inspected, and parsed with the Windows PowerShell grammar without executing it or changing this computer’s settings. Real OS installation and browser local-network permission walkthroughs remain unverified.

The v1.2.0 real-model retest could not run: Ollama was closed, and a temporary server failed because its configured model folder was on an unavailable drive. No persistent Ollama settings were changed. Current conversation/streaming behavior is verified by simulated API checks; the successful real-model conversation above was performed for v1.1.0.

## Deployment

GitHub Actions runs unit checks and both browser projects before uploading `app/` and deploying Pages. Failed browser checks save traces for seven days. Tags preserve each completed implementation phase.

## Remaining validation limits

Independent anatomy-instructor review, a larger grading calibration set on real local models, Safari/Firefox-specific local-Ollama permissions, and OS-specific installation walkthroughs remain unverified. These are stated in the app and setup guide. Core quiz behavior has no AI dependency.
