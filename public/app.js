/**
 * FormScript - Client Engine
 * Multilingual Architecture: English (Default), Arabic (RTL), French (LTR)
 * Infinite language support for question parsing and dynamic "Other" write-in
 */

// I18N Translations Dictionary
const translations = {
  en: {
    brand_subtitle: 'Transform AI questions into an interactive high-precision form',
    btn_ai_prompt: 'AI Prompt Template',
    btn_new_file: 'New Questions File',
    sidebar_title: 'Questions Directory',
    sidebar_hint: 'Files located inside',
    loading_files: 'Loading files...',
    sync_active: 'Live sync active with questions/',
    no_file_selected: 'No file selected',
    select_file_hint: 'Select a file from the sidebar or add new questions to begin',
    btn_edit_raw: 'Edit Text',
    btn_delete_file: 'Delete',
    progress_label: 'Answers Completion:',
    empty_title: 'No questions currently displayed',
    empty_subtitle: 'Select a ready file from the sidebar or click "New Questions File" to paste from your AI.',
    output_title: 'AI-Ready Formatted Specifications',
    btn_save_backup: 'Save to answers/',
    btn_reset_answers: 'Reset',
    btn_copy_result: 'Copy Full Result to AI',
    copy_success_alert: '✅ Copied to clipboard! Now paste it directly in your AI chat.',
    modal_new_title: '📝 Add New Questions File',
    modal_new_filename_label: 'File Name (optional, e.g. project_specs.txt):',
    modal_new_content_label: 'Questions and Choices Content:',
    modal_new_hint: 'Supports any language, numbers, and bullets',
    modal_sample_title: '💡 Supported Format Example (Any Language):',
    btn_cancel: 'Cancel',
    btn_save_and_open: '💾 Save & Open Form',
    modal_edit_title: '✏️ Edit Raw Questions Text',
    modal_edit_subtext: 'Saving your edits will directly update the file on the server and re-parse the form.',
    btn_save_changes: '💾 Save Changes & Reload',
    modal_ai_prompt_title: '🤖 AI Prompt Directive Template',
    modal_ai_prompt_subtext: 'Copy this instruction and paste it to your AI (ChatGPT, Claude, Cursor, Antigravity) to have it generate the questions in FormScript format automatically in your language:',
    btn_copy_prompt: '📋 Copy Prompt to Clipboard',
    prompt_copied: 'AI prompt copied to clipboard!',
    confirm_delete: 'Are you sure you want to delete file "{filename}"?',
    confirm_reset: 'Are you sure you want to reset all answers in this form?',
    single_choice: '🔘 Single Choice',
    multi_choice: '☑️ Multiple Choice',
    other_default_label: 'Other (Write custom answer)',
    other_input_placeholder: 'Type your custom details here...',
    output_header_spec: '### FormScript Project Specifications:',
    output_project: 'Project:',
    output_date: 'Date:',
    output_selected_single: 'Selected Choice:',
    output_selected_multi: 'Selected Choices:',
    output_ai_directive: 'Directive for AI: Please adopt these specifications strictly with 100% precision without making random assumptions.',
    answers_saved_success: 'Answers saved to answers/ as:'
  },
  ar: {
    brand_subtitle: 'محول أسئلة ومحددات المشاريع إلى استبيان تفاعلي دقيق',
    btn_ai_prompt: 'برومبت توليد الأسئلة',
    btn_new_file: 'إضافة ملف أسئلة',
    sidebar_title: 'مجلد الأسئلة',
    sidebar_hint: 'الملفات الموجودة داخل',
    loading_files: 'جاري قراءة الملفات...',
    sync_active: 'المزامنة المباشرة مع questions/ نشطة',
    no_file_selected: 'لم يتم تحديد ملف',
    select_file_hint: 'اختر ملفاً من القائمة الجانبية أو قم بلصق أسئلة جديدة للبدء',
    btn_edit_raw: 'تعديل النص',
    btn_delete_file: 'حذف',
    progress_label: 'مستوى اكتمال الإجابات:',
    empty_title: 'لا توجد أسئلة معروضة حالياً',
    empty_subtitle: 'اختر أحد الملفات الجاهزة من القائمة الجانبية أو اضغط على "إضافة ملف أسئلة" للصق نص من الذكاء الاصطناعي.',
    output_title: 'الإجابات المنسقة الجاهزة للذكاء الاصطناعي',
    btn_save_backup: 'حفظ كملف إجابات',
    btn_reset_answers: 'إعادة تعيين',
    btn_copy_result: 'نسخ النتيجة بالكامل لـ AI',
    copy_success_alert: '✅ تم النسخ بنجاح! الصقه الآن في شات الذكاء الاصطناعي.',
    modal_new_title: '📝 إضافة ملف أسئلة جديد',
    modal_new_filename_label: 'اسم الملف (اختياري، مثلاً: project_specs.txt):',
    modal_new_content_label: 'نص الأسئلة والاختيارات:',
    modal_new_hint: 'يدعم أي لغة، وأرقام، وشرطات وقوائم AI',
    modal_sample_title: '💡 مثال على الصيغة المدعومة (بأي لغة):',
    btn_cancel: 'إلغاء',
    btn_save_and_open: '💾 حفظ وبدء الإجابة',
    modal_edit_title: '✏️ تعديل نص الأسئلة الأصلي',
    modal_edit_subtext: 'تعديلك للنص سيحفظ التغييرات في الملف مباشرة ويعيد بناء الفورم التفاعلي.',
    btn_save_changes: '💾 حفظ التعديلات وتحديث الفورم',
    modal_ai_prompt_title: '🤖 برومبت توجيه الذكاء الاصطناعي',
    modal_ai_prompt_subtext: 'انسخ هذا الأمر والصقه للذكاء الاصطناعي لكي يقوم هو بإنشاء ملف الأسئلة بالصيغة المتوافقة تلقائياً بلغتك:',
    btn_copy_prompt: '📋 نسخ البرومبت إلى الحافظة',
    prompt_copied: 'تم نسخ برومبت توجيه الذكاء الاصطناعي بنجاح!',
    confirm_delete: 'هل أنت متأكد من حذف الملف "{filename}"؟',
    confirm_reset: 'هل تريد مسح جميع الإجابات الحالية في هذا النموذج؟',
    single_choice: '🔘 اختيار واحد فقط',
    multi_choice: '☑️ اختيار متعدد',
    other_default_label: 'أخرى (كتابة إجابة مخصصة)',
    other_input_placeholder: 'اكتب تفاصيل إجابتك المخصصة هنا...',
    output_header_spec: '### مخرجات استيضاح المتطلبات (FormScript Project Specs):',
    output_project: 'المشروع:',
    output_date: 'التاريخ:',
    output_selected_single: 'الإجابة المختارة:',
    output_selected_multi: 'الإجابات المختارة:',
    output_ai_directive: 'توجيه للذكاء الاصطناعي: يرجى اعتماد هذه المحددات بدقة 100% والبدء في بناء المشروع وفقاً لها دون افتراضات عشوائية.',
    answers_saved_success: 'تم حفظ نسخة من الإجابات في مجلد answers باسم:'
  },
  fr: {
    brand_subtitle: 'Transformez les questions de l\'IA en un formulaire interactif de haute précision',
    btn_ai_prompt: 'Modèle de Prompt IA',
    btn_new_file: 'Nouveau Fichier Questions',
    sidebar_title: 'Dossier des Questions',
    sidebar_hint: 'Fichiers situés dans',
    loading_files: 'Chargement des fichiers...',
    sync_active: 'Synchronisation active avec questions/',
    no_file_selected: 'Aucun fichier sélectionné',
    select_file_hint: 'Sélectionnez un fichier dans la barre latérale ou collez de nouvelles questions pour commencer',
    btn_edit_raw: 'Modifier Texte',
    btn_delete_file: 'Supprimer',
    progress_label: 'Progression des réponses :',
    empty_title: 'Aucune question affichée',
    empty_subtitle: 'Sélectionnez un fichier prêt dans la barre latérale ou cliquez sur "Nouveau Fichier" pour coller les questions de votre IA.',
    output_title: 'Spécifications Formatées pour l\'IA',
    btn_save_backup: 'Sauvegarder dans answers/',
    btn_reset_answers: 'Réinitialiser',
    btn_copy_result: 'Copier Tout le Résultat pour l\'IA',
    copy_success_alert: '✅ Copié dans le presse-papiers ! Collez-le directement dans votre chat IA.',
    modal_new_title: '📝 Ajouter un Nouveau Fichier de Questions',
    modal_new_filename_label: 'Nom du fichier (optionnel, ex: project_specs.txt) :',
    modal_new_content_label: 'Contenu des questions et choix :',
    modal_new_hint: 'Prend en charge n\'importe quelle langue, puces et numéros',
    modal_sample_title: '💡 Exemple de format pris en charge (toutes langues) :',
    btn_cancel: 'Annuler',
    btn_save_and_open: '💾 Enregistrer et Ouvrir',
    modal_edit_title: '✏️ Modifier le Texte Brut des Questions',
    modal_edit_subtext: 'L\'enregistrement modifiera directement le fichier sur le serveur et actualisera le formulaire.',
    btn_save_changes: '💾 Enregistrer et Recharger',
    modal_ai_prompt_title: '🤖 Modèle de Directive pour l\'IA',
    modal_ai_prompt_subtext: 'Copiez cette directive et collez-la à votre IA pour qu\'elle génère automatiquement les questions au format FormScript dans votre langue :',
    btn_copy_prompt: '📋 Copier le Prompt dans le Presse-papiers',
    prompt_copied: 'Prompt pour l\'IA copié dans le presse-papiers !',
    confirm_delete: 'Êtes-vous sûr de vouloir supprimer le fichier "{filename}" ?',
    confirm_reset: 'Voulez-vous réinitialiser toutes les réponses de ce formulaire ?',
    single_choice: '🔘 Choix Unique',
    multi_choice: '☑️ Choix Multiple',
    other_default_label: 'Autre (Écrire une réponse personnalisée)',
    other_input_placeholder: 'Saisissez vos précisions personnalisées ici...',
    output_header_spec: '### Spécifications de Projet FormScript :',
    output_project: 'Projet :',
    output_date: 'Date :',
    output_selected_single: 'Choix Sélectionné :',
    output_selected_multi: 'Choix Sélectionnés :',
    output_ai_directive: 'Directive pour l\'IA : Veuillez adopter ces spécifications strictement à 100% sans faire de suppositions aléatoires.',
    answers_saved_success: 'Réponses enregistrées dans answers/ sous :'
  }
};

// AI prompt template generation by language
function getAiPromptTemplate(lang) {
  if (lang === 'ar') {
    return `أريد منك مساعدتي في تخطيط هذا المشروع. لضمان دقة التنفيذ 100% وعدم التخمين، يرجى كتابة قائمة بالأسئلة الجوهرية واستيضاح المتطلبات بصيغة متوافقة مع FormScript وفق النمط التالي:

1. [نص السؤال الأول]
- [خيار أ]
- [خيار ب]
- أخرى

2. [نص السؤال الثاني] (متعدد)
- [خيار 1]
- [خيار 2]
- أخرى

يرجى كتابة الأسئلة بهذه الصيغة وحفظها مباشرة في مجلد questions/ أو تزويدي بها.`;
  }
  if (lang === 'fr') {
    return `Je souhaite que vous m'aidiez à planifier ce projet. Afin de garantir une précision d'implémentation à 100% sans devinettes, veuillez formuler les questions essentielles de spécifications au format compatible avec FormScript :

1. [Titre de la première question]?
- [Option A]
- [Option B]
- Autre

2. [Titre de la deuxième question]? (choix multiple)
- [Option 1]
- [Option 2]
- Autre

Veuillez créer ce fichier directement dans le dossier questions/ ou me fournir le texte dans ce format précis.`;
  }
  return `I need your assistance in planning this project. To ensure 100% implementation precision without guessing, please write the core requirements & clarification questions in FormScript compatible format:

1. [First Question Title]?
- Option A
- Option B
- Other

2. [Second Question Title]? (multiple)
- Option 1
- Option 2
- Other

Please save this directly into the questions/ directory or output the text using this clean format.`;
}

// Global State
const state = {
  currentLang: localStorage.getItem('formscript_lang') || 'en',
  files: [],
  currentFileName: null,
  rawContent: '',
  questions: []
};

// DOM Elements
const elements = {
  langSelect: document.getElementById('langSelect'),
  filesList: document.getElementById('filesList'),
  filesCountBadge: document.getElementById('filesCountBadge'),
  btnRefreshFiles: document.getElementById('btnRefreshFiles'),
  btnNewFile: document.getElementById('btnNewFile'),
  btnAiPrompt: document.getElementById('btnAiPrompt'),
  btnToggleSidebar: document.getElementById('btnToggleSidebar'),
  sidebarPanel: document.getElementById('sidebarPanel'),

  currentFileName: document.getElementById('currentFileName'),
  questionsCountChip: document.getElementById('questionsCountChip'),
  fileLastModified: document.getElementById('fileLastModified'),
  btnEditRaw: document.getElementById('btnEditRaw'),
  btnDeleteFile: document.getElementById('btnDeleteFile'),

  progressText: document.getElementById('progressText'),
  progressBar: document.getElementById('progressBar'),
  questionsContainer: document.getElementById('questionsContainer'),

  outputPreviewText: document.getElementById('outputPreviewText'),
  btnCopyResult: document.getElementById('btnCopyResult'),
  copySuccessAlert: document.getElementById('copySuccessAlert'),
  btnSaveAnswers: document.getElementById('btnSaveAnswers'),
  btnResetAnswers: document.getElementById('btnResetAnswers'),

  // Modals
  modalNewFile: document.getElementById('modalNewFile'),
  btnCloseNewModal: document.getElementById('btnCloseNewModal'),
  btnCancelNewModal: document.getElementById('btnCancelNewModal'),
  btnSaveNewFile: document.getElementById('btnSaveNewFile'),
  newFileNameInput: document.getElementById('newFileNameInput'),
  newFileContentInput: document.getElementById('newFileContentInput'),

  modalEditRaw: document.getElementById('modalEditRaw'),
  btnCloseEditModal: document.getElementById('btnCloseEditModal'),
  btnCancelEditModal: document.getElementById('btnCancelEditModal'),
  btnSaveEditRaw: document.getElementById('btnSaveEditRaw'),
  editRawTextarea: document.getElementById('editRawTextarea'),

  modalAiPrompt: document.getElementById('modalAiPrompt'),
  btnCloseAiPromptModal: document.getElementById('btnCloseAiPromptModal'),
  btnCopyAiPrompt: document.getElementById('btnCopyAiPrompt'),
  aiPromptTemplateText: document.getElementById('aiPromptTemplateText')
};

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  setupLanguage();
  setupEventListeners();
  loadFiles();
});

function setupLanguage() {
  elements.langSelect.value = state.currentLang;
  applyLanguage(state.currentLang);

  elements.langSelect.addEventListener('change', (e) => {
    const newLang = e.target.value;
    state.currentLang = newLang;
    localStorage.setItem('formscript_lang', newLang);
    applyLanguage(newLang);
    renderQuestions();
    updateOutputText();
  });
}

function t(key) {
  const dict = translations[state.currentLang] || translations.en;
  return dict[key] || translations.en[key] || key;
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Translate all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update AI Prompt Template modal text
  elements.aiPromptTemplateText.value = getAiPromptTemplate(lang);

  // Update Questions Chip
  if (state.questions.length > 0) {
    const countLabel = (lang === 'ar') ? `${state.questions.length} سؤال` : `${state.questions.length} questions`;
    elements.questionsCountChip.textContent = countLabel;
  }
}

function setupEventListeners() {
  // Sidebar Refresh & Toggle
  elements.btnRefreshFiles.addEventListener('click', loadFiles);
  elements.btnToggleSidebar.addEventListener('click', () => {
    elements.sidebarPanel.classList.toggle('open');
  });

  // Action Buttons
  elements.btnNewFile.addEventListener('click', () => openModal(elements.modalNewFile));
  elements.btnEditRaw.addEventListener('click', openEditModal);
  elements.btnDeleteFile.addEventListener('click', handleDeleteFile);
  elements.btnAiPrompt.addEventListener('click', () => {
    elements.aiPromptTemplateText.value = getAiPromptTemplate(state.currentLang);
    openModal(elements.modalAiPrompt);
  });

  // Copy & Reset
  elements.btnCopyResult.addEventListener('click', handleCopyResult);
  elements.btnSaveAnswers.addEventListener('click', handleSaveAnswers);
  elements.btnResetAnswers.addEventListener('click', handleResetAnswers);

  // New File Modal
  elements.btnCloseNewModal.addEventListener('click', () => closeModal(elements.modalNewFile));
  elements.btnCancelNewModal.addEventListener('click', () => closeModal(elements.modalNewFile));
  elements.btnSaveNewFile.addEventListener('click', handleSaveNewFile);

  // Edit Modal
  elements.btnCloseEditModal.addEventListener('click', () => closeModal(elements.modalEditRaw));
  elements.btnCancelEditModal.addEventListener('click', () => closeModal(elements.modalEditRaw));
  elements.btnSaveEditRaw.addEventListener('click', handleSaveEditedRaw);

  // AI Prompt Modal
  elements.btnCloseAiPromptModal.addEventListener('click', () => closeModal(elements.modalAiPrompt));
  elements.btnCopyAiPrompt.addEventListener('click', () => {
    navigator.clipboard.writeText(elements.aiPromptTemplateText.value);
    alert(t('prompt_copied'));
    closeModal(elements.modalAiPrompt);
  });

  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal(e.target);
    }
  });
}

/* ==========================================================================
   API & File Management
   ========================================================================== */
async function loadFiles() {
  try {
    elements.filesList.innerHTML = `<div class="loading-state">${t('loading_files')}</div>`;
    const res = await fetch('/api/files');
    const data = await res.json();

    if (!data.success) throw new Error(data.error);

    state.files = data.files || [];
    renderFilesList();

    if (state.files.length > 0) {
      if (!state.currentFileName || !state.files.some(f => f.name === state.currentFileName)) {
        loadFile(state.files[0].name);
      }
    } else {
      showEmptyState();
    }
  } catch (err) {
    console.error('Error loading files:', err);
    elements.filesList.innerHTML = `<div class="loading-state text-danger">${err.message}</div>`;
  }
}

function renderFilesList() {
  elements.filesCountBadge.textContent = state.files.length;

  if (state.files.length === 0) {
    elements.filesList.innerHTML = `
      <div class="empty-state" style="padding: 1.5rem 1rem;">
        <p>${t('empty_subtitle')}</p>
      </div>
    `;
    return;
  }

  const locale = (state.currentLang === 'ar') ? 'ar-EG' : (state.currentLang === 'fr' ? 'fr-FR' : 'en-US');

  elements.filesList.innerHTML = state.files.map(file => {
    const isActive = file.name === state.currentFileName;
    const formattedDate = new Date(file.updatedAt).toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    return `
      <div class="file-item-card ${isActive ? 'active' : ''}" onclick="loadFile('${file.name}')">
        <div class="file-card-title">
          <span>📄</span>
          <span>${file.name}</span>
        </div>
        <div class="file-card-preview">${file.preview || '...'}</div>
        <div class="file-card-meta">
          <span>${(file.size / 1024).toFixed(1)} KB</span>
          <span>${formattedDate}</span>
        </div>
      </div>
    `;
  }).join('');
}

async function loadFile(filename) {
  try {
    const res = await fetch(`/api/files/${encodeURIComponent(filename)}`);
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    state.currentFileName = filename;
    state.rawContent = data.content;

    // Update Header
    elements.currentFileName.textContent = filename;
    const activeFileMeta = state.files.find(f => f.name === filename);
    if (activeFileMeta) {
      const locale = (state.currentLang === 'ar') ? 'ar-EG' : (state.currentLang === 'fr' ? 'fr-FR' : 'en-US');
      const d = new Date(activeFileMeta.updatedAt).toLocaleString(locale);
      elements.fileLastModified.textContent = `${d}`;
    }

    // Parse and Render Questions
    parseQuestions(data.content);
    renderQuestions();
    updateProgress();
    updateOutputText();

    // Re-render file list to highlight active
    renderFilesList();

    // Close mobile sidebar if open
    elements.sidebarPanel.classList.remove('open');
  } catch (err) {
    alert(`Could not load file: ${err.message}`);
  }
}

async function handleDeleteFile() {
  if (!state.currentFileName) return;
  const msg = t('confirm_delete').replace('{filename}', state.currentFileName);
  if (!confirm(msg)) return;

  try {
    const res = await fetch(`/api/files/${encodeURIComponent(state.currentFileName)}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    state.currentFileName = null;
    await loadFiles();
  } catch (err) {
    alert(`Failed to delete: ${err.message}`);
  }
}

async function handleSaveNewFile() {
  let filename = elements.newFileNameInput.value.trim();
  const content = elements.newFileContentInput.value.trim();

  if (!content) {
    alert('Please enter or paste questions content first.');
    return;
  }

  try {
    const res = await fetch('/api/files', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    closeModal(elements.modalNewFile);
    elements.newFileNameInput.value = '';
    elements.newFileContentInput.value = '';

    await loadFiles();
    loadFile(data.filename);
  } catch (err) {
    alert(`Failed to save: ${err.message}`);
  }
}

function openEditModal() {
  if (!state.currentFileName) return;
  elements.editRawTextarea.value = state.rawContent;
  openModal(elements.modalEditRaw);
}

async function handleSaveEditedRaw() {
  if (!state.currentFileName) return;
  const content = elements.editRawTextarea.value;

  try {
    const res = await fetch(`/api/files/${encodeURIComponent(state.currentFileName)}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);

    closeModal(elements.modalEditRaw);
    loadFile(state.currentFileName);
  } catch (err) {
    alert(`Failed to update: ${err.message}`);
  }
}

/* ==========================================================================
   Smart Multilingual Parser Engine
   ========================================================================== */
function isOtherOption(text) {
  const norm = text.trim().toLowerCase();
  return (
    // Arabic
    norm.includes('أخرى') || norm.includes('اخرى') || norm.includes('مخصص') ||
    // English
    norm.includes('other') || norm.includes('custom') || norm.includes('write-in') ||
    // French
    norm.includes('autre') || norm.includes('personnalis') || norm.includes('divers') ||
    // Spanish / German / etc.
    norm.includes('otro') || norm.includes('andere') || norm.includes('sonstiges')
  );
}

function parseQuestions(rawText) {
  state.questions = [];
  if (!rawText || !rawText.trim()) return;

  const lines = rawText.split(/\r?\n/);
  let currentQuestion = null;
  let qCounter = 0;

  // Question regex: "1. ", "1) ", "Q1: ", "س1: ", "# "
  const questionRegex = /^(?:(?:\d+[\.\-\)]\s*)|(?:[Qq]\d+[:\.]\s*)|(?:س\d+[:\.]\s*)|(?:#{1,4}\s+))(.*)/;
  // Option markers: - , * , + , a) , A) , 1) , [ ] , ( )
  const optionRegex = /^(?:[-*+]\s+|[a-zA-Z\d][\.\)]\s+|\[[ xX]?\]\s+|\(\s*\)\s+)(.*)/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const qMatch = line.match(questionRegex);
    const endsWithQuestion = (line.endsWith('؟') || line.endsWith('?')) && !line.match(optionRegex);

    if (qMatch || endsWithQuestion) {
      if (currentQuestion) {
        finalizeQuestion(currentQuestion);
        state.questions.push(currentQuestion);
      }

      qCounter++;
      const rawTitle = qMatch ? qMatch[1].trim() : line;
      // Multi-select indicators across languages
      const isMultiple = /متعدد|multiple|choix multiple|\bcheckbox\b/i.test(rawTitle);

      currentQuestion = {
        id: qCounter,
        title: rawTitle,
        isMultiple: isMultiple,
        options: [],
        selectedIds: [],
        customOtherText: ''
      };
      continue;
    }

    // Options extraction
    if (currentQuestion) {
      const optMatch = line.match(optionRegex);
      if (optMatch) {
        const optText = optMatch[1].trim();
        currentQuestion.options.push({
          id: `opt_${currentQuestion.id}_${currentQuestion.options.length}`,
          text: optText,
          isOther: isOtherOption(optText)
        });
      } else if (!line.startsWith('#')) {
        currentQuestion.options.push({
          id: `opt_${currentQuestion.id}_${currentQuestion.options.length}`,
          text: line,
          isOther: isOtherOption(line)
        });
      }
    }
  }

  if (currentQuestion) {
    finalizeQuestion(currentQuestion);
    state.questions.push(currentQuestion);
  }

  const countLabel = (state.currentLang === 'ar') ? `${state.questions.length} سؤال` : `${state.questions.length} questions`;
  elements.questionsCountChip.textContent = countLabel;
}

function finalizeQuestion(q) {
  const hasOther = q.options.some(opt => opt.isOther);
  if (!hasOther) {
    q.options.push({
      id: `opt_${q.id}_other`,
      text: t('other_default_label'),
      isOther: true
    });
  }
}

/* ==========================================================================
   UI Rendering & Interactions
   ========================================================================== */
function renderQuestions() {
  if (state.questions.length === 0) {
    showEmptyState();
    return;
  }

  elements.questionsContainer.innerHTML = state.questions.map(q => {
    const inputType = q.isMultiple ? 'checkbox' : 'radio';
    const isAnswered = q.selectedIds.length > 0;
    const typeHint = q.isMultiple ? t('multi_choice') : t('single_choice');

    const optionsHtml = q.options.map(opt => {
      const isSelected = q.selectedIds.includes(opt.id);
      // Localize other label if it was dynamically auto-generated
      const displayLabel = opt.id.endsWith('_other') ? t('other_default_label') : opt.text;

      return `
        <div class="option-item ${isSelected ? 'selected' : ''}" data-type="${inputType}" onclick="handleOptionClick(${q.id}, '${opt.id}', ${opt.isOther})">
          <label class="option-label" onclick="event.preventDefault()">
            <input 
              type="${inputType}" 
              name="question_${q.id}" 
              value="${opt.id}" 
              ${isSelected ? 'checked' : ''} 
              class="option-input"
            />
            <span class="custom-indicator"></span>
            <span class="option-text">${displayLabel}</span>
          </label>

          ${opt.isOther ? `
            <div class="other-custom-input-box ${isSelected ? 'visible' : ''}" id="otherBox_${q.id}">
              <input 
                type="text" 
                class="custom-write-input" 
                placeholder="${t('other_input_placeholder')}"
                value="${escapeHtml(q.customOtherText || '')}"
                oninput="handleCustomTextInput(${q.id}, this.value)"
                onclick="event.stopPropagation()"
              />
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="question-card ${isAnswered ? 'answered' : ''}" id="qCard_${q.id}">
        <div class="question-header">
          <div class="question-number">${q.id}</div>
          <div class="question-title-wrapper">
            <h4 class="question-title">${q.title}</h4>
            <div class="question-type-hint">${typeHint}</div>
          </div>
        </div>
        <div class="options-list">
          ${optionsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function handleOptionClick(questionId, optionId, isOther) {
  const q = state.questions.find(item => item.id === questionId);
  if (!q) return;

  if (q.isMultiple) {
    const idx = q.selectedIds.indexOf(optionId);
    if (idx > -1) {
      q.selectedIds.splice(idx, 1);
    } else {
      q.selectedIds.push(optionId);
    }
  } else {
    q.selectedIds = [optionId];
  }

  if (isOther && q.selectedIds.includes(optionId)) {
    setTimeout(() => {
      const box = document.getElementById(`otherBox_${questionId}`);
      if (box) {
        const inp = box.querySelector('input');
        if (inp) inp.focus();
      }
    }, 50);
  }

  renderQuestions();
  updateProgress();
  updateOutputText();
}

function handleCustomTextInput(questionId, value) {
  const q = state.questions.find(item => item.id === questionId);
  if (!q) return;
  q.customOtherText = value;
  updateOutputText();
}

function updateProgress() {
  const total = state.questions.length;
  if (total === 0) {
    elements.progressText.textContent = '0 / 0 (0%)';
    elements.progressBar.style.width = '0%';
    return;
  }

  const answeredCount = state.questions.filter(q => q.selectedIds.length > 0).length;
  const percentage = Math.round((answeredCount / total) * 100);

  elements.progressText.textContent = `${answeredCount} / ${total} (${percentage}%)`;
  elements.progressBar.style.width = `${percentage}%`;
}

/* ==========================================================================
   Output Formatter (AI Digestible Text)
   ========================================================================== */
function updateOutputText() {
  if (state.questions.length === 0) {
    elements.outputPreviewText.value = '';
    return;
  }

  const answeredQuestions = state.questions.filter(q => q.selectedIds.length > 0);
  const locale = (state.currentLang === 'ar') ? 'ar-EG' : (state.currentLang === 'fr' ? 'fr-FR' : 'en-US');

  let output = `${t('output_header_spec')}\n\n`;
  output += `${t('output_project')} ${state.currentFileName || 'Specifications'}\n`;
  output += `${t('output_date')} ${new Date().toLocaleDateString(locale)}\n\n`;
  output += `--------------------------------------------------\n`;

  answeredQuestions.forEach((q, idx) => {
    output += `${idx + 1}. **${q.title}**\n`;

    const selectedLabels = q.selectedIds.map(optId => {
      const opt = q.options.find(o => o.id === optId);
      if (!opt) return null;

      if (opt.isOther) {
        const customDetail = q.customOtherText ? `: ${q.customOtherText.trim()}` : '';
        const otherBase = opt.id.endsWith('_other') ? t('other_default_label') : opt.text;
        return `${otherBase}${customDetail}`;
      }
      return opt.text;
    }).filter(Boolean);

    if (selectedLabels.length === 1) {
      output += `   - **${t('output_selected_single')}** ${selectedLabels[0]}\n\n`;
    } else {
      output += `   - **${t('output_selected_multi')}**\n`;
      selectedLabels.forEach(label => {
        output += `     * ${label}\n`;
      });
      output += `\n`;
    }
  });

  output += `--------------------------------------------------\n`;
  output += `${t('output_ai_directive')}`;

  elements.outputPreviewText.value = output;
}

function handleCopyResult() {
  const text = elements.outputPreviewText.value;
  if (!text) {
    alert('Please select at least one choice to generate output.');
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    elements.copySuccessAlert.classList.add('show');
    elements.btnCopyResult.innerHTML = `<span>✅ ${t('copy_success_alert').split('!')[0]}!</span>`;

    setTimeout(() => {
      elements.copySuccessAlert.classList.remove('show');
      elements.btnCopyResult.innerHTML = `
        <span class="copy-icon">📋</span>
        <span class="copy-text">${t('btn_copy_result')}</span>
      `;
    }, 3000);
  }).catch(() => {
    alert('Could not copy automatically, please copy manually.');
  });
}

async function handleSaveAnswers() {
  const text = elements.outputPreviewText.value;
  if (!text) {
    alert('No answers to save.');
    return;
  }

  try {
    const res = await fetch('/api/save-answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sourceFile: state.currentFileName,
        outputText: text
      })
    });
    const data = await res.json();
    if (data.success) {
      alert(`${t('answers_saved_success')}\n${data.savedAs}`);
    }
  } catch (err) {
    alert('Failed to save answers: ' + err.message);
  }
}

function handleResetAnswers() {
  if (confirm(t('confirm_reset'))) {
    state.questions.forEach(q => {
      q.selectedIds = [];
      q.customOtherText = '';
    });
    renderQuestions();
    updateProgress();
    updateOutputText();
  }
}

function showEmptyState() {
  elements.currentFileName.textContent = t('no_file_selected');
  elements.fileLastModified.textContent = t('select_file_hint');
  elements.questionsCountChip.textContent = '0';
  elements.questionsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">📁</div>
      <h3>${t('empty_title')}</h3>
      <p>${t('empty_subtitle')}</p>
    </div>
  `;
  elements.outputPreviewText.value = '';
  updateProgress();
}

/* ==========================================================================
   Modal Helpers
   ========================================================================== */
function openModal(modalEl) {
  modalEl.classList.add('active');
}

function closeModal(modalEl) {
  modalEl.classList.remove('active');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
