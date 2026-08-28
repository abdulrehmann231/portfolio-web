// Generates a clean, single-source-of-truth résumé PDF into /public.
// Run with: node scripts/generate-resume.mjs  (pdfkit installed via `npm i pdfkit --no-save`)
import PDFDocument from 'pdfkit';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, '..', 'public', 'Abdul-Rehman-Resume.pdf');

const INK = '#17171a';
const MUTED = '#4b4b53';
const FAINT = '#7a7a83';
const ACCENT = '#4d7c0f';
const LINE = '#d9d9d4';

const doc = new PDFDocument({ size: 'A4', margins: { top: 48, bottom: 44, left: 52, right: 52 } });
doc.pipe(fs.createWriteStream(out));

const L = doc.page.margins.left;
const R = doc.page.width - doc.page.margins.right;
const W = R - L;

function heading(text) {
  doc.moveDown(0.6);
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(10.5).text(text.toUpperCase(), { characterSpacing: 1.2 });
  const y = doc.y + 3;
  doc.moveTo(L, y).lineTo(R, y).lineWidth(1).strokeColor(LINE).stroke();
  doc.moveDown(0.5);
}

function role({ title, org, meta, period, bullets }) {
  const topY = doc.y;
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(11).text(title, L, topY, { continued: false });
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(10).text(org, L, doc.y - 1);
  // right-aligned period + meta
  doc.fillColor(FAINT).font('Helvetica').fontSize(9).text(period, L, topY, { width: W, align: 'right' });
  if (meta) doc.fillColor(FAINT).font('Helvetica').fontSize(9).text(meta, L, topY + 12, { width: W, align: 'right' });
  doc.moveDown(0.3);
  doc.fillColor(MUTED).font('Helvetica').fontSize(9.5);
  for (const b of bullets) {
    const y = doc.y;
    doc.fillColor(ACCENT).text('•', L + 2, y, { width: 10 });
    doc.fillColor(MUTED).text(b, L + 16, y, { width: W - 16 });
    doc.moveDown(0.15);
  }
  doc.moveDown(0.5);
}

// ---- Header ---------------------------------------------------------------
doc.fillColor(INK).font('Helvetica-Bold').fontSize(24).text('Abdul Rehman', L, doc.y);
doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(11.5).text('Full-Stack & AI Engineer', L, doc.y + 1);
doc.moveDown(0.4);
doc.fillColor(MUTED).font('Helvetica').fontSize(9.5).text(
  'mabdulrehman951@gmail.com   |   github.com/abdulrehmann231   |   linkedin.com/in/abdulrehman-nasir-tobaria   |   Karachi, Pakistan (Remote)',
  { width: W }
);
doc.moveDown(0.2);
const hy = doc.y + 2;
doc.moveTo(L, hy).lineTo(R, hy).lineWidth(1.4).strokeColor(INK).stroke();

// ---- Summary --------------------------------------------------------------
heading('Summary');
doc.fillColor(MUTED).font('Helvetica').fontSize(9.8).text(
  'Full-stack and AI engineer who ships production-ready web apps and AI integrations — from RAG systems and agentic developer tools to SaaS platforms used by real customers. Comfortable across the stack: designing APIs and databases, building AI agent loops, and crafting thoughtful frontends with Next.js, Node.js, Python/FastAPI and Spring Boot.',
  { width: W, align: 'left', lineGap: 1.5 }
);

// ---- Experience -----------------------------------------------------------
heading('Experience');
role({
  title: 'Software Engineer', org: 'Gitwit', period: 'Jun 2025 – Present', meta: 'Remote',
  bullets: [
    "Built Gitwit's browser-based AI coding agent (Cursor-style), enabling natural-language-driven code generation and editing directly in the browser.",
    'Built and integrated E2B sandbox templates to run code live with real-time preview, streamlining developer workflows.',
    'Developed GitHub integrations enabling seamless repository connectivity for AI-driven code modifications.',
  ],
});
role({
  title: 'AI Engineer', org: 'Background Agents (backgrounder.dev)', period: '2025 – Present', meta: 'Remote',
  bullets: [
    'Built MCP (Model Context Protocol) server integrations and tool-connection layers in TypeScript, letting AI coding agents connect with any MCP-compatible external service.',
    'Designed a token gateway service and custom API endpoints for secure, authenticated access to AI agent operations across sandboxed environments.',
    'Contributed to an open-source AI agent platform (4,200+ commits, Apache-2.0) powering isolated sandbox execution, WebSocket terminals and Claude Code integration.',
  ],
});
role({
  title: 'Full-Stack AI Engineer', org: 'Softject', period: 'Aug 2025 – Jul 2026', meta: 'Hybrid · Part-time',
  bullets: [
    'Built AI agents, automation workflows and RAG features (document ingestion, embeddings, vector search, LLM responses) across Next.js, Node.js, Python/FastAPI and PostgreSQL.',
    'Previously AI Engineer Intern and Full-Stack Developer — built responsive web apps with Next.js and full-stack technologies.',
  ],
});
role({
  title: 'Backend Intern', org: 'Central Depository Company of Pakistan', period: 'Jul 2024 – Sep 2024', meta: 'Onsite · Karachi',
  bullets: [
    'Developed REST APIs and backend microservices with Spring Boot, using SQL databases and JWT-based authentication to secure inter-service communication.',
  ],
});

// ---- Selected Projects ----------------------------------------------------
heading('Selected Projects');
const projects = [
  ['EarthLink AI', 'AI-native geospatial platform where an agentic loop orchestrates 14 tools and 6 living UI components, turning plain-English prompts into map actions. NDVI & land-surface temperature derived from Sentinel-2 via FastAPI + Google Earth Engine. (Next.js, Python, Tambo AI, Mapbox)'],
  ['Draftly', 'Real-time collaborative meeting whiteboard with sub-50ms sync using Yjs CRDTs over WebSockets; AI summaries turn sessions into structured notes. (Next.js, Fastify, Yjs, PostgreSQL)'],
  ['ResearchCore', 'Document QA & summarization — upload papers or URLs and get RAG-grounded answers with summaries. (Next.js, Firebase, RAG)'],
  ['Eeko-AI', 'Agri web app pairing NASA satellite data with YOLOv5 detection and LLaMA analysis for crop disease identification. (Next.js, FastAPI, YOLO v5)'],
];
doc.fillColor(MUTED).font('Helvetica').fontSize(9.5);
for (const [name, desc] of projects) {
  const y = doc.y;
  doc.fillColor(INK).font('Helvetica-Bold').text(name + '  ', L, y, { continued: true });
  doc.fillColor(MUTED).font('Helvetica').text('— ' + desc, { width: W });
  doc.moveDown(0.3);
}

// ---- Skills ---------------------------------------------------------------
heading('Skills');
const skills = [
  ['Languages', 'TypeScript, JavaScript, Python, Java, C++, C#, SQL'],
  ['Frameworks', 'React, Next.js, Node.js, Express, Spring Boot, .NET, FastAPI, TailwindCSS'],
  ['AI & Data', 'RAG, LangChain, YOLO v5, Groq API, HuggingFace, PostgreSQL, MongoDB, Firebase'],
  ['Tools', 'Git, GitHub, Docker, Linux, Postman, Vercel'],
];
for (const [k, v] of skills) {
  const y = doc.y;
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(9.5).text(k + ': ', L, y, { continued: true });
  doc.fillColor(MUTED).font('Helvetica').text(v, { width: W });
  doc.moveDown(0.2);
}

// ---- Education ------------------------------------------------------------
heading('Education');
doc.fillColor(INK).font('Helvetica-Bold').fontSize(10.5).text('B.S. Computer Science — FAST NUCES', L, doc.y, { continued: true });
doc.fillColor(FAINT).font('Helvetica').fontSize(9).text('   Karachi, Pakistan · Expected 2027', { width: W });
doc.fillColor(MUTED).font('Helvetica').fontSize(9.5).text('Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Databases.', L, doc.y + 2, { width: W });

doc.end();
console.log('Resume written to', out);
