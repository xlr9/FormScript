# FormScript - Agent Instructions

> For full detailed directives, see [AI_INSTRUCTIONS.md](file:///c:/Users/XLR/StudioProjects/FormScript/AI_INSTRUCTIONS.md).

## Quick Agent Protocol
1. **Identify User Request**: When the user asks to use FormScript to specify a project or feature.
2. **Determine Language**: Detect the user's conversational language (Arabic, English, French, etc.) and write questions in that exact language.
3. **Write Questions File**: Save `formscript/questions/<feature_name>.txt` with numbered questions, bulleted options (`- `), and an `Other` / `أخرى` / `Autre` choice.
4. **Launch FormScript**: Run `run.bat` or `npm start` so the user can interactively answer on `http://localhost:3000`.
5. **Implement with Precision**: Ingest the pasted FormScript output and write code strictly matching the user's choices.
