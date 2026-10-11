# Fracture Lab
An animated, browser-based study lab for fracture patterns, bone repair and supporting OpenStax Chapter 6 concepts.

**Live site:** https://rorrimaesu.github.io/fracture-lab/

## Build milestones
Each completed phase is committed and pushed to main, with a corresponding release tag. The site includes a build-progress view.

1. Foundation: visual direction and representative interactive questions.
2. Quiz engine: randomization, grading, progress, review and backups.
3. Content and atlas: expanded question bank, diagrams and repair animation.
4. Local tutor: Ollama connection, setup, model selection and feedback.
5. Quality and release: browser/accessibility checks and deployment verification.

## Local use
Requires Node.js 22 or later for development checks. Run `npm test` and `npm run serve`, then open the printed URL. Students only need the website; Node.js is not needed by visitors.

## Sources
The educational material is grounded in Anatomy and Physiology 2e Chapter 6. Questions and SVG illustrations are original authored study material, with source references. They have not yet been independently reviewed by an anatomy instructor. See the in-app Sources & credits.

The optional tutor is for local models and uses our authored rubrics and explanations. No textbook upload is performed.

