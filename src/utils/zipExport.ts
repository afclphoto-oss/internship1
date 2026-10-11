import JSZip from 'jszip';
import { masterProjectsList } from '../data/masterProjects.ts';
import { freeToolsDirectory, lowSpecSurvivalGuide } from '../data/freeTools.ts';
import { teacherQuestionsList, rubricCriteriaList } from '../data/teacherDefenseGuide.ts';
import { internshipCurriculum } from '../data/internshipPlan.ts';

export async function generateOfflineZipPackage(customProjects?: any[]): Promise<Blob> {
  const zip = new JSZip();

  const allProjects = [...masterProjectsList, ...(customProjects || [])];

  // 1. README-OFFLINE.md
  const readmeContent = `# ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน (IT Intern AI Academy)
**จัดทำโดย: ผู้จัดการแผนกไอที (IT Manager) & พี่ AI (Gemini 2.5 Flash)**
**สำหรับ: นักศึกษาฝึกงาน ปวช. คอมพิวเตอร์**

---

## 🚀 วิธีเปิดใช้งานแบบ Offline บนเครื่องคอมพิวเตอร์ของคุณ

### วิธีที่ 1: ดับเบิลคลิกเปิดทันที (ง่ายที่สุด ไม่ต้องลงโปรแกรมเพิ่ม)
1. ดับเบิลคลิกที่ไฟล์ **index.html** ในโฟลเดอร์นี้
2. ไฟล์จะเปิดขึ้นบน Google Chrome หรือ Microsoft Edge ทันที ใช้งานได้แม้ไม่มีอินเทอร์เน็ต!

### วิธีที่ 2: รัน Localhost Server (แนะนำสำหรับช่างคอม)
- บน Windows: ดับเบิลคลิกที่ไฟล์ **START-SERVER.bat**
- หรือเปิด Terminal/Command Prompt ในโฟลเดอร์นี้ แล้วพิมพ์คำสั่งใดคำสั่งหนึ่ง:
  \`\`\`bash
  # หากมี Python ในเครื่อง:
  python -m http.server 3000

  # หรือหากมี Node.js ในเครื่อง:
  npx serve .
  \`\`\`
- จากนั้นเปิดเบราว์เซอร์ไปที่: http://localhost:3000

---

## 📁 สิ่งที่มีในแพ็กเกจนี้:
1. **index.html** - เว็บพอร์ทัลแบบ Standalone เปิดดูโปรเจกต์และ Prompt ทั้งหมดได้แบบออฟไลน์
2. **ALL_AI_PROMPTS_PACK_TH_EN.txt** - รวบรวม Prompt ภาษาไทย-อังกฤษแบบละเอียดยาวๆ ทุกโปรเจกต์
3. **TEACHER_DEFENSE_QUESTIONS_ANSWERS.txt** - คำถามยอดฮิต 10 ข้อที่อาจารย์นิเทศก์ชอบถาม พร้อมบทตอบ
4. **INTERNSHIP_REPORT_TEMPLATE.txt** - ฟอร์มบันทึกการฝึกงานประจำสัปดาห์
5. **START-SERVER.bat** - สคริปต์รันเซิร์ฟเวอร์ Localhost บนคอมพิวเตอร์ที่บ้าน
`;

  zip.file('README-OFFLINE.md', readmeContent);

  // 2. START-SERVER.bat for Windows
  const batContent = `@echo off
title IT Intern Localhost Server
echo ========================================================
echo   IT Intern AI Academy - Localhost Server Starter
echo   ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน
echo ========================================================
echo.
echo กำลังเริ่มรัน Localhost Server...
echo.

where python >nul 2>nul
if %errorlevel% == 0 (
    echo พบ Python ในเครื่อง กำลังเปิดพอร์ต 3000...
    start http://localhost:3000
    python -m http.server 3000
    goto end
)

where npx >nul 2>nul
if %errorlevel% == 0 (
    echo พบ Node.js / npx ในเครื่อง กำลังเปิด npx serve...
    start http://localhost:3000
    npx serve -l 3000
    goto end
)

echo ไม่พบ Python หรือ Node.js กำลังเปิดไฟล์ index.html บน Chrome โดยตรง...
start index.html

:end
pause
`;
  zip.file('START-SERVER.bat', batContent);

  // 3. ALL_AI_PROMPTS_PACK_TH_EN.txt
  let promptsText = `================================================================================
คลัง Prompt ภาษาไทย และ ภาษาอังกฤษ แบบละเอียดยาว สำหรับเด็ก ปวช. คอมพิวเตอร์
ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน (IT Intern AI Academy)
================================================================================\n\n`;

  allProjects.forEach((p, idx) => {
    promptsText += `--------------------------------------------------------------------------------
[โปรเจกต์ที่ ${idx + 1}] ${p.title}
หมวดหมู่: ${p.categoryLabel} | ความยาก: ${p.difficultyLabel} | เวลา: ${p.durationHours} ชั่วโมง
ทำไมถึงน่าสนใจ: ${p.whyExciting}
--------------------------------------------------------------------------------\n
[PROMPT ภาษาไทย ตัวเต็ม]:
${p.promptThaiLong}\n\n
[PROMPT ภาษาอังกฤษ BONUS ENGLISH PROMPT]:
${p.promptEngLong}\n\n
[วิธีรันและทดสอบ]: ${p.testRunGuide}\n
[ทริคตอบอาจารย์นิเทศก์]: ${p.teacherBonusTip}\n\n\n`;
  });

  zip.file('ALL_AI_PROMPTS_PACK_TH_EN.txt', promptsText);

  // 4. TEACHER_DEFENSE_QUESTIONS_ANSWERS.txt
  let teacherDoc = `================================================================================
คู่มือเตรียมตัวรับอาจารย์นิเทศก์ ปวช. คอมพิวเตอร์: คำถาม 10 ข้อยอดฮิต และบทตอบแบบมืออาชีพ
================================================================================\n\n`;

  teacherQuestionsList.forEach(tq => {
    teacherDoc += `${tq.question}\n`;
    teacherDoc += `เหตุผลที่อาจารย์ถาม: ${tq.whyTeacherAsks}\n`;
    teacherDoc += `บทตอบแนะนำ (ภาษาไทย): ${tq.sampleAnswerThai}\n`;
    teacherDoc += `ทริคเสริม: ${tq.proTips}\n`;
    teacherDoc += `--------------------------------------------------------------------------------\n\n`;
  });

  teacherDoc += `\nเกณฑ์การประเมินผลการฝึกงาน (Rubric Assessment):\n`;
  rubricCriteriaList.forEach(rc => {
    teacherDoc += `- ${rc.dimension} (${rc.fullScore} คะแนน)\n  ระดับดีเยี่ยม: ${rc.criteriaExcellent}\n  ระดับดี: ${rc.criteriaGood}\n  ระดับพอใช้: ${rc.criteriaFair}\n\n`;
  });

  zip.file('TEACHER_DEFENSE_QUESTIONS_ANSWERS.txt', teacherDoc);

  // 5. INTERNSHIP_REPORT_TEMPLATE.txt
  const reportTemplate = `================================================================================
แบบบันทึกผลการฝึกปฏิบัติงานประจำสัปดาห์ (Weekly Internship Log)
หลักสูตรประกาศนียบัตรวิชาชีพ (ปวช.) สาขาวิชาคอมพิวเตอร์ธุรกิจ / คอมพิวเตอร์กราฟิก / เทคโนโลยีสารสนเทศ
================================================================================

ชื่อ-นามสกุล นักศึกษา: .........................................................................
รหัสนักศึกษา: .................................... ชั้นปีที่: 3 แผนกวิชา: คอมพิวเตอร์
สถานประกอบการ: แผนกเทคโนโลยีสารสนเทศ (IT Department)
ผู้ควบคุมการฝึกงาน: ผู้จัดการแผนกไอที (IT Manager) & พี่ AI (Gemini 2.5 Flash)

--------------------------------------------------------------------------------
สัปดาห์ที่: ........... วันที่เริ่ม: ......./......./....... ถึง ......./......./.......
หัวข้องานที่ได้รับมอบหมาย:
........................................................................................................................

1. ชิ้นงาน / โปรเจกต์ที่ทำสำเร็จในสัปดาห์นี้:
........................................................................................................................
........................................................................................................................

2. เครื่องมือ AI ฟรี และโปรแกรมที่ใช้:
- [ ] VS Code & Live Server
- [ ] Google AI Studio (Gemini 2.5 Flash Free Tier)
- [ ] Cline / OpenCode AI Agent
- [ ] GitHub Pages / Vercel
- อื่นๆ: ..............................................................................................

3. ปัญหาหรืออุปสรรคที่พบในการทำงาน:
........................................................................................................................
........................................................................................................................

4. วิธีการแก้ปัญหาและการนำ AI มาประยุกต์ใช้แก้ไข:
........................................................................................................................
........................................................................................................................

5. สรุปความรู้และทักษะวิชาชีพที่ได้รับ:
........................................................................................................................
........................................................................................................................

ลงชื่อ นักศึกษา: .............................................................
ลงชื่อ ผู้ควบคุมการฝึกงาน (IT Manager): .............................................................
`;
  zip.file('INTERNSHIP_REPORT_TEMPLATE.txt', reportTemplate);

  // 6. Standalone offline HTML dashboard
  const htmlContent = `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน (Offline Version)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Prompt', sans-serif; }
    code, pre { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-slate-50 text-slate-900 min-h-screen">
  <header class="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div>
        <h1 class="text-lg font-bold text-sky-400">ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน</h1>
        <p class="text-xs text-slate-400">Offline Pack สำหรับรันบนเครื่องคอมพิวเตอร์ที่บ้าน (0 บาท ไม่ต้องต่อเน็ต)</p>
      </div>
      <span class="text-xs bg-sky-950 text-sky-300 px-3 py-1 rounded border border-sky-800">โหมดออฟไลน์สมบูรณ์แบบ</span>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-8">
    <section class="bg-white p-6 rounded-xl border border-slate-200 mb-8 shadow-sm">
      <h2 class="text-xl font-bold text-slate-900 mb-2">ยินดีต้อนรับน้องๆ นักศึกษาฝึกงาน ปวช. คอมพิวเตอร์!</h2>
      <p class="text-sm text-slate-600 leading-relaxed mb-4">
        นี่คือแพ็กเกจ Offline ที่ดาวน์โหลดมาไว้ในเครื่องคอมพิวเตอร์ของคุณ รวบรวมโปรเจกต์ AI สำเร็จรูป, Prompt ภาษาไทย-อังกฤษ, เทคนิคคอมสเปกต่ำ, และสคริปต์ตอบอาจารย์นิเทศก์ครบถ้วน
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <p class="font-bold text-slate-800 mb-1">🎮 มีโปรเจกต์พร้อมทำ</p>
          <p class="text-slate-600">เกมส์ 2D, แดชบอร์ดช่างไอที, เว็บค้าขาย, โคลนแอป</p>
        </div>
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <p class="font-bold text-slate-800 mb-1">🆓 เครื่องมือฟรี 100%</p>
          <p class="text-slate-600">Google AI Studio, VS Code, OpenRouter, GitHub Pages</p>
        </div>
        <div class="p-3 bg-slate-50 rounded border border-slate-200">
          <p class="font-bold text-slate-800 mb-1">🎓 ติวเข้มส่งอาจารย์</p>
          <p class="text-slate-600">คำถาม 10 ข้อยอดฮิตที่อาจารย์นิเทศก์ชอบถาม</p>
        </div>
      </div>
    </section>

    <h3 class="text-lg font-bold text-slate-900 mb-4">คลังโปรเจกต์พร้อม Prompt ตัวเต็ม</h3>
    <div class="space-y-6">
      ${allProjects.map((p, idx) => `
        <article class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h4 class="text-base font-bold text-slate-900">${idx + 1}. ${p.title}</h4>
            <div class="flex items-center gap-2 text-xs text-slate-500">
              <span>${p.categoryLabel}</span>
              <span>·</span>
              <span>${p.difficultyLabel}</span>
              <span>·</span>
              <span>${p.durationHours} ชม.</span>
            </div>
          </div>
          <p class="text-sm text-slate-600 mb-3">${p.oneLiner}</p>
          <div class="p-3 bg-sky-50 text-sky-800 rounded text-xs mb-4">
            <strong>เหตุผลที่น่าทำ:</strong> ${p.whyExciting}
          </div>

          <div class="space-y-3">
            <div>
              <p class="text-xs font-bold text-slate-700 mb-1">Prompt ภาษาไทย (คัดลอกไปสั่ง AI ได้ทันที):</p>
              <pre class="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto whitespace-pre-wrap">${p.promptThaiLong.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            </div>
            <div>
              <p class="text-xs font-bold text-slate-700 mb-1">Bonus English Prompt (ภาษาอังกฤษเพื่อความแม่นยำสูง):</p>
              <pre class="bg-slate-900 text-emerald-300 p-3 rounded text-xs overflow-x-auto whitespace-pre-wrap">${p.promptEngLong.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            </div>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap justify-between items-center text-xs text-slate-500">
            <span><strong>วิธีรัน:</strong> ${p.testRunGuide}</span>
            <span class="text-sky-700"><strong>ทริคอาจารย์:</strong> ${p.teacherBonusTip}</span>
          </div>
        </article>
      `).join('')}
    </div>
  </main>
</body>
</html>`;

  zip.file('index.html', htmlContent);

  return await zip.generateAsync({ type: 'blob' });
}
