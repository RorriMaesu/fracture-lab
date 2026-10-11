# Fracture Lab

An animated anatomy study lab for fracture patterns, bone repair, and supporting OpenStax Anatomy and Physiology 2e Chapter 6 concepts.

**[Open the live quiz](https://rorrimaesu.github.io/fracture-lab/)** · **[Repository milestones](https://github.com/RorriMaesu/fracture-lab/tags)**

## What is included

- 336 prompts across 84 concept families: 240 core fracture/repair/cell prompts and 96 supporting Chapter 6 prompts.
- Recognition, multiple selection, typed labeling, event sequencing, and explanations; four tasks per family.
- Fresh practice, weak-concept review, and assessment with feedback withheld until completion. Question order and choice order change; a session includes only one task per family. A strict unseen pool stops when exhausted.
- Original SVG schematics, six-target bone labeling, internal/external callus labeling, and an animated four-stage repair explorer.
- Component credit, unambiguous spelling tolerance, optional confidence, hints, saved drafts, session history, concept progress, reflection notes, and a searchable mistake notebook with direct textbook links.
- Local progress with IndexedDB/localStorage fallback, backup export/import, and printable reports.
- A sleek, optional Socratic chatbot for any topic: streamed multi-turn replies, locally saved conversations and drafts, stop/retry controls, copy and conversation export, a searchable installed-model library with size/name/recent sorting, capability and memory-status badges, clear per-model errors and retries, and a three-step connection guide. Verified metadata is cached for five minutes, keyed by endpoint, model name and digest. Windows users get a readable connection helper; model downloads and custom-folder options are inside setup.
- Evidence-backed AI rubric feedback, Socratic follow-up, provisional explanation/semantic-label credit, and restoration of the original rubric result. Objective keys stay authoritative. Errors preserve existing grades.
- Screen-sized desktop workspaces, atlas tabs and focused answer reviews; growing records scroll inside their panels. The chat includes a desktop conversation sidebar, an animated orbital presence, staggered entrances, responsive ambient light and stable streamed replies. Mobile chat keeps its composer visible. Display settings include a saved dark mode, reduced motion and larger text. Dark mode covers study pages, diagrams, chat and model dialogs, applies before the first paint, syncs between open tabs and preserves light printed reports. Keyboard controls and automated accessibility/browser checks are included.

## Build milestones

Each phase was pushed separately and tagged: [phase-1](https://github.com/RorriMaesu/fracture-lab/tree/phase-1), [phase-2](https://github.com/RorriMaesu/fracture-lab/tree/phase-2), [phase-3](https://github.com/RorriMaesu/fracture-lab/tree/phase-3), [phase-4](https://github.com/RorriMaesu/fracture-lab/tree/phase-4), and [phase-5](https://github.com/RorriMaesu/fracture-lab/tree/phase-5). The v1.1.0 tutor redesign and v1.2.0 desktop/chat polish were each pushed in two milestones. The v1.3.0 model-library update was pushed in discovery and selector milestones. The app has a visible build-progress view. GitHub Actions validates and deploys the app to Pages.

## Visitors

Open the website. No Fracture Lab download, account, API key, or AI installation is required for the quiz. Progress stays in this browser; export it before clearing site data or changing devices.

The optional tutor requires Ollama and a local text model on the same computer. Click Connect AI in the Tutor chat or [the setup notes](docs/OLLAMA.md). Browser permissions and allowed-origin setup may be necessary. A website cannot universally launch installed software or detect total GPU VRAM. On a phone, localhost refers to the phone rather than your desktop.

## Development

Requires Node.js 22 or later. Run `npm ci`, `npm test`, then `npm run serve`. For browser checks, run `npx playwright install chromium`, then `npm run test:e2e`. On Windows, an installed Edge executable can be used with the optional `PLAYWRIGHT_EDGE` environment variable. Visitors do not need Node.js.

The app is static browser JavaScript. Development test packages are not served to students. No build step or backend is needed for the application itself. All asset/module URLs are relative to support the GitHub Pages repository path.

## Academic foundation and limits

[OpenStax section 6.5](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair) is the central source, with supporting sections 6.1–6.7. Each question preserves source identifiers, notes, and its bank version. Questions and diagrams are original authored study material; no textbook images, PDF, review-question copies, or personal course records are distributed or sent to the tutor.

Independent anatomy-instructor review and real-model grading calibration have not occurred. All AI grades remain provisional, with original rubric results retained. Healing intervals reflect approximate textbook descriptions. This public self-study tool does not authenticate course grades. See [content review notes](docs/CONTENT-REVIEW.md), [the detailed plan](docs/PLAN.md), and [release validation](docs/VALIDATION.md).

Original software: MIT. Original educational questions and schematics: CC BY-NC-SA 4.0. Credits and source links are available within the app.
