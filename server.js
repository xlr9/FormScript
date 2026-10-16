const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const QUESTIONS_DIR = path.join(__dirname, 'questions');
const ANSWERS_DIR = path.join(__dirname, 'answers');

// Ensure storage directories exist
if (!fs.existsSync(QUESTIONS_DIR)) {
  fs.mkdirSync(QUESTIONS_DIR, { recursive: true });
}
if (!fs.existsSync(ANSWERS_DIR)) {
  fs.mkdirSync(ANSWERS_DIR, { recursive: true });
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Safe file name validator
function sanitizeFilename(name) {
  if (!name) return null;
  // Strip dangerous path traversal characters
  const clean = path.basename(name).replace(/[^a-zA-Z0-9_\-\.\u0600-\u06FF]/g, '_');
  return clean || null;
}

// 1. GET /api/files - List all question files with stats & preview
app.get('/api/files', (req, res) => {
  try {
    const files = fs.readdirSync(QUESTIONS_DIR);
    const result = files
      .filter(file => !file.startsWith('.'))
      .map(file => {
        const filePath = path.join(QUESTIONS_DIR, file);
        const stats = fs.statSync(filePath);
        if (!stats.isFile()) return null;

        let preview = '';
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          preview = content.slice(0, 150).replace(/\r?\n/g, ' ');
        } catch (e) {}

        return {
          name: file,
          size: stats.size,
          updatedAt: stats.mtime,
          preview
        };
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    res.json({ success: true, files: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. GET /api/files/:filename - Get file content
app.get('/api/files/:filename', (req, res) => {
  try {
    const filename = sanitizeFilename(req.params.filename);
    if (!filename) return res.status(400).json({ success: false, error: 'Invalid filename' });

    const filePath = path.join(QUESTIONS_DIR, filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ success: false, error: 'File not found' });
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    res.json({ success: true, filename, content });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. POST /api/files - Create new question file
app.post('/api/files', (req, res) => {
  try {
    let { filename, content } = req.body;
    if (!content || typeof content !== 'string') {
      return res.status(400).json({ success: false, error: 'Content is required' });
    }

    if (!filename) {
      const dateStr = new Date().toISOString().slice(0, 10);
      filename = `questions_${dateStr}_${Date.now().toString().slice(-4)}.txt`;
    }

    if (!filename.endsWith('.txt') && !filename.endsWith('.md')) {
      filename += '.txt';
    }

    const safeName = sanitizeFilename(filename);
    if (!safeName) return res.status(400).json({ success: false, error: 'Invalid filename' });

    const filePath = path.join(QUESTIONS_DIR, safeName);
    fs.writeFileSync(filePath, content, 'utf-8');

    res.json({ success: true, filename: safeName, message: 'File created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. PUT /api/files/:filename - Update question file
app.put('/api/files/:filename', (req, res) => {
  try {
    const filename = sanitizeFilename(req.params.filename);
    const { content } = req.body;

    if (!filename) return res.status(400).json({ success: false, error: 'Invalid filename' });
    if (typeof content !== 'string') return res.status(400).json({ success: false, error: 'Content must be text' });

    const filePath = path.join(QUESTIONS_DIR, filename);
    fs.writeFileSync(filePath, content, 'utf-8');

    res.json({ success: true, filename, message: 'File updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. DELETE /api/files/:filename - Delete question file
app.delete('/api/files/:filename', (req, res) => {
  try {
    const filename = sanitizeFilename(req.params.filename);
    if (!filename) return res.status(400).json({ success: false, error: 'Invalid filename' });

    const filePath = path.join(QUESTIONS_DIR, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    res.json({ success: true, filename, message: 'File deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 6. POST /api/save-answers - Archive user responses to answers folder (optional backup)
app.post('/api/save-answers', (req, res) => {
  try {
    const { sourceFile, outputText } = req.body;
    const base = sourceFile ? path.basename(sourceFile, path.extname(sourceFile)) : 'answers';
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const answerFileName = `${base}_completed_${timestamp}.txt`;
    const targetPath = path.join(ANSWERS_DIR, answerFileName);

    fs.writeFileSync(targetPath, outputText || '', 'utf-8');
    res.json({ success: true, savedAs: answerFileName });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`🚀 FormScript Server is running!`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📁 Questions Directory: ${QUESTIONS_DIR}`);
  console.log(`======================================================\n`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    const altPort = PORT + 1;
    console.log(`Port ${PORT} in use, attempting port ${altPort}...`);
    app.listen(altPort, () => {
      console.log(`🚀 FormScript Server running on: http://localhost:${altPort}`);
    });
  } else {
    console.error('Server error:', err);
  }
});
