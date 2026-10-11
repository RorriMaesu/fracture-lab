# Local tutor guide

Open the Tutor page in the live app for illustrated-by-interface steps, copy controls, model selection, download progress, and a five-example quick model check.

1. Install [Ollama](https://ollama.com/download) on the computer where you use Fracture Lab.
2. Set `OLLAMA_ORIGINS` to `https://rorrimaesu.github.io` and `OLLAMA_NO_CLOUD` to `1`. Restart Ollama. Allow the browser's local-network/device permission if asked.
3. Check the connection on the Tutor page. Choose an installed local text-generation model or download one from the model library.
4. Run the quick check. All AI concept grades remain provisional; this check is not full academic calibration.

The quiz needs no installation and no AI account. Ollama and its model files are separate local installations. A GitHub Pages website cannot silently install programs, read arbitrary disk folders, launch a terminal, or universally detect GPU VRAM. Its Launch Ollama link uses the desktop app's `ollama://` handler where available; manually open the app if the handler is absent.

On Windows, the installer accepts `/DIR="D:\Apps\Ollama"`. The in-app guide lets users generate a command with their chosen absolute folder. Set `OLLAMA_MODELS` separately to choose the model storage folder before downloading. Existing model files are not automatically moved. [Official Windows instructions](https://docs.ollama.com/windows).

The app accepts loopback endpoints only. Localhost on a mobile phone refers to that phone, not the desktop. The core quiz supports mobile. No unauthenticated LAN service or public tunnel is required or provided. [Ollama configuration FAQ](https://docs.ollama.com/faq).

Downloads use `/api/pull`; progress is streamed. A stopped browser request does not guarantee server-side cancellation. Users can enter other valid model names from the [official library](https://ollama.com/library). Cloud tags and embedding-only models are not used for tutoring.

AI receives only the current learner answer, original authored notes, rubric and approved source identifiers. It does not receive the textbook PDF or figure images. Credit requires quoted answer evidence and valid rubric criteria. Invalid JSON, invented sources, missing evidence, uncertainty and network errors preserve the previous grade. Written and semantic label credit is provisional, with the original grade retained for restoration. Multiple choice, multiple selection and sequence credit remain anchored to their answer key/component rubric. Feedback and follow-up text are escaped before display.

Testing uses a simulated Ollama API for deterministic UI and failure checks. The release has not been tested against every browser, every installation, or a real selected local model; academic calibration and instructor review remain outstanding.
