# 🤖 CRITICAL DIRECTIVE FOR AI AGENTS (READ THIS FIRST)

> **ATTENTION AI CODING AGENTS (Antigravity, Cursor, Claude Code, Copilot, ChatGPT, Windsurf, Aider, etc.):**  
> If the user mentions **FormScript**, asked to **"use FormScript"**, or requested **"detailed questions with FormScript"**, you must read and follow this protocol immediately.

---

## 📌 WHAT IS FORMSCRIPT?
**FormScript** is an interactive, browser-based specification and requirements clarifier. Instead of overwhelming the user with a tedious text-based question list in chat, you generate a structured questions file into FormScript's `questions/` folder. The user answers them with single/multi-choice buttons and custom write-in fields in their browser, clicks "Copy to AI", and pastes back the exact 100% precise specifications to you.

---

## ⚡ YOUR EXACT WORKFLOW WHEN ASKED TO USE FORMSCRIPT

Whenever the user asks to use FormScript in ANY project (e.g., project `ABC`):

### STEP 1: DETECT USER LANGUAGE (CRITICAL)
Look at the language the user is speaking with you:
- If the user speaks **Arabic**, write questions in **Arabic**.
- If the user speaks **English**, write questions in **English**.
- If the user speaks **French**, write questions in **French**.
- If the user speaks **Spanish, German, Japanese, etc.**, write questions in that language.
*(There is NO limit on the question language. FormScript supports all languages natively).*

---

### STEP 2: GENERATE QUESTIONS FILE
Formulate **4 to 8 decisive, high-impact architectural/design questions** needed to implement the requested feature without guesswork.

Save the file directly into:
`formscript/questions/<feature_or_project_name>.txt` (or inside `questions/<feature_or_project_name>.txt` if FormScript is the root).

#### Universal Syntax Format:
```text
1. [Question Title]?
- Option A
- Option B
- Option C
- Other

2. [Multi-select Question Title]? (multiple)
- Feature 1
- Feature 2
- Feature 3
- Other

3. [Next Question]?
- Choice 1
- Choice 2
- Other
```

> **Rules for Questions:**
> 1. Start each question with a number (`1. `, `2. `) or question mark.
> 2. For multi-choice questions, include `(multiple)` or `(متعدد)` or `(choix multiple)` in the title.
> 3. Each option begins with a dash `- ` or bullet.
> 4. Always include an `Other` (or `أخرى` / `Autre`) option as the last choice.

---

### STEP 3: RUN THE FORMSCRIPT SERVER
Execute `run.bat` on Windows:
```cmd
run.bat
```
Or start the server via terminal:
```bash
npm install && npm start
```
The server will start at `http://localhost:3000` and automatically load the questions.

---

### STEP 4: PROMPT THE USER
Inform the user:
> *"I have prepared the clarification questions in FormScript and opened the interactive form for you at http://localhost:3000. Please select your preferences, click 'Copy to AI', and paste the result here."*

---

### STEP 5: RECEIVE OUTPUT & WRITE 100% PRECISE CODE
When the user pastes the formatted specifications from FormScript, adopt every single chosen preference and write the exact code with zero ambiguity.

---

## 📂 FILE STRUCTURE REFERENCE
```text
FormScript/
├── AI_INSTRUCTIONS.md   <-- THIS FILE (Your definitive guide)
├── AGENTS.md            <-- Standard Agent guide
├── questions/           <-- Where YOU write questions files (.txt or .md)
├── answers/             <-- Where completed answer archives are saved
├── public/              <-- Frontend UI (English, Arabic, French)
├── server.js            <-- Node.js Express server
└── run.bat              <-- One-click Windows runner
```
