# Your Socratic tutor

Open [Tutor](https://rorrimaesu.github.io/fracture-lab/#tutor), type a question and connect your AI when prompted. You can discuss any topic. The tutor gives explanations and guiding questions, remembers recent turns, streams its reply, and saves conversations in this browser. Use the plus button for a new conversation or the clock button to return to an earlier one. You can stop a reply, retry it, copy it, or save a conversation as a readable file.

## First-time connection

Click **Connect AI**. The site first checks for a working local Ollama installation. If it finds one, your installed local text models appear automatically. Otherwise, a short guide helps you through three steps:

1. **Install.** Follow the button to the [official Ollama download](https://ollama.com/download). Ollama runs the AI on your computer. Fracture Lab remains a website; you do not install our app.
2. **Connect.** On Windows, download **Connect-Fracture-Lab.cmd** and open it from Downloads. The small, readable helper adds this website to your allowed origins, disables Ollama cloud features, and restarts Ollama. It does not need administrator access, download anything, move files, or change the server's network address. It preserves existing allowed origins. Current Ollama requests will stop when it restarts. You can read the helper in the guide before opening it, or use the manual settings instructions instead. Windows/browser security prompts may appear. For Mac and Linux, the guide provides the corresponding settings and official instructions. If your browser asks for local-network access, choose Allow.
3. **Choose a model.** Use an installed model or download one directly in the guide. Start with **qwen3:4b** if unsure. Other models and their licenses are linked from the official library. Once connected, press **Start chatting**.

After setup, the site reconnects automatically on return visits while the local tutor is enabled. **Open Ollama** uses the desktop app's `ollama://` launch link where available; manually launch the app from Start or Applications if no prompt appears.

The helper saves `OLLAMA_ORIGINS` for the exact website origin, normally `https://rorrimaesu.github.io`, and `OLLAMA_NO_CLOUD=1`. It locates a custom installation using the registered desktop launch handler, with a fallback to the standard Windows folder. If it cannot locate the app, it tells you how to open it manually after refreshing your Windows environment. [Official configuration guide](https://docs.ollama.com/faq).

## Models, folders and phones

The connected model selector is directly above the conversation. **Connected** opens preferences and additional model downloads. You can enter other valid local model names from the [Ollama library](https://ollama.com/library). Cloud and embedding-only models are excluded. Download progress is streamed; stopping the browser request does not guarantee Ollama stops its download.

Custom installation folders are tucked under **Choose where to install it** in step 1. Windows users can generate an installer command for an absolute app folder. Set `OLLAMA_MODELS` separately for your chosen model folder before downloading models; existing models are not moved automatically. [Official Windows installation guide](https://docs.ollama.com/windows).

A browser cannot reliably read total GPU VRAM. The guide offers a simple memory selector with starting suggestions, rather than claiming an automatic hardware measurement. Download size is not total memory required.

Use the tutor on the computer running Ollama. On a phone, localhost refers to that phone rather than your desktop. The quiz still works on mobile without AI. The site accepts only loopback addresses and does not provide an unauthenticated LAN server or public tunnel.

## Chat and quiz feedback

General conversation sends your recent chat messages directly to your selected local model. It is not limited to Chapter 6, has no browsing tools, and does not assign quiz scores. AI can make mistakes; check important information. Up to 12 conversations and 80 messages per conversation are stored locally. Long conversations use a bounded window of recent messages for model context. Site-data clearing removes this history; save conversations you want to keep.

The **Also review my practice answers** preference controls automatic quiz feedback. Quiz assessment remains a separate evidence-backed rubric process using only the learner answer, original authored notes, rubric and approved source IDs. The textbook PDF and images are never sent. Invalid assessments preserve previous grades. AI explanation/semantic-label grades are provisional and can be restored to the original rubric result. Objective answer keys remain authoritative.

The release is tested against a simulated Ollama API for conversation, download and failure behavior. A real two-turn browser conversation passed with Ollama 0.40.3 and qwen3.5:4b-q4_K_M on this computer. The helper is syntax-checked and reviewed but has not been executed on every OS installation. Real-model grading calibration and instructor review remain outstanding.
