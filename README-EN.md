# 📋 FormScript — Interactive AI Requirements & Clarifier Bridge
> **A portable, lightweight web form tool that bridges AI questions into an interactive browser questionnaire, returning 100% accurate specifications for precision code generation.**

Read in other languages: [العربية (Arabic)](./README-AR.md) | [Français (French)](./README-FR.md) | [Main](./README.md)  
🤖 **For AI Agents:** See [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md)

---

## 💡 The Core Problem & Solution

When requesting complex coding tasks from an AI (ChatGPT, Claude, Cursor, Antigravity, Copilot), the output is often inaccurate due to missing architectural constraints and unclear requirements.

Answering 5-10 technical multiple-choice questions directly inside a chat window is tedious, slow, and formatted inconsistently. **FormScript** eliminates this friction:

```
[AI Chat] ────(Writes questions file)───> [questions/ folder] ───> [Interactive Web Form]
                                                                            │
[100% Exact Code] <──(Paste Output)──── [1-Click Copy] <──────(Interactive Selections)
```

---

## ⚡ Key Features

1. **Default English with Multi-Language UI (EN / AR / FR):**
   - Seamlessly switch between **English (LTR)**, **العربية (RTL)**, and **Français (LTR)** with live layout and typography adjustments.
2. **Infinite Language Support for Questions:**
   - The AI writes questions in **any language** you are speaking (Arabic, English, French, Spanish, German, Japanese, etc.). FormScript parses any language without restrictions.
3. **Smart "Other" (Write-in) Field:**
   - Every question includes an **Other** option. When selected, an input field smoothly expands to write custom details.
4. **Direct `questions/` File Synchronization:**
   - Questions files placed in the `questions/` directory are auto-detected by the server without manual copy-pasting.
5. **Built-in Web File Manager:**
   - Browse existing question files, edit raw text, delete files, or paste & create new files directly in the browser.
6. **1-Click Copy to AI:**
   - Formats selected answers into a clean, structured Markdown payload ready to paste straight into your AI chat.
7. **One-Click Windows Runner (`run.bat`):**
   - Verifies Node.js, auto-installs packages (`npm install`), starts the server, and pops open `http://localhost:3000`.

---

## 🤖 How an AI Assistant Uses FormScript (Workflow Scenario)

If you are inside any project (e.g. `Project ABC`) and tell the AI:
> *"I want to build feature XYZ, use FormScript to clarify requirements."*

1. **AI clones or navigates into FormScript:**
   ```bash
   git clone https://github.com/xlr9/FormScript.git formscript
   ```
2. **AI detects your language:** If you chatted in Arabic, it writes Arabic; if English, it writes English.
3. **AI creates questions file:** It generates `formscript/questions/feature_xyz.txt`.
4. **AI starts the server:** Runs `run.bat` or `npm start`.
5. **You answer in the browser:** Click options, type custom notes, and click **"Copy to AI"**.
6. **AI generates exact code:** You paste the result back into chat, and the AI proceeds with 100% precision.

---

## 🚀 Quick Start Guide

### On Windows (Recommended):
Double-click:
```cmd
run.bat
```

### Via Terminal:
```bash
# 1. Install dependencies
npm install

# 2. Start server
npm start
```
Open **`http://localhost:3000`** in your browser.

---

## 📁 File Structure

```text
FormScript/
├── AI_INSTRUCTIONS.md   # Primary instructions for AI Agents
├── AGENTS.md            # Standard Agent specification
├── README-EN.md         # English Documentation
├── README-AR.md         # Arabic Documentation
├── README-FR.md         # French Documentation
├── README.md            # Hub Documentation
├── questions/           # Question files (.txt / .md) in any language
├── answers/             # Archive of completed answer files
├── public/              # Modern Glassmorphic Web App (EN / AR / FR)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js            # Node.js Express REST API server
├── run.bat              # One-click Windows launcher
└── package.json         # Project metadata & dependencies
```

---

## 🌐 REST Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/files` | Lists all question files with stats & preview |
| `GET` | `/api/files/:filename` | Reads file content |
| `POST` | `/api/files` | Creates new question file in `questions/` |
| `PUT` | `/api/files/:filename` | Updates existing question file |
| `DELETE` | `/api/files/:filename` | Deletes question file |
| `POST` | `/api/save-answers` | Archives answers to `answers/` directory |

---

## 📄 License
Open source under the **MIT License**.
