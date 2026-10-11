# Fracture Lab: detailed product and implementation plan

Prepared for RorriMaesu | October 11, 2026

## Product decision

Build **Fracture Lab**, a polished, responsive study website for OpenStax Anatomy and Physiology 2e Chapter 6. The default experience is a comprehensive fracture quiz centered on Section 6.5. Relevant material from the surrounding chapter explains anatomy, healing, and bone strength. This is a formative study tool, not a system for authenticated course grades.

The website runs on GitHub Pages without downloading our application. The quiz, diagrams, reviewed explanations, citations, retakes, and progress tracking all work without AI. Students can optionally connect locally installed Ollama for Socratic tutoring, personalized feedback, and rubric-based assessment of written answers.

Proposed repository: `RorriMaesu/fracture-lab`. Expected project URL after deployment: `https://rorrimaesu.github.io/fracture-lab/`. These are proposed names; no repository or deployment was created during this planning task.

Three design decisions:

1. Use a reviewed question bank with deliberate coverage and controlled repetition.
2. Keep reviewed answer keys and explicit rubrics authoritative. AI interprets language and explains, with validation and an uncertainty route.
3. Treat local AI as an optional desktop capability with explicit browser and operating-system limits. Mobile users receive the complete core quiz.

## 1. Source review and scope

I reviewed the supplied 1,347-page PDF, including all of Chapter 6, its review questions, and critical-thinking questions. Its metadata identifies Anatomy and Physiology 2e; its copyright page is the 2026 CC BY-NC-SA 4.0 edition. Printed page numbers differ from PDF viewer pages. The screenshot's page 231 does not match the equivalent passage's page number in this particular PDF.

| Source | Printed pages | PDF pages | Quiz role |
|---|---:|---:|---|
| 6.1 Functions of the Skeletal System | 197–200 | 213–216 | Living bone, support, protection, minerals, marrow |
| 6.2 Bone Classification | 200–202 | 216–218 | Relevant bone shape and orientation |
| 6.3 Bone Structure | 202–212 | 218–228 | Compartments, coverings, blood supply, matrix, cells |
| 6.4 Bone Formation and Development | 212–218 | 228–234 | Ossification, modeling, remodeling, fragility |
| 6.5 Fractures: Bone Repair | 218–221 | 234–237 | Primary classification and repair curriculum |
| 6.6 Exercise, Nutrition, Hormones, and Bone Tissue | 221–225 | 237–241 | Loading, nutrients, hormones, osteoporosis |
| 6.7 Calcium Homeostasis | 225–226 | 241–242 | Calcium regulation and resorption connections |
| Terms, review, and questions | 227–234 | 243–250 | Coverage and terminology cross-check |

The old fracture-quiz link resolved through the web reader to Wisc-Online's Common Musculoskeletal Fractures page. That does not demonstrate that its interactive activity still works. Our app should have no runtime dependency on that activity.

Default scope is fractures and repair. An optional **Chapter Connections** track adds relevant supporting material. Do not advertise complete assessment of every Chapter 6 objective unless a later chapter-wide bank is added; unrelated bone-marking and embryological details would dilute this fracture quiz.

Students should learn to identify transverse, oblique, spiral, comminuted, impacted, and greenstick patterns; distinguish open/compound from closed/simple fractures; combine compatible descriptors; distinguish fracture classification from reduction; sequence repair; identify healing tissues; explain bone-cell roles; connect repair with blood supply and ossification; and explain the chapter's introductory examples of complications and fragility.

Item-writing rules:

- Identify whether a prompt asks about skin involvement, geometry, cells, mechanism, or stage. An open transverse fracture must not be forced into one exclusive category.
- Do not imply that closed fractures always receive closed reduction or that classification alone determines treatment.
- Treat the chapter's approximate repair intervals as textbook approximations, not universal patient deadlines.
- Use plausible distractors tied to misconceptions. Avoid tricks based on grammar, length, double negatives, and “all of the above.”
- Keep scored content within what Chapter 6 supports. Label and separately source any future clinical extension.
- Review source ambiguities before turning them into rigid scoring rules.
- Obtain instructor review before describing the bank as professor-reviewed. This review is recommended, not already completed.

## 2. Question-bank blueprint

**Authoring target: 320 substantively distinct reviewed items: 240 fracture-focused and 80 supporting items.** These are planned counts, not questions already authored. Quality takes priority over filling a quota with paraphrases.

| Domain | Items |
|---|---:|
| Fracture recognition across text and visuals | 80 |
| Multiple descriptors, reduction, introductory complications | 48 |
| Repair stages, tissues, causal explanations | 80 |
| Cellular mechanisms integrated with repair | 32 |
| Relevant anatomy, matrix, blood supply | 28 |
| Ossification and remodeling foundations | 20 |
| Loading, nutrition, hormones, fragility | 20 |
| Calcium homeostasis connections | 12 |
| **Total** | **320** |

Provisional primary interaction mix: 104 single-choice, 48 multiple-selection/classification, 64 diagram labels/hotspots, 40 ordering/matching, 48 short explanations, and 16 misconception-correction cases. These describe the same 320 items. Tag every item by objective, difficulty, reasoning level, and question family.

Target roughly 30% identification/recall, 45% application, and 25% explanation/analysis. Offer 10-question quick practice, 20-question standard practice, and 30-question comprehensive sessions. “Comprehensive” samples major domains; it does not mean every fact appears in one attempt.

Question families group tasks with the same underlying reasoning. Changing names, choice order, panel arrangement, or cosmetic rotation does not create a genuinely new item. Reviewed variants help transfer learning but share a family ID.

Illustrative original items:

| Task | Format | Credit | Source |
|---|---|---|---|
| Classify a right-angle shaft break with intact skin | Two fields | Transverse and closed, separately scored | 6.5, Table 6.4 |
| Name a target on the bridge inside the broken ends | Typed diagram label | Internal callus; approved equivalent terms | 6.5, Figure 6.21 |
| Put four repair scenes in biological order | Ordering | Correct progression; explicit partial-credit rule | 6.5, Figure 6.21 |
| Explain why local vessel disruption matters | Short response | Connects disrupted supply to cell survival | 6.3 and 6.5 |
| Correct “osteoclasts build the new bone bridge” | Error correction | Distinguishes resorption and formation | 6.3 and 6.5 |
| Explain why closed fracture does not name the reduction method | Short response | Separates skin status from treatment approach | 6.5 |
| Predict effects of reduced mechanical loading | Scenario | Correct direction and mechanism | 6.6 |
| Connect increased resorption to circulating calcium | Explanation | Correct relationship and mechanism | 6.6–6.7 |

## 3. Retakes and meaningful randomization

Offer three selection policies:

- **Fresh practice:** unseen items first; avoid recently seen families while alternatives remain.
- **Review mistakes:** deliberately revisit weak concepts, ideally through a different representation before repeating the original.
- **Balanced assessment:** stable topic/difficulty blueprint for more comparable scores.

Choose topic quotas before sampling individual questions. Never repeat an item within one attempt. Exclude related questions that would reveal each other's answers. Defer feedback until submission in assessment mode where immediate explanations would cue later items.

Use a persisted random seed and a sound shuffle such as Fisher-Yates. Shuffle choices independently and score by immutable answer IDs, never A/B/C/D or array position. Check answer-position balance over many runs without a predictable repeating sequence. Preserve the displayed order when an attempt resumes.

Shuffle diagram panels where appropriate while keeping markers attached to their real structures. Retain meaningful spatial/numeric ordering. Do not mirror anatomy without checking orientation and correctness.

Track exposure for both items and families, last-seen time, outcomes, hints, and confidence. Prefer unseen, then least-recently-seen content. In a strict “new questions only” mode, disclose pool exhaustion and offer a smaller quiz, another mix, or review. Never silently call a repeated item new.

A finite bank cannot provide infinite novelty. The arithmetic ceiling for 320 eligible items in 20-item attempts is 16 disjoint sessions; the default fracture pool, family restrictions, and topic balance reduce that number. Display remaining unseen items for the selected track. Repetition in review mode is intentional.

Start review scheduling at approximately 1, 3, 7, and 14 days, adapting to results. These are proposed product defaults, not a validated learning algorithm. Require repeated success across distinct questions, dates, and representations before estimating mastery, including unassisted success.

## 4. Premium visual and interaction design

Use a modern anatomy-atlas aesthetic: warm ivory surfaces, dark ink typography, restrained teal accents, precise linework, generous spacing, and subtle depth. Red supports anatomy and feedback emphasis. Make the question and diagram visually dominant.

Screens: study dashboard; session setup; quiz workspace; feedback; attempt report; searchable mistake notebook; diagram atlas; tutor setup and settings. The dashboard offers resume, start, review due material, and concept progress. The report distinguishes first-attempt and assisted performance.

| Figure | Activity | Preparation |
|---|---|---|
| 6.20 Types of Fractures | Identify, compare, classify | Isolate panels; remove names and letter-order cues; preserve skin and fracture geometry |
| 6.21 Stages in Fracture Repair | Order, label, explain transitions | Separate scenes; preserve leader-line targets; provide labeled reveal |
| 6.7 Anatomy of a Long Bone | Locate relevant compartments | Select a manageable target subset |
| 6.8 Periosteum and Endosteum | Locate repair sites and cell actions | Focused enlargement and accessible callouts |
| 6.11 Bone Cells | Match cells with functions | Separate label and function layers |
| 6.15 Blood and Nerve Supply | Explain vascular connections | Optional supporting activity after asset review |

I visually inspected the fracture, repair, long-bone, and cell figures. The repair illustration is too dense to simply shrink onto a phone.

Preserve immutable originals and an adaptation log. Prefer precise vector-layer edits where possible. For raster label removal, use a controlled edit and compare against the original at full size; reject changed fracture lines, vessels, boundaries, or tissue. Do not use unreviewed generated anatomy as scored evidence. Build educational overlays and motion in SVG/CSS around verified anatomy.

Desktop labeling can use fields beside leader lines. Phones should show numbered targets and one large active field beneath the diagram, with zoom, pan, reset, and a remaining-target list. Avoid tiny fields on top of the image.

Animate hematoma, callus formation, bony replacement, and remodeling with pause, replay, scrubbing, and step controls. A “predict next” task pauses before revealing a stage. Brief transitions can connect a correction with its target. Never let animation reveal a scored answer early or imply that animation duration equals biological time.

Honor reduced motion and provide an in-app motion toggle. Keep a complete static representation. Pause offscreen motion.

## 5. Responsive design and accessibility

Wide screens use a central workspace and optional tutor sidebar. Phones prioritize diagram and response, opening tutoring in a separate panel with an obvious return action. Keep submit controls reachable without covering content or the on-screen keyboard.

Test from 320 CSS pixels to large desktops, with touch targets around 44×44 CSS pixels or larger, readable text, visible focus, and no accidental page-wide horizontal scrolling. Diagrams can have intentional pan/zoom viewports.

Every action must work with keyboard and touch. Provide click/tap and move-button alternatives to dragging. Supply screen-reader descriptions and equivalent nonvisual tasks that preserve the learning objective without naming the answer. Do not remove meaningful accessibility information simply to conceal labels; use a different equivalent task where necessary and track differing difficulty.

Default to untimed practice. Support text enlargement, 200% zoom, accessible feedback announcements, and text/icons alongside color. Do not penalize response speed. Target WCAG 2.2 AA with automated and manual keyboard/screen-reader checks.

## 6. Grading contract

AI is valuable for interpreting written answers, spelling, and partial understanding. Making an arbitrary local model the sole judge would make scores vary by model. Recommended design: reviewed keys and rubrics determine credit; AI proposes language-sensitive assessments and personalized feedback.

| Response | Authority | AI role |
|---|---|---|
| Single choice/fixed classification | Reviewed answer key | Explain and ask follow-up |
| Diagram label | Normalization, aliases, careful typo rules | Adjudicate uncertain wording |
| Multi-select, matching, ordering | Explicit scoring rubric | Explain understood/missed parts |
| Short explanation | Required-concept rubric | Propose criterion credit with answer evidence |
| Conflict or uncertainty | Pending review | Clarify without inventing certainty |

Every question can receive AI feedback when enabled. A correct objective answer cannot become wrong because a model disagrees. Clearly label automatic, AI-assisted, provisional, and self-assessed results.

Normalize case, whitespace, punctuation, and valid word forms; accept equivalent terms such as compound/open. An unambiguous minor misspelling earns full conceptual credit with a spelling correction. Never fuzzy-correct one valid anatomical term into another: osteoblast/osteoclast and internal/external are different concepts. Handle negations and build/resorb reversals explicitly.

Score multi-part classification by component. Written rubrics contain two to four weighted required concepts and contradiction rules. Partial credit reflects correct understanding rather than answer length. Make “select everything” unprofitable in multi-select tasks and disclose the rule. Ordering can score required precedence relationships while showing the complete order afterward.

Without AI, objective tasks and accepted label variants still grade. Rich written answers can use self-assessment against the rubric or remain pending for later review. Display graded points and pending responses separately; a failed connection must never become a wrong answer.

### Reliable model assessment

Send only the current question, original authored rubric, student answer, and approved teaching notes. Ask for schema-constrained criterion IDs, points, short evidence from the student's answer, missing concepts, contradictions, spelling suggestions, approved source IDs, and concise feedback. Validate IDs, ranges, totals, and citation membership before applying scores.

Use low temperature, bounded output, cancellation, timeouts, and a small retry limit. Cache by question/rubric revision, model digest/settings, and answer. Low temperature does not guarantee identical judgments. A model's own confidence is not proof of correctness.

Reject malformed responses and invented criteria or citations; fall back to reviewed explanations. Treat student writing as data, including attempts to instruct the grader to award full credit. Render sanitized output, never executable model HTML. Our tutor integration grants no tools, arbitrary web access, or filesystem access.

Unvalidated models may support conversation, but their written grades remain provisional. Require an anatomy-specific gold-set evaluation before recommending a model for automatic credit. Keep an audit trail and “Review this grade” action. Preserve any transparent self-assessment separately from automatic results.

### Socratic interaction

Ask one focused question at a time: notice a feature, distinguish alternatives, explain a reason, then reveal the explanation when requested. Adapt to the actual misconception. Let students skip tutoring or request a direct explanation.

Study mode allows immediate hints; assessment mode defers them until completion. Record assistance separately from independent recall. Keep the tutor within course learning, rather than diagnosing injuries or recommending individualized treatment.

## 7. Mistake notebook and citations

Wrong, partially correct, and uncertain answers create a record with original prompt/diagram revision, student response, expected answer, rubric breakdown, misconception tags, help used, timestamp, grading provenance, and later review outcomes. Improvement does not erase the original learning history.

Every released item requires a source record: book/edition, section/subsection, figure/table, printed and PDF pages, canonical URL, verified optional anchor, and link-check date. The application selects links from this registry; the AI never invents URLs.

A review card explains what was missed, why, and what to look for in the reading. Actions: **Read the section**, **See the diagram**, **Try a related question**. Preserve the attempt when opening the book. Prefer a separate source tab over an iframe that may be blocked.

Verified targets:

- [6.5 Fractures: Bone Repair](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair)
- [Figure 6.20: Types of Fractures](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair#fig-ch06_05_01)
- [Figure 6.21: Stages in Fracture Repair](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair#fig-ch06_05_02)
- [6.3 Bone Structure](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-3-bone-structure)
- [6.4 Bone Formation and Development](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-4-bone-formation-and-development)
- [6.6 Exercise, Nutrition, Hormones, and Bone Tissue](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-6-exercise-nutrition-hormones-and-bone-tissue)
- [6.7 Calcium Homeostasis](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-7-calcium-homeostasis-interactions-of-the-skeletal-system-and-other-organ-systems)

All seven chapter-section URLs returned HTTP 200 in this review. Both figure IDs exist in public HTML; actual scrolling is a browser acceptance test. If an anchor changes, fall back to the section plus figure name. Offline mode can retain our explanations, while opening the public book still needs connectivity unless separately available offline.

## 8. Ollama feasibility and setup

GitHub Pages serves the interface and static assets. The student's computer runs the model; GitHub does not run it. Prove this connection on a real HTTPS Pages deployment early. [GitHub Pages hosting](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

| Request | Planned behavior and boundary |
|---|---|
| Detect running Ollama | After enabling tutoring, check the configured loopback endpoint with a short timeout; reconnect automatically on later opted-in visits |
| Launch Ollama | User-clicked ollama:// link on supported installations, followed by a connection test; older/CLI-only installs and some browsers may lack a handler |
| Detect installation when stopped | A failed request cannot distinguish absent software, stopped service, CORS, permission denial, or wrong endpoint |
| Select installed models | Read /api/tags and /api/show; identify compatible chat models |
| Download models | User initiates /api/pull on local Ollama; show progress and errors |
| Browse all models | Link to the official library and offer an exact model-tag field; do not assume a complete stable catalog API |
| Choose installation folders | Give OS-specific instructions; the site cannot silently install software or change system configuration |
| Detect total/free VRAM | Best-effort clues and user input; no universal browser VRAM API is assumed |
| Use desktop Ollama from a phone | Phone localhost means the phone; desktop access requires separately secured connectivity |

Current upstream Ollama desktop code handles a bare ollama:// URL, and its Windows installer registers the protocol. This supports a conditional **Open Ollama** button, not a universal promise that a click starts a reachable service. Test minimum releases, browser confirmations, startup timing, and absent-handler behavior. Keep manual Start-menu/Applications instructions and **Test again** available. [Desktop handler](https://github.com/ollama/ollama/blob/main/app/cmd/app/app.go), [Windows registration](https://github.com/ollama/ollama/blob/main/app/ollama.iss)

### Nontechnical onboarding

1. **Try the quiz:** no account, download, or AI setup needed.
2. **Enable local tutor:** explain where answers go and request connection access when needed.
3. **Check connection:** distinguish checking, ready, reachable/no model, busy, and cannot-connect states. Do not label every failure “not installed.”
4. **Install if needed:** link to the [official download](https://ollama.com/download), with Windows/macOS/Linux guidance and default/custom-location paths.
5. **Allow this website:** explain exact-origin configuration, restarting Ollama, and browser local-network permission.
6. **Choose a model:** show compatible installed models, evaluated recommendations, and optional downloads.
7. **Test a response:** run a small connection/format check and return to the quiz.

On Windows, Ollama documents a custom application folder using `OllamaSetup.exe /DIR="D:\Apps\Ollama"`. Model storage is separate: `OLLAMA_MODELS`, for example `D:\OllamaModels`. The site can generate explained, copyable instructions from a typed path; it cannot claim it moved anything. Separate new-install and existing-install guidance: changing the directory variable alone does not migrate old model files. Restart after environment changes. Verify instructions separately for each operating system. [Windows installation](https://docs.ollama.com/windows)

For this project, allow the origin `https://rorrimaesu.github.io` using `OLLAMA_ORIGINS`, without the repository path. Avoid wildcards and public unauthenticated endpoints. Permissions also cover other project paths on this origin; a dedicated domain could provide stronger separation later. Keep the normal endpoint bound to loopback. [Ollama FAQ](https://docs.ollama.com/faq)

Only select downloaded local models for the local tutor. A localhost URL alone does not guarantee local inference, since Ollama supports cloud-backed models. Document the local-only setting `OLLAMA_NO_CLOUD=1` and verify model provenance. Never silently switch to cloud inference. [Ollama API](https://docs.ollama.com/api/introduction), [Local-only configuration](https://docs.ollama.com/faq)

Browser local-network permission is separate from Ollama cross-origin configuration. Test Chrome/Edge, Firefox, and Safari independently. Never instruct students to disable browser security flags. Errors often conceal the exact cause: present a short checklist and retest action instead of unsupported diagnosis. [Chrome Local Network Access](https://developer.chrome.com/blog/local-network-access)

### Models and downloads

Populate the selector from real model names/digests and capabilities. Check response compatibility, remember the choice, and preserve answers if a model disappears. Record digest/version with grading so updates do not silently change historical scores. [Installed models](https://docs.ollama.com/api/tags), [Model capabilities](https://docs.ollama.com/api-reference/show-model-details)

Maintain a small recommended catalog with the app. For others, link to the [official library](https://ollama.com/library) and accept a model name/tag. Private models may need separate authentication. Cloud-only and embedding-only models are not usable local chat tutors.

Before a large download, show known size as an estimate, the model license link, and an explicit download action. Ollama downloads into its configured model folder, not the website cache. Show indeterminate progress until totals arrive, then streamed progress. Test cancellation semantics before claiming that closing the browser stops a server-side download. Refresh inventory after reconnecting; handle network/disk failures and retries. Do not promise free-disk-space detection through the browser. [Pull endpoint](https://docs.ollama.com/api/pull)

### Hardware-aware recommendations

Ollama's /api/ps reports a loaded model's size_vram, not total/free GPU memory. WebGPU offers limited adapter information, not a universal VRAM measurement. Never report guessed hardware as detected. [Running models](https://docs.ollama.com/api/ps), [WebGPU adapter information](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapterInfo)

**Help me choose** should accept RAM/VRAM or “I don't know,” run a short optional benchmark, and suggest the smallest evaluated model with good feedback and acceptable speed. CPU-only, integrated-GPU, and unified-memory systems need separate guidance. Leave headroom for context and other applications; model file size is not runtime memory.

Initial evaluation candidates: [Qwen3 4B](https://ollama.com/library/qwen3:4b), [Qwen3 8B](https://ollama.com/library/qwen3:8b), and [Gemma 3 4B](https://ollama.com/library/gemma3:4b). These are candidates, not a claim they are newest or best. Checked Qwen3 downloads are about 2.5 GB and 5.2 GB respectively; runtime requirements vary with context, quantization, and backend. Start with compact context and one grading request at a time; update recommendations based on anatomy-task evaluation.

Mobile receives the complete non-AI quiz. A nearby desktop is not automatically reachable. Secure desktop-to-phone tutoring is a later advanced feature needing authentication and tested HTTPS/browser behavior. Do not expose port 11434 publicly or promise a LAN IP always works.

## 9. Progress and privacy

Use IndexedDB for attempts/reviews and localStorage for small preferences. Namespace databases/caches because GitHub project paths under one owner share an origin. Save after submitted answers and key state changes.

Persist bank, diagram, and rubric revisions; seed; selected items; option order; responses; points; pending states; hints; confidence; and grading/model provenance. Restore the exact attempt on resume. Never silently regrade history after content/model updates; preserve an audit record for explicit corrections.

Measure accuracy, coverage, retention, confidence, and independent versus assisted success. Compare equivalent assessment mixes and show sample counts. Label mastery as a study estimate. An easier quiz must not masquerade as improvement.

Provide versioned JSON backup export/import and printable study reports. Validate imports, limits, duplicates, and malformed files. Explain that clearing site data, private browsing, or browser eviction can remove progress. Request persistent storage where supported and offer occasional backup reminders.

On-device profile names help shared computers but are not secure accounts. No automatic cross-device synchronization is promised. Authenticated rosters, teacher dashboards, and reliable cloud sync require additional infrastructure.

Our app should not transmit answers/transcripts to GitHub. GitHub still receives normal hosting traffic and may log visitor IPs. Store tutor conversations only through an explicit preference; provide export/delete controls. Never publish the supplied screenshot, local source-file path, class grades, or teacher comments. [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 10. Technical architecture

Recommended implementation: static TypeScript with React and Vite, SVG diagrams, CSS/Web Animations, schema validation, and IndexedDB. Pin supported dependency versions at development time. Build static HTML/CSS/JS/assets for Pages.

Separate the content registry, quiz selection, grading, diagrams, progress, tutor adapter, and presentation. Core rendering and navigation must not depend on an AI response.

Browser quiz → reviewed keys/rubrics → progress and mistake notebook → verified textbook links.

Optional branch: current answer → local Ollama → validated assessment/feedback → the same notebook.

Suggested repository layout:

- src/quiz/: blueprint selection and attempt state.
- src/grading/: rubrics and assessment validation.
- src/tutor/: connection, models, downloads, setup.
- src/progress/: records, backups, migrations.
- src/components/: accessible shared interface.
- content/questions/: reviewed source-mapped items.
- content/sources/: citations and edition mapping.
- content/models/: evaluated recommendations.
- public/diagrams/ and public/licenses/: visual assets and attribution.
- tests/: engine, integration, and browser checks.
- docs/: curriculum, setup, maintenance.
- .github/workflows/: validation and Pages deployment.

Use hash routing or another tested static-host strategy and the /fracture-lab/ base path. Bundle essential assets rather than hotlinking textbook figures. Lazy-load diagrams and tutoring. Consider offline caching after the reliable initial version; use app-specific service-worker scope/caches and do not change an active attempt's bank midway through it.

Never ship GitHub tokens or private credentials in browser code. Static question banks and keys are inspectable; appropriate for self-study, not exam security.

### Data contracts

Each question needs immutable ID/revision, family ID, objectives, difficulty, format, prompt, choice IDs, answer specification, rubric, approved aliases, explicitly confusable terms, diagram/target IDs, explanation, hints, source IDs, and review status. Release builds reject unreviewed items.

Each attempt needs configuration, bank version, seed, item IDs, presentation order, response/help events, points, provisional/pending states, timestamps, and grader provenance. Keep migrations explicit.

Each diagram needs original/adapted references, attribution, revision, aspect ratio, normalized target coordinates, accessible alternatives, and animation metadata. Anatomical geometry is independent of panel order.

## 11. Reuse and attribution

The supplied PDF uses **CC BY-NC-SA 4.0**, not an older license associated with other OpenStax copies. Record edition and figure credits; retain attribution on relevant page views; link the free book and license; identify adaptations; distribute adapted material under the required terms. Avoid OpenStax/Rice logos and endorsement implications. Inspect third-party credits separately, especially photographs/micrographs.

The current OpenStax site also states separate restrictions on ingesting its material into LLMs or AI offerings. This is a publishing/design dependency, not an instruction from the textbook controlling this planning task. Resolve applicable terms or permission before distributing copied textbook material in the tutor. The proposed tutor uses original authored questions, rubrics, and teaching notes and does not automatically upload the textbook or scraped sections. Use clearly compatible material for any copied text/images passed to a model. [OpenStax reuse statement](https://openstax.org/books/anatomy-and-physiology-2e/pages/6-5-fractures-bone-repair), [Licensing explanation](https://help.openstax.org/s/article/Commercial-use-under-the-Creative-Commons-License)

Keep software licensing separate from content, font, asset, and dependency notices. A code license does not override share-alike obligations. Asset records need creator, source, license, modifications, and attribution.

## 12. Implementation phases

| Phase | Deliverable | Completion gate |
|---|---|---|
| 1. Baseline and feasibility | Source/rights registry; real HTTPS Pages-to-Ollama experiment | Test connection, permissions, models, structured response, pull progress, supported launch |
| 2. Interaction prototype | Desktop and phone layouts with 12 representative items | Review diagram legibility, typing, keyboard, motion, feedback, resume |
| 3. Core quiz | Non-AI sessions, shuffle, grading, notebook, progress, backups | Correct answer identity, no duplicates, resilient restore |
| 4. Content and visuals | Target 320 reviewed items with sources/families | Coverage audit, anatomical review, citations, asset QA |
| 5. Optional tutor | Wizard, models/downloads, hints, validated written grading | Failure handling and model evaluation pass |
| 6. Accessibility/performance | Desktop/mobile qualification | Keyboard, screen reader, zoom, touch, reduced motion, slow-device checks |
| 7. Student release | Documentation and public Pages deployment | Verify production links, assets, navigation, and rollback |

Create the new repository at implementation start so Phase 1 can test the real origin. Confirm account and name availability. Use a public repository for GitHub Free Pages or verify plan support for private hosting. Add README, attribution/licenses, contribution/content-review guidance, and a deployment workflow with only necessary permissions.

Publish the student release after its gates. Verify the exact URL and retain a tagged rollback point. No repository or deployment was created in this planning phase.

### Required validation

- All item IDs, rubrics, sources, assets, and targets resolve.
- Shuffle preserves scoring and report reconstruction through save/resume.
- Coverage/family exclusions handle exhaustion, with no within-attempt duplicates.
- Partial-credit bounds and select-everything behavior are correct.
- Spelling tolerance does not conflate anatomical terms, negations, or opposite mechanisms.
- AI malformed output, invented sources, timeouts, missing models, cloud-backed selections, and grading-instruction attacks have fallbacks.
- Gold-set model evaluation covers correct, wrong, misspelled, partial, contradictory, and adversarial answers; repeat across runs/digests.
- Backup round trips, migrations, duplicate imports, corrupt files, and storage errors work.
- Every task supports keyboard and touch; nonvisual equivalents are usable.
- Core quiz passes current Chrome/Edge, Firefox, Safari, iOS Safari, and Android Chrome; report tutor compatibility separately.
- Production project-path assets and refresh/navigation work.
- Check public source links and figure targets at release and as maintenance.

Suggested acceptance targets: all deterministic scoring cases pass; no critical misconception falsely earns full credit in the evaluation set; at least 95% criterion-level agreement with a reviewed gold set for recommended automatic-grading models; uncertain cases abstain. These are targets, not measured performance. Models that fail can support conversation/provisional grading while objective scoring remains dependable.

Target roughly 500 KB or less for the initial compressed application bundle, excluding lazy-loaded diagrams; responsive interaction on a modest phone; a fast first quiz on ordinary mobile service. Measure before advertising speed. AI latency must never freeze the interface.

## 13. Additional learning features

- Optional confidence ratings to reveal confident misconceptions.
- Side-by-side confusable-pattern comparisons and “why is this distractor wrong?”
- Repair-timeline exploration before scored sequencing.
- A local ambiguous-question flag with exportable report, requiring no GitHub account.
- Shareable challenge seeds with no personal history.
- Printable mistake/reading checklists.
- A final “most interesting fact learned” reflection, useful for the class follow-up shown in the screenshot. Do not post it automatically.
- Three suggested next study actions driven by weak objectives.
- Content corrections linked to affected attempts, preserving original and explicitly revised results.

## 14. Launch scope and later work

Launch the full non-AI fracture experience, reviewed bank, atlas, animated repair, cited notebook, local progress/backups, and optional Ollama on tested desktop combinations. Keep mobile tutor limits visible.

Defer accounts, cloud sync, class dashboards, public leaderboards, remote Ollama bridges, live AI-generated scored questions, and diagnostic image interpretation. These require infrastructure or validity work beyond the first dependable replacement.

The first implementation deliverable should be a representative desktop/mobile prototype and real HTTPS-to-local-Ollama feasibility result, followed by reviewed content and release.

## Verification notes

[Ollama structured outputs](https://docs.ollama.com/capabilities/structured-outputs) supports schema-constrained responses; application validation and educational evaluation are still required.

Research date: October 11, 2026. Recheck models, sizes, browser behavior, and moving-source references during development. No end-to-end browser/Ollama integration was tested during planning. Source reading verifies capability evidence, not runtime operation.
