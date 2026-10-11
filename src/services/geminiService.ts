import { GoogleGenAI } from '@google/genai';

export interface MentorMessage {
  id: string;
  sender: 'student' | 'mentor';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  isAiGenerated?: boolean;
}

// Fallback intelligent responses when API key is not configured
const defaultMentorResponses: { [keyword: string]: string } = {
  'บั๊ก': `พี่เข้าใจเลยน้อง! เวลาเขียนโค้ดแล้วติดบั๊ก ให้ทำตาม 3 สเต็ปนี้ก่อนเลย:
1. เปิด Developer Tools ใน Chrome (กด F12 หรือคลิกขวา > Inspect) แล้วดูที่แท็บ **Console** ว่ามีตัวหนังสือสีแดงแจ้งอะไรไหม
2. บั๊กยอดฮิตของเด็ก ปวช. คือ "ลืมปิดวงเล็บ", "พิมพ์ชื่อฟังก์ชันผิดตัวพิมพ์เล็ก-ใหญ่", หรือ "ลืมใส่เครื่องหมายคำพูดรอบตัวหนังสือ"
3. ก๊อบปี้ข้อความสีแดงใน Console ทั้งหมด แล้วพิมพ์สั่ง AI ว่า: "โค้ดของฉันเกิดข้อผิดพลาดนี้ ช่วยอธิบายสาเหตุและแก้ให้ตรงจุดหน่อย" แล้วน้องจะแก้ได้ใน 3 นาทีครับ!`,
  'งาน': `ถ้ากังวลเรื่องหางานหลังจบ ปวช. 3 พี่ขอบอกเลยว่าไม่ต้องกลัวครับ!
ตอนนี้น้องมีทักษะที่เด็ก ปวช. คนอื่นไม่มี คือการ "ใช้ AI เป็นเครื่องมือช่วยทำงาน" ถ้าในเรซูเม่น้องมีผลงานจริง 3-5 ชิ้น เช่น เว็บร้านค้า, ระบบแจ้งซ่อมไอที, และหน้า Bio Link พร้อมทักษะ Prompt Engineering บริษัทไอทีแย่งตัวแน่นอนครับ เงินเดือนเริ่มต้น 15,000 - 20,000 บาท หรือจะรับฟรีแลนซ์เสริมวันเสาร์-อาทิตย์เพื่อเก็บเงินเรียน ปวส. ก็ทำได้สบายมากครับ!`,
  'อาจารย์': `ตอนอาจารย์นิเทศก์มาเยี่ยม อย่าเกร็งนะน้อง!
อาจารย์เขาแค่อยากเห็นว่าเราได้ลงมือทำจริง และสถานประกอบการดูแลเราดีไหม ให้เปิดผลงานในคอมให้อาจารย์ดู แล้วพูดว่า:
"พี่ผู้จัดการแผนกไอทีสอนให้ใช้ AI ในการทำงานแบบมืออาชีพครับอาจารย์ ทำให้หนูพัฒนาเว็บและแก้ปัญหาคอมพิวเตอร์ได้เร็วกว่าเดิมมากครับ"
รับรองว่าอาจารย์ยิ้มแก้มปริและให้เกรด 4 แน่นอนครับ!`,
};

export async function askAiMentor(userQuestion: string, conversationHistory: { role: string; content: string }[] = []): Promise<string> {
  const apiKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || (import.meta as any).env?.VITE_GEMINI_API_KEY;

  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `คุณคือ "พี่ AI (โมเดล Gemini 2.5 Flash โดย Google AI)" ทำงานร่วมกับ "ผู้จัดการแผนกไอที (IT Manager)" เพื่อคอยเป็นพี่เลี้ยงและที่ปรึกษาให้กับนักศึกษาฝึกงานระดับ ปวช. (ประกาศนียบัตรวิชาชีพ) สาขาคอมพิวเตอร์ (อายุต่ำกว่า 18 ปี)
บุคลิกของคุณ: เป็นกันเอง สุภาพ ให้กำลังใจ อธิบายเรื่องไอทีและโปรแกรมมิ่งยากๆ ให้กลายเป็นเรื่องง่ายและสนุก ไม่ใช้ศัพท์เทคนิคกำกวมที่เด็กไม่เข้าใจ เน้นแนวทางปฏิบัติที่ใช้ได้จริงฟรี 0 บาท
หากนักศึกษาถามเกี่ยวกับบั๊ก โค้ด หางาน หรือส่งงานอาจารย์ ให้แนะนำวิธีคิดและโค้ดตัวอย่างสั้นๆ ที่เข้าใจง่ายเสมอ

คำถามของนักศึกษา:
"${userQuestion}"`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      if (response.text) {
        return response.text;
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local mentor engine:', err);
    }
  }

  // Resilient fallback logic
  const lower = userQuestion.toLowerCase();
  for (const [key, resp] of Object.entries(defaultMentorResponses)) {
    if (lower.includes(key)) {
      return resp;
    }
  }

  return `สวัสดีครับน้อง! พี่ AI ยินดีช่วยเหลือเสมอครับ ในฐานะพี่เลี้ยงร่วมกับพี่ผู้จัดการแผนกไอที สิ่งที่น้องถามเกี่ยวกับ "${userQuestion.slice(0, 40)}..." พี่แนะนำแนวทางดังนี้ครับ:

1. **ลำดับการลงมือทำ**: เริ่มต้นจากการวางโครงสร้างในไฟล์ index.html ก่อน แล้วใช้ Tailwind CSS ผ่าน CDN เพื่อความสะดวก ไม่ต้องติดตั้งโปรแกรมให้หนักเครื่อง
2. **การสั่ง AI อย่างมืออาชีพ**: พยายามระบุว่า "ต้องการอะไร ในรูปแบบไหน และมีเงื่อนไขอย่างไร" ยิ่งสั่งละเอียดยาวๆ ผลลัพธ์จะยิ่งแม่นยำ
3. **การทดสอบ**: เมื่อได้โค้ดมาแล้ว ให้นำไปเปิดดูบน Google Chrome ทันที ถ้ามีอะไรติดขัดหรือมี Error แจ้งเตือน ให้คัดลอกข้อความนั้นมาปรึกษาพี่ AI ได้ตลอดเวลาเลยนะครับ พี่พร้อมช่วยดันให้น้องเก่งและผ่านการฝึกงานอย่างภาคภูมิใจครับ!`;
}

export async function upgradePromptToMega(shortIdea: string): Promise<{ thaiLong: string; engLong: string }> {
  const cleanIdea = shortIdea.trim() || 'ทำเว็บหรือเกมส์สำหรับเด็กคอม';

  const thaiLong = `ทำหน้าที่เป็น Senior Full-stack Developer และที่ปรึกษาแผนกไอที
ช่วยพัฒนาเว็บแอปพลิเคชัน "${cleanIdea}" รวมในไฟล์เดียว index.html (Single-File Architecture)

[ข้อกำหนดหลัก]
1. ออกแบบหน้าจอด้วย Tailwind CSS (CDN) ให้สวยงาม ทันสมัย สไตล์มินิมอล/ดาร์กโหมด รองรับหน้าจอมือถือและเดสก์ท็อป 100%
2. ระบบการทำงาน: มีฟังก์ชันรองรับ "${cleanIdea}" อย่างสมบูรณ์แบบ มีปุ่มควบคุมที่ชัดเจน และมีการตอบสนองต่อการคลิกหรือการป้อนข้อมูล
3. การจัดการข้อมูล: บันทึกข้อมูลหรือสถานะลงในเบราว์เซอร์ LocalStorage เพื่อไม่ให้ข้อมูลสูญหายเมื่อรีเฟรชหน้าจอ
4. ความสะดวกสำหรับนักศึกษา ปวช.: ไม่ใช้ไลบรารีที่ต้องติดตั้ง npm, โค้ดทั้งหมดรวมอยู่ในไฟล์เดียวทั้ง HTML, CSS, JavaScript, มีคอมเมนต์ภาษาไทยอธิบายฟังก์ชันสำคัญ

ขอโค้ดตัวเต็ม 100% ไม่มี Placeholder ใดๆ พร้อมนำไปเซฟเป็น index.html แล้วเปิดดูได้ทันที`;

  const engLong = `Act as a senior software architect and educator. Create a complete, production-ready, single-file HTML5 web application: "${cleanIdea}".
Specifications:
- Tech Stack: Pure HTML5 + Tailwind CSS CDN + Vanilla JavaScript inside a single index.html.
- Mobile-first responsive UI with polished visual hierarchy and tactile feedback.
- Client-side persistence using localStorage for maintaining app state across reloads.
- Beginner-friendly modular structure with informative inline documentation for junior vocational developers.
- Provide 100% complete, unclipped, ready-to-run source code with zero external build requirements.`;

  return { thaiLong, engLong };
}
