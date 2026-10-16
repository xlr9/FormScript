# 📋 FormScript — Interactive AI Clarification & Requirements Bridge

> **A portable, lightweight web form tool that bridges AI questions into an interactive browser questionnaire, returning 100% accurate specifications for precision code generation.**

---

### 🌐 Select Language / اختر اللغة / Choisir la langue:
- 🇬🇧 **[English Documentation (README-EN.md)](./README-EN.md)**
- 🇸🇦 **[التوثيق باللغة العربية (README-AR.md)](./README-AR.md)**
- 🇫🇷 **[Documentation en Français (README-FR.md)](./README-FR.md)**

---

> [!IMPORTANT]
> ### 🤖 FOR AI AGENTS (Antigravity, Cursor, Claude Code, Copilot, ChatGPT, Windsurf, Aider):
> If the user asked you to use **FormScript** or generate questions using FormScript, **DO NOT GUESS**.
> **READ [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md) IMMEDIATELY** to execute the workflow properly.

---

## ⚡ What is FormScript?

FormScript solves the #1 reason AI coding projects fail: **unclear, vague, or missing specifications**.

Instead of torturing the user to manually answer technical multiple-choice questions inside a messy chat stream, FormScript:
1. Loads questions files from `questions/` (written by the AI in **any language**).
2. Generates an interactive, responsive web form with radio buttons, checkboxes, and interactive **"Other" (Custom write-in)** fields.
3. Packages the selections into clean, structured Markdown.
4. Allows the user to copy everything back to the AI chat in **one click**.

---

## 🚀 One-Click Launch (Windows)

Simply double-click:
```cmd
run.bat
```
*(Node.js dependencies are installed automatically on first run, and the browser opens to `http://localhost:3000`).*

---

## 📁 Repository Structure

```text
FormScript/
├── AI_INSTRUCTIONS.md   # Primary instructions for AI Agents (MUST READ FOR AI)
├── AGENTS.md            # Standard agent reference
├── README.md            # Master language hub
├── README-EN.md         # Full English documentation
├── README-AR.md         # Full Arabic documentation
├── README-FR.md         # Full French documentation
├── questions/           # Question files in ANY language (.txt / .md)
├── answers/             # Saved responses archive
├── public/              # Web application (Default English, with EN / AR / FR switcher)
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js            # Node.js backend server
├── run.bat              # One-click Windows runner
└── package.json         # Dependencies & scripts
```

---

## 📄 License
Licensed under the [MIT License](./package.json).
