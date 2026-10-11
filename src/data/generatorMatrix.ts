import { MasterProject, ProjectCategory, DifficultyLevel, ProjectVibe } from '../types/index.ts';

export const generatorCategories: { id: ProjectCategory; label: string; countApprox: number }[] = [
  { id: 'games', label: '🎮 เกมส์ & บันเทิงวัยรุ่น', countApprox: 2500 },
  { id: 'it-tools', label: '💻 เครื่องมือช่างคอม & แผนกไอที', countApprox: 2800 },
  { id: 'freelance-money', label: '💰 รับจ็อบหาเงิน & ฟรีแลนซ์', countApprox: 2200 },
  { id: 'web-clones', label: '🌐 ลอกเลียนแบบเว็บดัง & Social', countApprox: 1800 },
  { id: 'social-creator', label: '📱 TikTok & มีม คอนเทนต์ครีเอเตอร์', countApprox: 1500 },
  { id: 'ai-automation', label: '🤖 AI Agent & ระบบอัตโนมัติ', countApprox: 1200 },
];

export const generatorThemes = [
  { id: 'meme-arcade', label: 'มีมตลก & วัยรุ่นสายเกรียน', category: 'games' as ProjectCategory },
  { id: 'retro-8bit', label: 'เกมเรโทร 8-Bit Pixel Art', category: 'games' as ProjectCategory },
  { id: 'rpg-quest', label: 'มินิ RPG สู้บอสบั๊กโปรแกรมเมอร์', category: 'games' as ProjectCategory },
  { id: 'quiz-duel', label: 'ดวลตอบคำถาม IT & อนิเมะจับเวลา', category: 'games' as ProjectCategory },
  
  { id: 'pc-repair', label: 'ช่างซ่อมไมโครคอมพิวเตอร์ & จอฟ้า', category: 'it-tools' as ProjectCategory },
  { id: 'network-lan', label: 'เครือข่ายแลน & ไวไฟ ปิงระบบ', category: 'it-tools' as ProjectCategory },
  { id: 'inventory-asset', label: 'นับสต็อกครุภัณฑ์ไอที & สเปกคอม', category: 'it-tools' as ProjectCategory },
  { id: 'helpdesk-ticket', label: 'ระบบแจ้งซ่อมไอที Helpdesk ภายใน', category: 'it-tools' as ProjectCategory },
  
  { id: 'cafe-store', label: 'ร้านกาแฟ & คาเฟ่ สั่งของผ่านไลน์', category: 'freelance-money' as ProjectCategory },
  { id: 'affiliate-hub', label: 'ป้ายยา Affiliate Shopee / TikTok', category: 'freelance-money' as ProjectCategory },
  { id: 'portfolio-hire', label: 'เว็บพอร์ตโฟลิโอรับงานช่างคอม', category: 'freelance-money' as ProjectCategory },
  { id: 'invoice-gen', label: 'ออกใบเสนอราคาและบิลเงินสด', category: 'freelance-money' as ProjectCategory },

  { id: 'clone-tiktok', label: 'โคลน TikTok Feed วิดีโอสั้น', category: 'web-clones' as ProjectCategory },
  { id: 'clone-netflix', label: 'โคลน Netflix แพลตฟอร์มดูซีรีส์', category: 'web-clones' as ProjectCategory },
  { id: 'clone-spotify', label: 'โคลน Spotify เครื่องเล่นเพลง Lo-fi', category: 'web-clones' as ProjectCategory },
  { id: 'clone-discord', label: 'โคลน Discord แชตห้องคอมพิวเตอร์', category: 'web-clones' as ProjectCategory },

  { id: 'tiktok-script', label: 'เครื่องมือช่วยคิดสคริปต์คลิปสั้น', category: 'social-creator' as ProjectCategory },
  { id: 'caption-hashtag', label: 'ตัวช่วยแคปชั่น & แฮชแท็กไวรัล', category: 'social-creator' as ProjectCategory },
  { id: 'image-resizer', label: 'เครื่องมือย่อภาพ & ตัดภาพลงโซเชียล', category: 'social-creator' as ProjectCategory },

  { id: 'ai-doc-summary', label: 'AI สรุปรายงานการฝึกงาน', category: 'ai-automation' as ProjectCategory },
  { id: 'ai-code-checker', label: 'AI ตรวจโค้ดภาษาไทย & หาบั๊ก', category: 'ai-automation' as ProjectCategory },
  { id: 'ai-prompt-tuner', label: 'เครื่องมืออัปเกรด Prompt 5 ดาว', category: 'ai-automation' as ProjectCategory },
];

export const generatorAudiences: { id: ProjectVibe; label: string; desc: string }[] = [
  { id: 'show-friends', label: '😎 สายอวดเพื่อนในกลุ่ม', desc: 'เน้นความว้าว กราฟิกเท่ มีมกวนๆ เอาไปแชร์เพื่อนในห้องคอม' },
  { id: 'teacher-wow', label: '🎓 สายส่งอาจารย์นิเทศก์', desc: 'ข้อมูลแน่น มีหลักการ ตอบโจทย์หลักสูตร ปวช. ได้เกรด 4 แน่นอน' },
  { id: 'make-money', label: '💵 สายรับจ็อบหาเงินจริง', desc: 'เน้นฟังก์ชันธุรกิจ เอาไปขายร้านค้าชุมชนหรือรับฟรีแลนซ์ 2,000-5,000 บาท' },
  { id: 'it-support', label: '🛠️ สายช่างไอทีแก้ปัญหา', desc: 'แก้ปัญหาคอมพิวเตอร์ เน็ตเวิร์ก เซิร์ฟเวอร์ในสถานประกอบการจริง' },
  { id: 'fun-meme', label: '🤣 สายเกรียน & ขำขัน', desc: 'เน้นความสนุก เรียกเสียงหัวเราะ ผ่อนคลายจากการฝึกงานหนัก' },
];

export const generatorDifficulties: { id: DifficultyLevel; label: string; hours: number }[] = [
  { id: 'easy', label: '🟢 กล้วยๆ หมูๆ (2-4 ชม.)', hours: 3 },
  { id: 'medium', label: '🟡 พอดีมือกำลังมันส์ (4-6 ชม.)', hours: 5 },
  { id: 'hard', label: '🔴 ท้าทายระดับโปร (6-10 ชม.)', hours: 8 },
];

export const freeToolsets = [
  'VS Code + Live Server + Google AI Studio Free',
  'VS Code + Cline + OpenRouter Free Tier',
  'Web Browser + HTML5 Canvas + GitHub Pages',
  'VS Code + Roo Code + Hugging Face Spaces Free',
  'VS Code + OpenCode + Tailwind CDN + LocalStorage',
];

export function buildGeneratedProject(options: {
  category?: ProjectCategory;
  themeId?: string;
  difficulty?: DifficultyLevel;
  vibe?: ProjectVibe;
  customInterest?: string;
}): MasterProject {
  const category = options.category || 'games';
  const matchingThemes = generatorThemes.filter(t => t.category === category);
  const theme = options.themeId 
    ? generatorThemes.find(t => t.id === options.themeId) || matchingThemes[0]
    : matchingThemes[Math.floor(Math.random() * matchingThemes.length)] || generatorThemes[0];
  
  const difficulty = options.difficulty || 'medium';
  const vibe = options.vibe || 'show-friends';
  const diffObj = generatorDifficulties.find(d => d.id === difficulty) || generatorDifficulties[1];
  const vibeObj = generatorAudiences.find(v => v.id === vibe) || generatorAudiences[0];
  const toolset = freeToolsets[Math.floor(Math.random() * freeToolsets.length)];

  const seed = Math.floor(Math.random() * 90000) + 10000;
  const customTag = options.customInterest ? options.customInterest.trim() : '';

  let title = '';
  let oneLiner = '';
  let whyExciting = '';
  let teacherTip = '';

  if (category === 'games') {
    title = `สุดยอดมินิเกมส์ 2D: ${theme.label} ${customTag ? `(${customTag})` : ''} - รันบนเบราว์เซอร์`;
    oneLiner = `เกมส์แนว ${theme.label} เล่นได้ทันที มีระบบฟิสิกส์ ระบบสะสมคะแนน และเสียงเอฟเฟกต์ 8-Bit รองรับทั้งคอมและมือถือ`;
    whyExciting = `ส่งลิงก์ให้เพื่อนในห้อง ปวช. หรือในกลุ่ม Discord เล่นแข่งกัน บันทึกสถิติลงเครื่อง เอาไปอวดได้ว่านี่คือเกมส์ที่หนูสั่ง AI เขียนขึ้นมาเอง!`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ฝึกการเขียน Game Loop, State Management และการประยุกต์ใช้ Canvas Rendering Context ในการจัดการกราฟิกแบบสองมิติครับ/ค่ะ"`;
  } else if (category === 'it-tools') {
    title = `ระบบเครื่องมือช่างไอที: ${theme.label} ${customTag ? `(${customTag})` : ''} ประจำแผนกคอมพิวเตอร์`;
    oneLiner = `เครื่องมืออัจฉริยะสำหรับช่างคอมพิวเตอร์ ช่วยวิเคราะห์ปัญหา คำนวณค่าทางเทคนิค และออกใบรายงานผลการตรวจเช็ค`;
    whyExciting = `ใช้แก้ปัญหาคอมพิวเตอร์ในแผนกไอทีได้จริง เวลาเครื่องเปิดไม่ติดหรือเน็ตหลุด ไม่ต้องเสียเวลานั่งมั่ว โปรแกรมนี้ช่วยชี้ทางสว่างทันที`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้สร้างขึ้นเพื่อสนับสนุนงานซ่อมบำรุงในสถานประกอบการ ช่วยลดเวลาในการวินิจฉัยปัญหาของช่างฝึกงานลงกว่า 50% ครับ/ค่ะ"`;
  } else if (category === 'freelance-money') {
    title = `เว็บสำเร็จรูปพร้อมขาย: ${theme.label} ${customTag ? `(${customTag})` : ''} รับเงินจริง`;
    oneLiner = `เว็บไซต์ธุรกิจสไตล์ Single-Page มีฟังก์ชันเลือกสินค้า คำนวณเงิน ตะกร้าสินค้า และปุ่มส่งข้อมูลเข้า LINE ร้านค้า`;
    whyExciting = `เอาไปเสนอขายร้านค้า คาเฟ่ หรือร้านซ่อมคอมแถวบ้านได้เงิน 2,000 - 4,000 บาท มีผลงานเชิงพาณิชย์ตั้งแต่อายุไม่ถึง 18!`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการบูรณาการเทคโนโลยีสารสนเทศเข้ากับการทำธุรกิจชุมชน ลดภาระค่าใช้จ่ายของร้านค้าโดยใช้เครื่องมือฟรี 100% ครับ/ค่ะ"`;
  } else if (category === 'web-clones') {
    title = `โปรเจกต์โคลนเว็บดังระดับโลก: ${theme.label} ${customTag ? `(${customTag})` : ''}`;
    oneLiner = `ศึกษาโครงสร้างเว็บระดับโลก แกะโค้ด Layout, Sticky Navigation, Responsive Grid และแอนิเมชันระดับมืออาชีพ`;
    whyExciting = `โชว์เพื่อนและอาจารย์ว่าเราสามารถแกะระบบและสร้างเว็บหน้าตาเหมือนแอปพันล้านได้ด้วยการสั่ง AI สั่งการและประกอบโค้ด`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการฝึก Reverse Engineering ในส่วนของ UI/UX เพื่อศึกษา Best Practice ด้านการออกแบบของแพลตฟอร์มระดับสากลครับ/ค่ะ"`;
  } else if (category === 'social-creator') {
    title = `เครื่องมือ Creator ไวรัล: ${theme.label} ${customTag ? `(${customTag})` : ''}`;
    oneLiner = `เว็บช่วยผลิตคอนเทนต์ TikTok, Reels, YouTube Shorts สำหรับคนชอบทำคลิป ช่วยคิดไอเดียและสร้างภาพแบบอัตโนมัติ`;
    whyExciting = `ช่วยให้ช่อง TikTok ของเรามียอดวิวพุ่ง! ไม่ต้องปวดหัวคิดบทคลิป มีเครื่องมือช่วยสร้างสตอรี่บอร์ดและแคปชั่นเสร็จใน 1 นาที`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ประยุกต์ใช้ AI ในด้าน Content Production และ Digital Marketing ซึ่งเป็นทักษะแห่งอนาคตของเด็กไอทีครับ/ค่ะ"`;
  } else {
    title = `ระบบ AI Agent อัตโนมัติ: ${theme.label} ${customTag ? `(${customTag})` : ''}`;
    oneLiner = `สร้างระบบตัวแทน AI ช่วยเขียนโค้ด ตรวจจับข้อผิดพลาด และสรุปเอกสารรายงานสำหรับนักศึกษาฝึกงาน`;
    whyExciting = `มีผู้ช่วย AI ส่วนตัวประจำเครื่องคอมพิวเตอร์ ไม่ต้องกลัวทำงานพลาด สั่งงานยาวๆ แล้วได้ผลลัพธ์ระดับโปร`;
    teacherTip = `บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการฝึกทักษะ Prompt Engineering เชิงลึกและการตั้งค่า Guardrails เพื่อให้ AI ทำงานได้แม่นยำและปลอดภัยครับ/ค่ะ"`;
  }

  const promptThaiLong = `ทำหน้าที่เป็น Senior Software Engineer และครูพี่เลี้ยงฝ่ายไอทีสำหรับนักศึกษา ปวช. คอมพิวเตอร์
ช่วยเขียนโค้ดและพัฒนาโปรเจกต์ "${title}"
โดยเขียนทุกอย่างรวมอยู่ในไฟล์เดียว index.html (ประกอบด้วย HTML5, Tailwind CSS via CDN, และ Vanilla JavaScript)

[บริบทและเป้าหมายของงาน]
- หมวดหมู่: ${theme.label} (${vibeObj.label})
- ระดับความยาก: ${diffObj.label} (ใช้เวลาทำประมาณ ${diffObj.hours} ชั่วโมง)
- วัตถุประสงค์: ให้นักศึกษาฝึกงานสามารถนำไปเปิดทดสอบบนเครื่องตัวเองผ่าน Localhost หรือ Live Server ได้ทันที และใช้เป็นผลงานส่งอาจารย์นิเทศก์

[ข้อกำหนดทางเทคนิคที่ต้องมี]
1. ส่วนต่อประสานผู้ใช้ (UI):
   - ออกแบบด้วย Tailwind CSS ทันสมัย สวยงาม ไม่รกสายตา
   - รองรับหน้าจอคอมพิวเตอร์และโทรศัพท์มือถือ (Responsive 100%)
   - มีชุดสีที่เข้ากับธีม "${theme.label}"
2. ฟังก์ชันการทำงานหลัก:
   - มีระบบรับข้อมูลและโต้ตอบกับผู้ใช้ (User Interaction) ที่ชัดเจน
   - มีการบันทึกสถานะหรือคะแนนหรือข้อมูลลงใน LocalStorage ของเบราว์เซอร์ เพื่อให้รีเฟรชหน้าแล้วข้อมูลไม่หาย
   - มีการแจ้งเตือน (Toast/Alert) สวยงามเมื่อทำรายการสำเร็จ
3. ความเป็นมิตรกับนักศึกษา:
   - เขียนโค้ดอย่างเป็นระเบียบ มีการจัดย่อหน้าชัดเจน
   - ใส่คำอธิบาย (Comments) ภาษาไทยสั้นๆ กำกับแต่ละส่วนว่าฟังก์ชันนี้ทำหน้าที่อะไร
   - ห้ามใช้ไลบรารีภายนอกที่ต้องติดตั้ง npm ให้ใช้ CDN ฟรีเท่านั้น

ขอโค้ดตัวเต็มแบบสมบูรณ์ 100% ตั้งแต่ <!DOCTYPE html> จนถึง </html> ห้ามตัดทอนหรือใส่จุดไข่ปลา (...) เพื่อให้นักศึกษาก๊อบปี้ไปวางแล้วรันได้ทันที`;

  const promptEngLong = `Act as a senior full-stack software engineer and vocational instructor. Build a complete, production-grade, single-file HTML5 web application: "${title}".
Theme & Context: ${theme.label} | Category: ${category} | Target Vibe: ${vibeObj.label} | Difficulty: ${diffObj.label}.
Requirements:
- Architecture: Single index.html containing modern HTML5, Tailwind CSS CDN styling, and Vanilla JavaScript.
- Mobile-first responsive layout with clean typography, intuitive controls, and tactile feedback.
- Client-side persistence using localStorage for state/score/data preservation across sessions.
- Comprehensive inline comments explaining logic flow for junior vocational computer students.
- Zero external build dependencies (pure CDN & browser APIs). Provide 100% complete, unclipped, copy-paste ready source code.`;

  return {
    id: `gen-proj-${seed}`,
    title,
    category,
    categoryLabel: generatorCategories.find(c => c.id === category)?.label || 'โปรเจกต์ไอที',
    difficulty,
    difficultyLabel: diffObj.label,
    durationHours: diffObj.hours,
    vibe,
    vibeLabel: vibeObj.label,
    oneLiner,
    whyExciting,
    toolsUsed: toolset.split(' + '),
    tasks: [
      { step: 1, title: 'เตรียมโครงสร้างและดีไซน์', detail: `สร้างไฟล์ index.html ดึง Tailwind CSS CDN และวางโครงสร้างหน้าจอตามธีม ${theme.label}`, deliverable: 'หน้าจอสวยงามพร้อมปุ่มควบคุม' },
      { step: 2, title: 'เขียนระบบการทำงานหลัก', detail: 'ใส่ฟังก์ชัน JavaScript ควบคุมตรรกะ การคำนวณ หรือการเล่นตามโจทย์', deliverable: 'ระบบตอบสนองการกดและประมวลผลได้ถูกต้อง' },
      { step: 3, title: 'บันทึกข้อมูล & ความประณีต', detail: 'เชื่อมต่อ LocalStorage บันทึกข้อมูล และปรับแต่งให้เปิดดูในมือถือได้สวยงาม 100%', deliverable: 'ผลงานพร้อมรันอวดเพื่อนและอาจารย์' },
    ],
    promptThaiLong,
    promptEngLong,
    testRunGuide: 'คัดลอก Prompt ด้านบนไปวางใน AI ฟรี (เช่น Google AI Studio หรือ Claude/ChatGPT ฟรี) จากนั้นนำโค้ดที่ได้มาเซฟเป็นไฟล์ index.html ในโฟลเดอร์ของตัวเอง แล้วเปิดด้วย Google Chrome หรือ VS Code Live Server',
    teacherBonusTip: teacherTip,
    tags: [theme.label, category, diffObj.label, 'Single File HTML', 'AI Generated'],
  };
}
