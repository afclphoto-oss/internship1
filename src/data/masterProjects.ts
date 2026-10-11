import { MasterProject } from '../types/index.ts';

export const masterProjectsList: MasterProject[] = [
  {
    id: 'proj-flappy-meme',
    title: 'เกมส์ 2D Flappy Meme สไตล์เด็กคอม ปวช. (พร้อมเสียง 8-Bit & ระบบคะแนน)',
    category: 'games',
    categoryLabel: 'เกมส์ & บันเทิงวัยรุ่น',
    difficulty: 'easy',
    difficultyLabel: 'กล้วยๆ หมูๆ',
    durationHours: 4,
    vibe: 'fun-meme',
    vibeLabel: 'สายเกรียน & ขำขัน',
    oneLiner: 'เกมส์บังคับตัวละครหน้ามีม บินหลบปลั๊กไฟและสายแลนที่ขาด บันทึก High Score ลงเครื่อง แข่งกับเพื่อนในห้อง',
    whyExciting: 'เอาลิงก์ไปให้เพื่อนในห้องเล่นแข่งกันตอนพักเที่ยง ใครแพ้เลี้ยงชานมไข่มุก! ตัวละครเปลี่ยนเป็นหน้าอาจารย์หรือหน้ามีมตลกๆ ได้ มีเสียงบี๊บฮาๆ ตอนชนเสา',
    toolsUsed: ['VS Code', 'Live Server', 'Google AI Studio (Gemini 2.5 Flash)', 'GitHub Pages'],
    tasks: [
      { step: 1, title: 'สร้างฉาก Canvas 2D', detail: 'สร้างหน้าต่างเกมขนาด 400x600 พิกเซล พื้นหลังเคลื่อนที่ช้าๆ แบบ Parallax scrolling', deliverable: 'กรอบเกมที่แสดงกราฟิกพื้นหลังได้' },
      { step: 2, title: 'ระบบฟิสิกส์การบินและการชน', detail: 'เขียนการคำนวณแรงโน้มถ่วง (Gravity = 0.25) และการกระโดด (Jump = -4.5) เมื่อกด Spacebar หรือแตะหน้าจอสัมผัส', deliverable: 'ตัวละครกระโดดและร่วงตามแรงโน้มถ่วงได้สมจริง' },
      { step: 3, title: 'สุ่มเสาสิ่งกีดขวาง & นับคะแนน', detail: 'สุ่มเสาบนและล่างที่มีช่องว่าง 140px เคลื่อนที่จากขวาไปซ้าย พร้อมบวก 1 คะแนนเมื่อรอดพ้น', deliverable: 'เสาสุ่มต่อเนื่องและคะแนนเพิ่มขึ้น' },
      { step: 4, title: 'บันทึกคะแนนสูงสุด & เสียงประกอบ', detail: 'เชื่อมต่อ LocalStorage จำชื่อผู้เล่นและ High Score และใช้ Web Audio API สังเคราะห์เสียงบี๊บ 8-bit โดยไม่ต้องดาวน์โหลดไฟล์เสียง', deliverable: 'ระบบ High Score และเสียงสมบูรณ์' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Senior Game Developer และอาจารย์สอนเขียนเกมส์ HTML5 Canvas สำหรับนักเรียน ปวช. คอมพิวเตอร์
ช่วยเขียนโค้ดเกมส์ 2D สไตล์ Flappy Bird แบบ Single-file HTML ที่มีทุกอย่างครบทั้ง HTML, CSS, JavaScript ในไฟล์ index.html เดียว

[ความต้องการหลัก]
1. กราฟิก: ตัวละครเป็นอิโมจิหัวเราะ 🤣 หรือยานคอมพิวเตอร์ สิ่งกีดขวางเป็นสายเคเบิล/สายแลนสีเขียว
2. การควบคุม: รองรับทั้งกด Spacebar บนคีย์บอร์ดคอมพิวเตอร์ และแตะหน้าจอ (Touch) สำหรับเล่นบนมือถือ
3. ระบบฟิสิกส์: มีแรงโน้มถ่วง (Gravity), ความเร็วตก, และแรงดีดเมื่อกดกระโดดอย่างนุ่มนวล
4. ระบบคะแนน: แสดงคะแนนปัจจุบันตรงกลางบน และบันทึก High Score ลง localStorage ของเบราว์เซอร์
5. ระบบเสียง: ใช้ Web Audio API สร้างเสียงตอนกระโดด (ความถี่สูง) และเสียงตอนชนเสา Game Over (ความถี่ต่ำ) ห้ามใช้ไฟล์ .mp3 ภายนอกเพื่อไม่ให้ติดบล็อก CORS
6. หน้าจอ Game Over: มีปุ่ม "เล่นใหม่อีกครั้ง" และแสดงคะแนนที่ทำได้เทียบกับสถิติสูงสุด
7. ดีไซน์: ใช้ Tailwind CSS สำหรับกรอบ UI รอบนอก โทนสีมืดสไตล์เกมเมอร์ (Dark arcade theme)

ขอโค้ดตัวเต็มแบบสมบูรณ์ 100% ไม่มี Placeholder หรือข้อความละไว้ในฐานที่เข้าใจ เพื่อให้สามารถ Copy ไปวางใน VS Code แล้วกดเปิดด้วย Live Server เล่นได้ทันที`,
    promptEngLong: `Act as a senior HTML5 game developer. Create a complete, production-ready, single-file HTML5 Canvas 2D game inspired by Flappy Bird, tailored for vocational IT students.
Key Specifications:
- Pure HTML5 Canvas + Vanilla JavaScript + Tailwind CSS CDN for container styling.
- Responsive canvas (portrait orientation ~400x600px centered) with dual controls: Keyboard (Spacebar/Up Arrow) and Touch screen for mobile browsers.
- Realistic smooth 2D gravity physics, vertical velocity damping, and collision detection against randomized top/bottom obstacle pillars.
- Web Audio API procedural sound synthesis (no external audio assets required): jump chirp, score ding, and collision impact sound.
- LocalStorage integration to persist player best High Score across page reloads.
- Polish: Start overlay with instructions, in-game score counter, and animated Game Over summary card with 'Play Again' button. Provide 100% complete, unclipped code ready to run immediately.`,
    testRunGuide: 'เปิดโปรแกรม VS Code > สร้างไฟล์ชื่อ index.html > วางโค้ดที่ AI สร้างให้ > คลิกขวาเลือก "Open with Live Server" หรือเปิดไฟล์ด้วย Google Chrome ได้ทันที',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้หนูใช้ AI ช่วยออกแบบ State Machine ของเกมส์ และใช้ Web Audio API สังเคราะห์ความถี่เสียงแทนการโหลดไฟล์ เพื่อประหยัด Bandwidth และหลีกเลี่ยง CORS Policy ครับ/ค่ะ"',
    tags: ['HTML5 Canvas', 'Game Dev', 'Web Audio API', 'LocalStorage', 'Mobile Friendly'],
  },
  {
    id: 'proj-pc-doctor-ai',
    title: 'AI หมอคอมพิวเตอร์ (PC Hardware Diagnostic & BSOD Solver)',
    category: 'it-tools',
    categoryLabel: 'เครื่องมือช่างคอม & แผนกไอที',
    difficulty: 'medium',
    difficultyLabel: 'พอดีมือ',
    durationHours: 6,
    vibe: 'it-support',
    vibeLabel: 'สายไอทีแก้ปัญหา',
    oneLiner: 'พิมพ์อาการเสียภาษาบ้านๆ หรือใส่รหัสจอฟ้า แล้วระบบวิเคราะห์หาสาเหตุ ชี้จุดอุปกรณ์ที่พัง พร้อมวิธีซ่อมทีละขั้นตอน',
    whyExciting: 'ใช้ทำงานจริงในแผนกไอทีได้เลย! เวลาเพื่อนหรือคนในออฟฟิศคอมพัง ไม่ต้องนั่งเดา ให้โปรแกรมนี้ช่วยวิเคราะห์ แล้วทำเป็นผู้เชี่ยวชาญแก้ปัญหาได้ทันที',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'Google AI Studio', 'OpenRouter Free API'],
    tasks: [
      { step: 1, title: 'สร้างแบบฟอร์มรับอาการเสีย', detail: 'มีช่องค้นหาด่วน, ตัวเลือกอาการเสียยอดฮิต (เปิดไม่ติด, เสียงปี๊บยาว, จอฟ้า, เครื่องดับเอง), และช่องพิมพ์เล่าอาการแบบอิสระ', deliverable: 'UI รับข้อมูลอาการเสียที่ใช้งานง่าย' },
      { step: 2, title: 'สร้างฐานข้อมูลอาการเสียออฟไลน์', detail: 'สร้างชุดข้อมูล JSON อาการเสียมาตรฐาน 25 อาการ พร้อม Beep Code ของเมนบอร์ด AMI / Award / Phoenix', deliverable: 'ฐานข้อมูลอาการเสียที่ค้นหาได้แม้ไม่มีเน็ต' },
      { step: 3, title: 'ระบบ AI ช่วยวิเคราะห์เชิงลึก', detail: 'เชื่อมต่อกับ AI ให้สรุปความเป็นไปได้ 3 อันดับแรก พร้อมลำดับการตรวจสอบจากง่ายที่สุด (เช่น ตรวจสายไฟ) ไปยากที่สุด (เช่น เปลี่ยนชิป)', deliverable: 'ผลลัพธ์การวิเคราะห์แบบแบ่งระดับความเสี่ยง' },
      { step: 4, title: 'พิมพ์รายงานใบส่งซ่อม (Repair Slip)', detail: 'ปุ่มสร้างใบสรุปอาการและวิธีแก้ไข สามารถกด Print หรือบันทึกเป็นรูปภาพเพื่อส่งให้ลูกค้า', deliverable: 'ใบสรุปการตรวจเช็คที่ดูเป็นมืออาชีพ' },
    ],
    promptThaiLong: `ทำหน้าที่เป็นผู้เชี่ยวชาญด้าน IT Support & วิศวกรฮาร์ดแวร์คอมพิวเตอร์
ช่วยเขียนเว็บแอปพลิเคชัน "AI ช่างคอมออนไลน์ (PC Hardware Diagnostic & Troubleshooting Tool)" สำหรับนักศึกษา ปวช. สาขาคอมพิวเตอร์และช่างไอทีประจำองค์กร

[ฟีเจอร์ที่ต้องมีในไฟล์เดียว index.html]
1. หน้าแรก: มีช่องค้นหาอาการเสียยอดฮิต เช่น "จอฟ้า DRIVER_IRQL_NOT_LESS_OR_EQUAL", "เปิดเครื่องแล้วมีเสียงร้องติ๊ดยาว 1 สั้น 2", "เล่นเกมแล้วภาพดับแต่เสียงยังดังอยู่"
2. แท็บ Beep Code Explorer: ตารางแปลเสียงเตือนจากไบออสของบอร์ด AMI และ Award BIOS ให้ช่างคลิกดูได้ทันที
3. ระบบวิเคราะห์อาการ: เมื่อผู้ใช้เลือกหรือพิมพ์อาการ ให้แสดงผลดังนี้:
   - อุปกรณ์ที่น่าจะเกี่ยวข้อง (เช่น RAM, Power Supply, Thermal Paste, Graphic Card)
   - ระดับความยากในการแก้ไข (ง่าย / ปานกลาง / ต้องเปลี่ยนอะไหล่)
   - ขั้นตอนการแก้ไขปัญหาทีละสเต็ป (Step-by-Step Checklist ที่ติ๊กถูกได้เมื่อทำเสร็จ)
   - คำเตือนความปลอดภัย (เช่น ถอดปลั๊กก่อนสัมผัส, ระวังไฟฟ้าสถิต ESD)
4. ฟังก์ชันจำลองคำตอบของ AI: มีปุ่ม "ขอคำปรึกษา AI เพิ่มเติม" ที่สรุปแนวทางแบบเข้าใจง่าย
5. ใบสรุปรายงานช่าง (Service Ticket): แสดงสรุปผลและมีปุ่มกดพิมพ์ (Window.print()) จัดหน้าสำหรับกระดาษ A4 สวยงาม

ดีไซน์: ใช้ Tailwind CSS โทนสี Tech Blue (#0284c7) และ Slate สะอาดตา สไตล์แดชบอร์ดช่างเทคนิคมืออาชีพ มีช่องกรองและปุ่มกดที่ชัดเจน`,
    promptEngLong: `Act as a senior IT systems administrator and hardware engineer. Create a standalone, single-file modern Web App: 'PC Hardware Diagnostic & Trouble Solver' for vocational IT interns.
Features:
- Searchable diagnostic database with 20+ common PC hardware failures (BSOD error codes, BIOS beep codes, thermal throttling, PSU brownouts, GPU artifacts).
- Interactive BIOS Beep Code Lookup table for AMI, Award, and Phoenix BIOS configurations.
- Step-by-step interactive troubleshooting checklists with checkboxes that track repair progress.
- Printable Repair Slip / Diagnostic Summary formatted cleanly with CSS print media queries.
- Clean modern technician dashboard UI using Tailwind CSS with tabs for 'Quick Diagnostic', 'Beep Codes', and 'Generate Service Report'. Single-file delivery, no external server required.`,
    testRunGuide: 'บันทึกเป็นไฟล์ doctor.html ดับเบิลคลิกเปิดในเบราว์เซอร์ได้ทันทีโดยไม่ต้องต่ออินเทอร์เน็ต',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ตอบโจทย์รายวิชาการซ่อมบำรุงไมโครคอมพิวเตอร์ โดยหนูนำความรู้เรื่อง Beep Code และ BSOD มารวมกับระบบค้นหาข้อมูล เพื่อให้ช่างฝึกงานหน้างานทำงานได้เร็วขึ้นครับ/ค่ะ"',
    tags: ['IT Support', 'Hardware', 'Troubleshooting', 'BIOS Beep Codes', 'Printable Slip'],
  },
  {
    id: 'proj-pc-builder-psu',
    title: 'โปรแกรมจัดสเปกคอม & คำนวณโหลดไฟ Power Supply (PSU Calculator Pro)',
    category: 'it-tools',
    categoryLabel: 'เครื่องมือช่างคอม & แผนกไอที',
    difficulty: 'medium',
    difficultyLabel: 'พอดีมือ',
    durationHours: 5,
    vibe: 'make-money',
    vibeLabel: 'สายรับจ็อบหาเงิน',
    oneLiner: 'เลือก CPU, การ์ดจอ, แรม, พัดลม ระบบคำนวณวัตต์รวม แนะนำขนาดพาวเวอร์ซัพพลาย พร้อมคำนวณราคางบประมาณให้ลูกค้า',
    whyExciting: 'ใช้รับจ็อบจัดสเปกคอมให้เพื่อนและคนแถวบ้านได้เงินจริง! มีใบเสนอราคาปริ้นต์ไปคุยกับร้านคอม แบรนด์เนมดูแพง เพื่อนต้องยกย่องให้เป็นเซียนคอมประจำกลุ่ม',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'JavaScript', 'Google AI Studio'],
    tasks: [
      { step: 1, title: 'จัดทำฐานข้อมูลชิ้นส่วนคอมพิวเตอร์', detail: 'สร้างตัวเลือก CPU (Intel Core i3-i9, AMD Ryzen 3-9) และการ์ดจอ (RTX 3050-4090, RX 6600-7900) พร้อมค่า TDP วัตต์จริงและราคาประมาณการ', deliverable: 'Dropdown เลือกอุปกรณ์พร้อมค่าวัตต์อัตโนมัติ' },
      { step: 2, title: 'สูตรคำนวณวัตต์และความปลอดภัย (Safety Margin)', detail: 'คำนวณ Total Wattage + เผื่อไฟกระชาก 20-30% แนะนำขนาดวัตต์ PSU เช่น 550W, 650W, 750W, 850W พร้อมระดับ 80 Plus (Bronze, Gold)', deliverable: 'แถบมิเตอร์แสดงปริมาณโหลดไฟแบบเรียลไทม์' },
      { step: 3, title: 'คำนวณงบประมาณรวมและใบเสนอราคา', detail: 'สรุปยอดเงินรวมของทั้งชุด พร้อมจัดรูปแบบเป็นใบเสนอราคา (Quotation) ใส่ชื่อช่างเด็ก ปวช. และเบอร์ติดต่อ', deliverable: 'ใบเสนอราคาพร้อมสั่งพิมพ์' },
    ],
    promptThaiLong: `ทำหน้าที่เป็นเซียนจัดสเปกคอมพิวเตอร์และนักพัฒนาเว็บ Frontend
ช่วยเขียนเว็บแอปพลิเคชัน "โปรแกรมจัดสเปกคอมพิวเตอร์ & คำนวณขนาดพาวเวอร์ซัพพลาย (PC Builder & PSU Wattage Calculator)" รวมในไฟล์เดียว index.html

[ฟังก์ชันที่ต้องมี]
1. ตัวเลือกอุปกรณ์คอมพิวเตอร์:
   - CPU: มีตัวเลือกรุ่นยอดนิยมของ Intel Gen 12-14 และ AMD Ryzen 5000-7000 พร้อมค่า TDP วัตต์และราคา
   - การ์ดจอ (GPU): ตั้งแต่ GTX 1650, RTX 3060, RTX 4060, RTX 4070 ไปจนถึง AMD Radeon RX 6600/7600
   - แรม (RAM): DDR4/DDR5 (จำนวนแถว)
   - พื้นที่เก็บข้อมูล: M.2 NVMe SSD, SATA SSD, HDD
   - พัดลมเคสและระบบระบายความร้อน: พัดลมธรรมดา, ชุดน้ำปิด 240mm/360mm
2. แถบมาตรวัดการใช้ไฟ (Wattage Meter):
   - คำนวณวัตต์รวมอัตโนมัติแบบเรียลไทม์เมื่อเปลี่ยนชิ้นส่วน
   - คำนวณขนาด PSU ที่แนะนำ (เผื่อโหลดปลอดภัย 25-30%)
   - แนะนำมาตรฐาน 80 Plus ที่คุ้มค่า (White, Bronze, Silver, Gold)
3. สรุปงบประมาณและใบเสนอราคา:
   - แสดงราคารวมทั้งหมดของชุดคอมพิวเตอร์
   - มีปุ่ม "พิมพ์ใบเสนอราคา (Print Quotation)" ที่มีดีไซน์เป็นทางการ สวยงามสำหรับส่งให้ลูกค้าหรืออาจารย์
4. ดีไซน์: ใช้ Tailwind CSS โทน Dark Mode ทันสมัยสไตล์เกมมิ่งการ์ด ตกแต่งสวยงาม มีตัวเลขสรุปชัดเจน`,
    promptEngLong: `Act as a senior frontend engineer and PC enthusiast. Build a standalone single-file PC Part Picker and Power Supply Wattage Calculator web app.
Requirements:
- Component selectors for CPU (Intel/AMD with realistic TDP & estimated prices), GPU (Nvidia/AMD with peak power draws), RAM, Storage (M.2 NVMe, HDD), and Liquid/Air cooling.
- Live reactive Total System Wattage calculation with visual power gauge, overhead buffer calculation (+25-30%), and recommended PSU wattage rating (e.g., 650W Bronze / 750W Gold).
- Total estimated cost tally with currency formatting (THB).
- One-click 'Export Quotation Slip' ready for print layout. Built with Tailwind CSS and Vanilla JS. Single-file index.html.`,
    testRunGuide: 'เปิดด้วยเบราว์เซอร์ ทดลองเลือก CPU Core i5-13400 กับ RTX 4060 แล้วดูมิเตอร์วัตต์จะขยับอัตโนมัติ',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ผสานคณิตศาสตร์การคำนวณโหลดกำลังไฟฟ้า (Watt = V x I) เข้ากับฐานข้อมูลอุปกรณ์ ทำให้ช่างไม่เลือกพาวเวอร์ซัพพลายที่วัตต์ไม่พอจนเครื่องดับครับ/ค่ะ"',
    tags: ['Hardware', 'PSU Calculator', 'E-commerce', 'Quotation', 'Gaming PC'],
  },
  {
    id: 'proj-cafe-line-store',
    title: 'เว็บร้านค้าหน้าเดียว สั่งของเด้งเข้า LINE ทันที (One-Page Mini E-Commerce)',
    category: 'freelance-money',
    categoryLabel: 'รับจ็อบหาเงิน & ฟรีแลนซ์',
    difficulty: 'medium',
    difficultyLabel: 'พอดีมือ',
    durationHours: 6,
    vibe: 'make-money',
    vibeLabel: 'สายรับจ็อบหาเงิน',
    oneLiner: 'เว็บร้านกาแฟหรือร้านขายอุปกรณ์ไอทีชุมชน มีเมนูสินค้า กดใส่ตะกร้า คำนวณเงิน แล้วกดปุ่มสั่งซื้อส่งข้อความเข้า LINE ร้านได้ทันที',
    whyExciting: 'รับงานจริงได้เงินจริง 2,000 - 5,000 บาทต่อเว็บ! เอาไปเสนอร้านชำ ร้านกาแฟ หรือร้านขายของแถวบ้านได้เลย ไม่ต้องมีเซิร์ฟเวอร์หลังบ้านราคาแพง',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'LINE URL Scheme', 'GitHub Pages'],
    tasks: [
      { step: 1, title: 'ออกแบบแคตตาล็อกสินค้า', detail: 'สร้าง Grid สินค้า แสดงรูป ชื่อ ราคา และปุ่มกดเพิ่มลงตะกร้า กรองหมวดหมู่สินค้าได้', deliverable: 'หน้าร้านค้าสวยงามพร้อมระบบกรอง' },
      { step: 2, title: 'ระบบตะกร้าสินค้า (Slide-over Cart)', detail: 'ตะกร้าสินค้าแบบแถบเลื่อนข้าง ปรับเพิ่ม-ลดจำนวน ลบสินค้า และคำนวณยอดรวมค่าจัดส่งอัตโนมัติ', deliverable: 'ตะกร้าสินค้าใช้งานสะดวก' },
      { step: 3, title: 'ฟอร์มชื่อที่อยู่และเชื่อมต่อ LINE', detail: 'ให้ลูกค้ากรอกชื่อ เบอร์โทร และที่อยู่จัดส่ง จากนั้นสร้างข้อความอัตโนมัติแล้วเปิดแอป LINE ผ่าน URL scheme (https://line.me/R/msg/text/)', deliverable: 'ปุ่มสั่งซื้อที่ส่งสรุปออเดอร์เข้า LINE' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Full-stack Developer เชี่ยวชาญการทำเว็บขายของขนาดเล็กสำหรับธุรกิจ SME
ช่วยเขียนเว็บขายของแบบหน้าเดียว (Single Page E-commerce) สำหรับร้านกาแฟ & เบเกอรี่ หรือร้านอุปกรณ์ไอทีชุมชน รวมในไฟล์ index.html เดียว

[ความสามารถของเว็บ]
1. ส่วนแสดงสินค้า:
   - มีหมวดหมู่ให้คลิกเลือกกรอง เช่น กาแฟสด, ชาและนม, ขนมปังโทสต์, อุปกรณ์เสริม
   - การ์ดสินค้าแต่ละชิ้นมีรูปภาพ, ชื่อ, ราคา, รายละเอียดสั้นๆ และปุ่ม "เพิ่มลงตะกร้า"
2. ระบบตะกร้าสินค้า (Shopping Cart Drawer):
   - แถบเลื่อนเปิด-ปิดจากขวา แสดงรายการของที่เลือก
   - สามารถกดเครื่องหมาย + หรือ - เพื่อปรับจำนวน หรือกดถังขยะเพื่อลบ
   - คำนวณราคารวมทั้งหมดแบบเรียลไทม์ และค่าจัดส่ง (ถ้าเกิน 300 บาท ส่งฟรี)
3. ระบบสั่งซื้อส่งตรงเข้า LINE:
   - มีฟอร์มให้กรอก: ชื่อผู้รับ, เบอร์โทรศัพท์, ที่อยู่จัดส่ง หรือหมายเหตุ
   - เมื่อกดปุ่ม "ยืนยันสั่งซื้อผ่าน LINE" ให้สร้างข้อความสรุปออเดอร์อย่างเป็นระเบียบ แล้วเปิด URL Scheme ไปยัง LINE เพื่อให้ลูกค้าส่งข้อความหาร้านได้ทันที
4. ดีไซน์: ใช้ Tailwind CSS โทนสีอบอุ่นมินิมอล รองรับการเปิดบนโทรศัพท์มือถือ 100%`,
    promptEngLong: `Act as a professional frontend web developer. Create a complete, production-ready single-file responsive One-Page E-commerce website tailored for local cafes or small retail shops.
Features:
- Category filter navigation (e.g. Coffee, Bakery, Cold Brew).
- Product cards with image, description, price tag, and reactive 'Add to Cart' button.
- Slide-out Cart Drawer showing selected items, item quantities (+/- controls), subtotal, delivery fee calculation, and grand total.
- Checkout form with Customer Name, Phone, and Delivery Address.
- Direct LINE integration via URL scheme (line.me/R/msg/text/...) that packages the complete purchase order summary into formatted text and opens the chat app.
- Mobile-first responsive layout with Tailwind CSS. Deliver in a single index.html file.`,
    testRunGuide: 'ทดสอบกดเพิ่มสินค้าลงตะกร้า กรอกชื่อ แล้วกดปุ่มสั่งซื้อผ่าน LINE จะเปิดหน้าต่างพร้อมข้อความสรุปออเดอร์ทันที',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการแก้ปัญหาต้นทุนระบบให้กับร้านค้าชุมชน โดยใช้ Client-Side Architecture ร่วมกับ LINE URL Scheme ทำให้ร้านค้าไม่ต้องเสียค่าเช่าเซิร์ฟเวอร์รายเดือนครับ/ค่ะ"',
    tags: ['E-commerce', 'LINE Integration', 'Freelance Ready', 'Mobile First', 'Shopping Cart'],
  },
  {
    id: 'proj-tiktok-bio-affiliate',
    title: 'หน้า Bio Link รวมสินค้า Affiliate สไตล์ Influencer (พร้อมระบบนับคลิก)',
    category: 'freelance-money',
    categoryLabel: 'รับจ็อบหาเงิน & ฟรีแลนซ์',
    difficulty: 'easy',
    difficultyLabel: 'กล้วยๆ หมูๆ',
    durationHours: 3,
    vibe: 'make-money',
    vibeLabel: 'สายรับจ็อบหาเงิน',
    oneLiner: 'หน้าเว็บรวมลิงก์สินค้าป้ายยา TikTok / Shopee / Lazada สไตล์ Linktree สวยสะบัด มีระบบเก็บสถิติจำนวนคนคลิกในตัว',
    whyExciting: 'ใช้ปักหมุดบนหน้าโปรไฟล์ TikTok / Instagram ตัวเอง หาเงินค่าคอมมิชชั่นจากลิงก์ป้ายยาของใช้ไอทีและเกมมิ่งเกียร์ มีสถิติดูว่าคนกดลิงก์ไหนเยอะสุด',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'LocalStorage', 'GitHub Pages'],
    tasks: [
      { step: 1, title: 'สร้างหน้าโปรไฟล์สไตล์ Creator', detail: 'ใส่รูปโปรไฟล์กลม ชื่อช่อง ข้อความแนะนำตัวสั้นๆ และไอคอนโซเชียลมีเดีย', deliverable: 'หัวข้อโปรไฟล์สวยสะดุดตา' },
      { step: 2, title: 'การ์ดลิงก์สินค้าป้ายยา', detail: 'สร้างการ์ดปุ่มกดลิงก์สินค้า แต่ละอันมีไอคอน ป้ายโปรโมชั่น (เช่น โค้ดลด 50%) และเอฟเฟกต์เด้งเวลากด', deliverable: 'ชุดการ์ดลิงก์ที่น่ากด' },
      { step: 3, title: 'แดชบอร์ดนับยอดคลิก (Click Analytics)', detail: 'บันทึกจำนวนคลิกของแต่ละปุ่มลง LocalStorage มีปุ่มลับกดดูสถิติจำนวนคลิกแบบไม่ต้องใช้หลังบ้าน', deliverable: 'ระบบสถิตินับจำนวนคนสนใจสินค้า' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น UI/UX Designer และ Web Developer
ช่วยเขียนหน้าเว็บ Bio Link รวมลิงก์สินค้า Affiliate (สไตล์ Linktree แต่สวยและพรีเมียมกว่า) สำหรับ Creator สายไอทีและเกมเมอร์ รวมในไฟล์ index.html เดียว

[สิ่งที่ต้องการ]
1. ส่วนหัวโปรไฟล์:
   - รูปภาพโปรไฟล์สไตล์การ์ตูนหรือรูปจริง มีวงแหวนแสงนีออนรอบรูป
   - ชื่อช่อง เช่น "@IT_Boy_Review", ป้ายข้อความ "เด็ก ปวช. รีวิวของไอทีราคาประหยัด"
   - ลิงก์ไปช่องทางโซเชียล (TikTok, YouTube, Facebook, Discord)
2. รายการลิงก์สินค้าป้ายยา:
   - ลิสต์ปุ่มการ์ดสินค้า เช่น คีย์บอร์ดแมคคานิคอล, ขาตั้งโน้ตบุ๊ก, สายชาร์จเร็ว, ไมโครโฟนสตรีมเมอร์
   - แต่ละการ์ดมีไอคอน, ชื่อสินค้า, ป้ายราคาโปรโมชั่น และปุ่มกดไปร้านค้า
   - มีแอนิเมชันปุ่มสั่นเบาๆ (Pulse animation) เพื่อดึงดูดสายตา
3. ระบบลับตรวจนับสถิติ (Admin Click Tracker):
   - ทุกครั้งที่ผู้ใช้คลิกปุ่มสินค้า ให้บวกจำนวนคลิกสะสมใน localStorage
   - มีปุ่มหรือไอคอนลับที่มุมขวาล่าง เมื่อกดจะแสดงสรุปจำนวนคลิกของแต่ละสินค้า
4. ดีไซน์: ใช้ Tailwind CSS โทนสี Glassmorphism มืด พื้นหลังเป็น Gradient หรูหราทันสมัย`,
    promptEngLong: `Act as a frontend developer. Build a high-converting, single-file Bio Link & Affiliate Showcase page (superior to Linktree) optimized for mobile TikTok/Instagram bio traffic.
Features:
- Creator profile header with circular avatar, neon ring highlight, channel handle, and social icons.
- Stacked affiliate item link cards with thumbnails, discount taglines, and subtle pulse hover animations.
- Embedded Client-Side Click Analytics: tracks each outbound click count into localStorage and includes a hidden toggleable analytics summary modal.
- Dark glassmorphism aesthetic with Tailwind CSS. Ready to host for free on GitHub Pages.`,
    testRunGuide: 'ทดลองคลิกปุ่มสินค้า แล้วกดปุ่มไอคอนสถิติที่มุมขวาล่าง จะเห็นตัวเลขนับจำนวนคลิกเพิ่มขึ้นทันที',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการนำเทคโนโลยี Web Storage มาใช้เก็บ Event Tracking วิเคราะห์พฤติกรรมผู้บริโภคโดยไม่ต้องพึ่งพาเซิร์ฟเวอร์ภายนอกครับ/ค่ะ"',
    tags: ['Bio Link', 'Affiliate', 'TikTok', 'Analytics', 'Glassmorphism'],
  },
  {
    id: 'proj-soundboard-discord',
    title: 'ซาวด์บอร์ดปั่นเพื่อนในดิสคอร์ด (Meme Soundboard & Audio FX Studio)',
    category: 'games',
    categoryLabel: 'เกมส์ & บันเทิงวัยรุ่น',
    difficulty: 'easy',
    difficultyLabel: 'กล้วยๆ หมูๆ',
    durationHours: 3,
    vibe: 'show-friends',
    vibeLabel: 'สายอวดเพื่อน',
    oneLiner: 'เว็บรวมเสียงมีมและเสียงเอฟเฟกต์กวนๆ กดปุ่มเลข 1-9 บนแป้นพิมพ์เพื่อเปิดเสียงทันที ปั่นเพื่อนตอนคุยไมค์',
    whyExciting: 'เปิดเล่นตอนคุย Discord หรือในห้องเรียนกับเพื่อน เพื่อนต้องถามว่า "มึงทำเว็บนี้เองจริงดิ เจ๋งว่ะ!" ใส่เสียงมีมไทยยอดฮิตได้ตามใจชอบ',
    toolsUsed: ['VS Code', 'Web Audio API', 'Tailwind CSS'],
    tasks: [
      { step: 1, title: 'สร้าง Pad กดเสียง 12 ปุ่ม', detail: 'จัดวาง Grid 3x4 ปุ่มกดขนาดใหญ่ มีสีสันสดใสพร้อมระบุชื่อเสียงและปุ่มคีย์ลัด', deliverable: 'แผงปุ่มกด Soundboard สวยงาม' },
      { step: 2, title: 'สังเคราะห์เสียงด้วย Web Audio API', detail: 'สร้างเสียงสังเคราะห์ 12 รูปแบบ (เสียงช็อต, เสียงเตือน Error วินโดวส์, เสียงโทรศัพท์, เสียงเร่งเครื่อง, เสียงเลเซอร์)', deliverable: 'ปุ่มกดแล้วมีเสียงดังขึ้นทันที' },
      { step: 3, title: 'เชื่อมต่อ Keyboard Shortcut', detail: 'ดักจับ Event แป้นพิมพ์ตัวเลข 1 ถึง 9 และตัวอักษร Q, W, E เพื่อให้กดเล่นเสียงได้ทันใจไม่ต้องเลื่อนเมาส์', deliverable: 'กดแป้นพิมพ์แล้วเสียงดังพร้อมไฟปุ่มกะพริบ' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Web Audio Developer และเกมเมอร์สายฮา
ช่วยสร้างเว็บแอปพลิเคชัน "Meme Soundboard & Sound Effects Studio สำหรับปั่นเพื่อนในห้องเรียนและ Discord" รวมในไฟล์เดียว index.html

[ฟังก์ชันที่ต้องมี]
1. หน้าจอ Sound Pad:
   - มีปุ่มเสียงอย่างน้อย 12 ปุ่ม จัดเรียงเป็นตาราง Grid 3x4 สไตล์ Launchpad ดีเจ
   - แต่ละปุ่มมีชื่อเสียงตลกๆ เช่น "เสียง Error จอฟ้า", "เสียงเลเซอร์ยิงแมลงสาบ", "เสียงกระดิ่งตอบถูก", "เสียงหวูดรถไฟ", "เสียงบัสเบสหนัก"
   - แต่ละปุ่มระบุปุ่มลัดบนคีย์บอร์ดชัดเจน เช่น [1], [2], [3] ... [9], [Q], [W], [E]
2. แหล่งกำเนิดเสียง:
   - ใช้ Web Audio API เขียนโปรแกรมสังเคราะห์คลื่นเสียง (OscillatorNode, GainNode, FilterNode) เป็นเสียงเอฟเฟกต์ต่างๆ ในตัว โดยไม่ต้องโหลดไฟล์เสียงภายนอก
3. การตอบสนองแป้นพิมพ์และแอนิเมชัน:
   - เมื่อกดปุ่มบนคีย์บอร์ด หรือคลิกเมาส์ หรือแตะหน้าจอมือถือ ปุ่มจะยุบตัวและมีแสงนีออนวาบขึ้นมา (Visual Feedback)
4. ฟังก์ชันเสริม:
   - แถบปรับระดับความดัง (Master Volume Slider)
   - แถบปรับระดับเสียงสูงต่ำ (Pitch Slider) เพื่อดัดเสียงให้แหลมหรือทุ้มกวนๆ
5. ดีไซน์: โทนสี Cyberpunk Dark Neon สไตล์อุปกรณ์ดนตรีของดีเจ`,
    promptEngLong: `Act as a creative web audio engineer. Create a single-file interactive Meme & Soundboard application for teens, fully operable with keyboard shortcuts and touch.
Features:
- 12 distinct sound trigger pads in a responsive 3x4 launchpad grid layout.
- Procedural audio synthesis using pure HTML5 Web Audio API (oscillators, noise buffers, gain envelopes) with zero external media files.
- Keyboard bindings (keys 1-9, Q, W, E) with instant visual ripple glow feedback.
- Master Volume and Global Pitch shift sliders for on-the-fly voice/sound deformation.
- Cyberpunk dark neon UI with Tailwind CSS.`,
    testRunGuide: 'เปิดในเบราว์เซอร์ ลองกดเลข 1 บนแป้นพิมพ์ จะได้ยินเสียงเอฟเฟกต์ดังทันทีพร้อมปุ่มกะพริบแสง',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้เป็นการนำทฤษฎีการสังเคราะห์คลื่นความถี่เสียงดิจิทัล (Digital Audio Synthesis) เช่น Sine wave, Square wave, Sawtooth wave มาเขียนเป็นโค้ดจริงครับ/ค่ะ"',
    tags: ['Web Audio API', 'Soundboard', 'Keyboard Events', 'Cyberpunk', 'Fun'],
  },
  {
    id: 'proj-speed-typing-test',
    title: 'โปรแกรมฝึกพิมพ์ดีดความเร็วสูง สายไอที (Speed Typing Test with Meme Reactions)',
    category: 'games',
    categoryLabel: 'เกมส์ & บันเทิงวัยรุ่น',
    difficulty: 'easy',
    difficultyLabel: 'กล้วยๆ หมูๆ',
    durationHours: 4,
    vibe: 'teacher-wow',
    vibeLabel: 'อาจารย์ร้องว้าว',
    oneLiner: 'โปรแกรมทดสอบพิมพ์ดีดจับเวลา มีคำศัพท์ไอทีและโค้ดโปรแกรม คำนวณคำต่อนาที (WPM) และความแม่นยำ พร้อมบันทึกสถิติ',
    whyExciting: 'อาจารย์วิชาพิมพ์ดีดเห็นแล้วต้องกราบ! เอาไปใช้แข่งพิมพ์เร็วกับเพื่อนในแผนกคอมฯ โชว์นิ้วพริ้วระดับพระกาฬ มีระบบวิเคราะห์ว่าพิมพ์ตัวอักษรไหนผิดบ่อยสุด',
    toolsUsed: ['VS Code', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    tasks: [
      { step: 1, title: 'สร้างระบบสุ่มข้อความ', detail: 'สร้างคลังคำศัพท์ภาษาไทยและคำศัพท์ไอทีภาษาอังกฤษ ให้ผู้ใช้เลือกโหมดได้', deliverable: 'ระบบแสดงข้อความพร้อมไฮไลต์ตัวอักษรปัจจุบัน' },
      { step: 2, title: 'จับเวลาและคำนวณ WPM / Accuracy', detail: 'จับเวลานับถอยหลัง 30/60 วินาที คำนวณ Words Per Minute และ Accuracy % แบบเรียลไทม์', deliverable: 'ตัวเลขสถิติขยับตามการพิมพ์จริง' },
      { step: 3, title: 'การ์ดสรุปผลงานระดับเทพ', detail: 'แสดงการ์ดเกียรติบัตรจำลอง สรุปความเร็ว พร้อมคำชมสไตล์สายเกมเมอร์ และปุ่มแชร์รูปภาพ', deliverable: 'การ์ดผลการทดสอบที่เอาไปอวดได้' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Full-stack Developer และอาจารย์สอนวิชาพิมพ์ดีดคอมพิวเตอร์
ช่วยเขียนเว็บแอปพลิเคชัน "โปรแกรมทดสอบและฝึกพิมพ์ดีดความเร็วสูง (IT Speed Typing Benchmark)" รวมในไฟล์เดียว index.html

[ความต้องการ]
1. โหมดการฝึก:
   - โหมดคำศัพท์ไอทีภาษาอังกฤษ (เช่น javascript, database, network, hardware, algorithm)
   - โหมดประโยคภาษาไทย สำหรับเด็ก ปวช. คอมพิวเตอร์
   - ตัวเลือกจับเวลา: 30 วินาที, 60 วินาที
2. หน้าจอพิมพ์:
   - แสดงข้อความต้นฉบับ ตัวอักษรที่พิมพ์ถูกจะเปลี่ยนเป็นสีเขียว ตัวที่พิมพ์ผิดเป็นสีแดง พร้อมขีดเส้นใต้
   - มีเคอร์เซอร์กะพริบตามตำแหน่งที่กำลังพิมพ์
   - คำนวณ WPM (คำต่อนาที), ความแม่นยำ (Accuracy %), และจำนวนตัวอักษรที่พิมพ์ถูกแบบสดๆ
3. หน้าสรุปผลคะแนน:
   - แสดงกราฟิกการ์ดประกาศนียบัตร "มือพิมพ์เทวดา" พร้อมระบุระดับฝีมือ (เช่น ระดับฝึกหัด, ระดับช่างพิมพ์, ระดับเซียนโปรแกรมเมอร์)
   - บันทึกคะแนนสถิติสูงสุดลง LocalStorage
4. ดีไซน์: ใช้ Tailwind CSS สไตล์ Monkeytype สุดมินิมอล โทนสีมืดสบายตา ถนอมสายตาเวลานั่งพิมพ์นานๆ`,
    promptEngLong: `Act as a senior frontend engineer. Build a standalone, single-file speed typing test web app inspired by Monkeytype, customized for vocational IT students.
Features:
- Dual language word banks: IT Technical English terms and Thai vocabulary.
- Live character-by-character color-coded validation (correct = green, error = red) with smooth typing cursor.
- Real-time computation of WPM (Words Per Minute), CPM, and Accuracy percentage over 30s/60s countdown intervals.
- Post-test achievement certificate card with rank badges and LocalStorage score persistence.
- Sleek minimalist dark theme using Tailwind CSS. Deliver in a single index.html file.`,
    testRunGuide: 'เปิดในเบราว์เซอร์ เริ่มพิมพ์ตัวอักษรแรก นาฬิกาจะเริ่มนับถอยหลังทันที และคำนวณ WPM แบบสดๆ',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ส่งเสริมทักษะพื้นฐานวิชาการใช้แป้นพิมพ์สัมผัส และนำทฤษฎี Keycode Event Listener มาเขียนตรวจสอบความถูกต้องแบบเรียลไทม์ครับ/ค่ะ"',
    tags: ['Typing Test', 'Monkeytype clone', 'Keyboard Events', 'WPM', 'Education'],
  },
  {
    id: 'proj-ip-network-pinger',
    title: 'เครื่องมือจำลองตรวจสอบเครือข่าย & สแกนไอพี (Network IP Scanner & Pinger Simulator)',
    category: 'it-tools',
    categoryLabel: 'เครื่องมือช่างคอม & แผนกไอที',
    difficulty: 'medium',
    difficultyLabel: 'พอดีมือ',
    durationHours: 5,
    vibe: 'it-support',
    vibeLabel: 'สายไอทีแก้ปัญหา',
    oneLiner: 'หน้าจอจำลองตรวจสอบหมายเลข IP ในวงแลน เช็คสถานะเซิร์ฟเวอร์ คำนวณ Subnet Mask และแสดงแผนผังระบบเครือข่าย',
    whyExciting: 'ดูเท่เหมือนแฮกเกอร์ในหนัง! มีหน้าจอ Terminal ดำเขียววิ่งตรวจสอบเครื่องคอมในแผนก เอาไปอวดอาจารย์วิชาเครือข่ายคอมพิวเตอร์ได้เกรด 4 แน่นอน',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'JavaScript', 'Google AI Studio'],
    tasks: [
      { step: 1, title: 'หน้าจอคอนโซลจำลองการ Ping', detail: 'สร้าง UI สไตล์ Terminal พิมพ์คำสั่ง ping หรือกดปุ่ม เพื่อดูเวลาตอบสนอง (Latency ms)', deliverable: 'คอนโซลแสดงผลลัพธ์แบบเรียลไทม์' },
      { step: 2, title: 'ตารางสแกน IP วง 192.168.1.0/24', detail: 'สร้างระบบจำลองสแกนเครื่องคอมพิวเตอร์ ปริ้นเตอร์ เราเตอร์ ในวงแลน พร้อมสถานะ ออนไลน์/ออฟไลน์', deliverable: 'ตารางรายชื่ออุปกรณ์ในระบบเครือข่าย' },
      { step: 3, title: 'เครื่องมือคำนวณ Subnet Mask / CIDR', detail: 'ใส่ IP และ Slash (เช่น /24, /26) คำนวณหา Network ID, Broadcast ID, และจำนวน Host ที่ใช้งานได้', deliverable: 'ระบบคำนวณซับเน็ตอัตโนมัติ' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Network Engineer และ Web Developer
ช่วยเขียนเว็บแอปพลิเคชัน "เครื่องมือจำลองการตรวจสอบระบบเครือข่าย & คำนวณ Subnet (Network Tools & IP Scanner Suite)" สำหรับนักศึกษา ปวช. สาขาคอมพิวเตอร์และช่างเครือข่าย รวมในไฟล์เดียว index.html

[ฟีเจอร์หลัก]
1. แท็บที่ 1: คอนโซลจำลอง Ping & Traceroute
   - มีช่องให้ใส่ Domain หรือ IP (เช่น google.com, 192.168.1.1)
   - เมื่อกด Ping ให้แสดงข้อความวิ่งในหน้าจอดำเขียวสไตล์ Terminal จำลอง Packet Loss, Latency (ms), TTL
2. แท็บที่ 2: จำลองสแกนอุปกรณ์ในวงแลน (Local LAN Explorer)
   - กดปุ่ม "เริ่มสแกนวง 192.168.1.0/24"
   - แสดงตารางจำลองอุปกรณ์ที่พบ เช่น Router Gateway, Web Server, Network Printer, Wi-Fi Access Point, PC เครื่องช่าง
   - แสดง MAC Address จำลอง, หมายเลขพอร์ตที่เปิด (Port 80, 443, 22), และสถานะ Active/Offline
3. แท็บที่ 3: เครื่องคำนวณ Subnet Calculator
   - ให้กรอก IP Address และเลือก CIDR (/24, /25, /26, /27, /28)
   - คำนวณผลลัพธ์: Subnet Mask (255.255.255.x), Network Address, Broadcast Address, และจำนวน Usable Hosts
4. ดีไซน์: ใช้ Tailwind CSS โทนสี Dark Terminal ตัวอักษรสีเขียว/ฟ้าสะท้อนแสง มีความน่าเชื่อถือระดับมืออาชีพ`,
    promptEngLong: `Act as a network engineer and instructor. Create a single-file network technician simulation suite for vocational students.
Includes:
- Simulated Ping and Traceroute terminal display with realistic packet logs and latency variations.
- Simulated LAN Device Scanner discovering active IPs, hostnames, open ports (80, 443, 22), and mock MAC addresses.
- Full IPv4 Subnet Calculator: input IP and prefix (/16 to /30), calculating Subnet Mask, Network ID, Broadcast, and usable host range.
- Tech dark-mode UI with monospace font and Tailwind CSS. Single-file index.html.`,
    testRunGuide: 'เปิดในเบราว์เซอร์ คลิกแท็บ Subnet Calculator ใส่ 192.168.1.50/26 แล้วกดคำนวณ จะได้ผลลัพธ์ทันที',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ช่วยให้นักเรียนเข้าใจหลักการคำนวณเลขฐานสองของ Subnet Mask และเข้าใจบทบาทของพอร์ตบริการต่างๆ ในวิชาเครือข่ายคอมพิวเตอร์ครับ/ค่ะ"',
    tags: ['Networking', 'Subnet Calculator', 'Ping Simulator', 'Terminal', 'IT Tools'],
  },
  {
    id: 'proj-netflix-clone-anime',
    title: 'โคลนหน้าเว็บสตรีมมิ่ง Netflix สไตล์อนิเมะ & คลังหนัง ปวช. (Streaming Web Clone)',
    category: 'web-clones',
    categoryLabel: 'ลอกเลียนแบบเว็บดัง & Social',
    difficulty: 'hard',
    difficultyLabel: 'ท้าทายระดับโปร',
    durationHours: 8,
    vibe: 'show-friends',
    vibeLabel: 'สายอวดเพื่อน',
    oneLiner: 'แกะโครงสร้าง UI เว็บสตรีมมิ่งระดับโลก มีแถบ Hero Banner เล่นวิดีโอตัวอย่าง แถบเลื่อนภาพยนตร์แนวนอน และหน้าต่างป๊อปอัพดูรายละเอียด',
    whyExciting: 'เปิดให้เพื่อนดู เพื่อนต้องอ้าปากค้าง! ทำเว็บเหมือน Netflix เป๊ะๆ แต่ใส่หนังหรืออนิเมะเรื่องโปรดของตัวเองเข้าไปได้ มีปุ่มกดเล่นและบันทึกรายการโปรด',
    toolsUsed: ['VS Code', 'Tailwind CSS', 'JavaScript', 'Google AI Studio'],
    tasks: [
      { step: 1, title: 'สร้าง Hero Banner สุดอลังการ', detail: 'แบนเนอร์ภาพยนตร์ขนาดใหญ่พร้อมปุ่ม Play และ More Info มีเอฟเฟกต์ไล่เฉดสีดำด้านล่าง', deliverable: 'แบนเนอร์หน้าแรกระดับมืออาชีพ' },
      { step: 2, title: 'แถบเลื่อนภาพยนตร์แนวนอน (Horizontal Scroll Rows)', detail: 'สร้างแถวหมวดหมู่ (อนิเมะยอดฮิต, ซีรีส์แนะนำ, ภาพยนตร์ไซไฟ) ที่เลื่อนซ้าย-ขวาได้อย่างลื่นไหล', deliverable: 'แถวภาพยนตร์เลื่อนได้สวยงาม' },
      { step: 3, title: 'โมดอลรายละเอียดภาพยนตร์ (Modal Detail View)', detail: 'เมื่อคลิกที่เรื่องไหน จะมีหน้าต่างลอยขึ้นมาแสดงเรื่องย่อ เรตติ้ง นักแสดง และตัวอย่างคลิป', deliverable: 'ป๊อปอัพรายละเอียดภาพยนตร์สมบูรณ์' },
    ],
    promptThaiLong: `ทำหน้าที่เป็น Lead Frontend Engineer ผู้เชี่ยวชาญการสร้าง Web Streaming Interface
ช่วยเขียนโค้ดโคลนหน้าเว็บสตรีมมิ่งระดับโลก (Netflix / AnimeFlix Clone) สำหรับนักศึกษา ปวช. คอมพิวเตอร์ รวมในไฟล์เดียว index.html

[องค์ประกอบที่ต้องมี]
1. แถบ Navigation ด้านบน:
   - โลโก้สีแดงสด, เมนูหน้าหลัก, ซีรีส์, อนิเมะ, รายการของฉัน, ช่องค้นหา และไอคอนโปรไฟล์
   - แถบเมนูโปร่งใสและจะเปลี่ยนเป็นพื้นหลังสีดำทึบเมื่อเลื่อนหน้าจอลง (Sticky Navbar with scroll effect)
2. แบนเนอร์ภาพยนตร์หลัก (Hero Billboard):
   - ภาพโปสเตอร์ขนาดใหญ่เต็มจอ มีชื่อเรื่อง เรื่องย่อสั้นๆ ปุ่ม "เล่น (Play)" สีขาว และปุ่ม "ข้อมูลเพิ่มเติม" สีเทา
   - มีเฉดสีดำไล่ระดับ (Gradient Fade) กลืนไปกับเนื้อหาด้านล่าง
3. แถวภาพยนตร์แนวนอน (Carousel Rows):
   - อย่างน้อย 3 หมวดหมู่ เช่น "อนิเมะยอดฮิตตลอดกาล", "ผลงานเด็ก ปวช. คอมพิวเตอร์", "ภาพยนตร์ไซไฟแนวไอที"
   - แต่ละหมวดหมู่มีโปสเตอร์หนังเลื่อนแนวนอนได้ และเมื่อเอาเมาส์ชี้ (Hover) โปสเตอร์จะขยายขนาดขึ้นอย่างนุ่มนวล
4. หน้าต่างป๊อปอัพดูรายละเอียด (Preview Modal):
   - เมื่อคลิกโปสเตอร์หนัง จะแสดง Modal สวยงาม มีคะแนนเรตติ้ง (เช่น 98% Match), ปีที่ฉาย, ความยาว, เรื่องย่อเต็ม
5. ดีไซน์: โทนสีดำสนิท (#141414) และสีแดง Accent (#E50914) ตามแบบฉบับเน็ตฟลิกซ์แท้ๆ`,
    promptEngLong: `Act as a lead frontend architect. Build a high-fidelity single-file streaming service web clone (inspired by Netflix & Disney+) for portfolio demonstration.
Key Highlights:
- Dynamic sticky top bar that transitions from transparent to solid black on scroll.
- Cinematic Hero billboard with backdrop preview, typography overlay, Play CTA, and gradient vignette blending.
- Multiple horizontally scrollable carousel rows with smooth hover zoom animations.
- Interactive movie preview modal with synopsis, match score, badges, and simulated video player container.
- Authentic dark cinematic styling using Tailwind CSS. Deliver in a single index.html.`,
    testRunGuide: 'เปิดในเบราว์เซอร์ ลองเลื่อนเมาส์ชี้ที่รูปโปสเตอร์เพื่อดูแอนิเมชันขยายขนาด และคลิกเพื่อดูหน้าต่างรายละเอียด',
    teacherBonusTip: 'บอกอาจารย์นิเทศก์ว่า: "โปรเจกต์นี้ฝึกการออกแบบ Responsive Media Queries, การทำ CSS Transform Hover State และการบริหารจัดการ Component Modal ในสถาปัตยกรรม Single Page Application ครับ/ค่ะ"',
    tags: ['Netflix Clone', 'UI/UX', 'Carousel', 'Modal', 'Advanced Frontend'],
  },
];
