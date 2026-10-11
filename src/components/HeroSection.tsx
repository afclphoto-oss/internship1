import React from 'react';
import { Sparkles, Terminal, Award, Laptop } from 'lucide-react';

interface HeroSectionProps {
  onGoToProjects: () => void;
  onGoToGenerator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGoToProjects,
  onGoToGenerator,
}) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/src/assets/images/it_mentor_hero_1791711993958.jpg"
          alt="IT Manager Lab Workspace"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-5">
            {/* Unboxed clean metadata kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-400">
              <span>หลักสูตรฝึกงาน 4 เดือน</span>
              <span aria-hidden="true">·</span>
              <span>ปวช. สาขาคอมพิวเตอร์</span>
              <span aria-hidden="true">·</span>
              <span>ใช้เครื่องมือ AI ฟรี 100%</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              เรียนรู้ ฝึกทำ และสร้างผลงานจริงด้วย AI <br className="hidden sm:inline" />
              <span className="text-sky-400">จบ ปวช. 3 มีงานทำทันที ไม่ตกงานแน่นอน!</span>
            </h1>

            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/80 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>สารจากผู้จัดการแผนกไอที (IT Manager) ถึงน้องๆ ฝึกงาน:</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                "ในฐานะผู้จัดการฝ่ายไอที พี่จะไม่ให้น้องมานั่งชงกาแฟ ถ่ายเอกสาร หรือทำเรื่องน่าเบื่อครับ! 4 เดือนนี้ พี่จะสอนให้น้องใช้พลังของ AI ให้เป็นเครื่องมือคู่กาย สั่งงานสร้างเว็บ สร้างเกมส์ 2D เล่นกับเพื่อน แกะระบบแอปดัง และแก้ปัญหาคอมพิวเตอร์จริงในบริษัท แม้คอมที่บ้านจะสเปกไม่แรงหรือไม่มีเงินซื้อ AI ก็ทำได้ฟรี 0 บาททั้งหมด จบไปอวดอาจารย์ได้เกรด 4 และพร้อมรับงานหาเงินจริงแน่นอน!"
              </p>
              <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>พี่เลี้ยงร่วม: ผู้จัดการแผนกไอที & พี่ AI (Gemini 2.5 Flash โดย Google AI)</span>
                <span className="text-emerald-400 font-mono">Status: Ready to Code</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onGoToProjects}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                ดูคลังโปรเจกต์แนะนำ 50+ งาน
              </button>
              <button
                onClick={onGoToGenerator}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>สุ่มโจทย์ท้าทาย (10,000+ แบบ)</span>
              </button>
            </div>
          </div>

          {/* Quick Spotlight Card */}
          <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700 rounded-xl p-5 space-y-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>สิ่งการันตีเมื่อฝึกงานครบ 4 เดือน</span>
            </h2>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>มีผลงาน Web & Game สำเร็จรูปออนไลฟ์จริงบน GitHub Pages ส่งลิงก์อวดเพื่อนได้ทันที</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>เขียน Prompt ละเอียดยาวกว่า 200 คำ ทั้งภาษาไทยและอังกฤษ คุม AI ได้ดั่งใจ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>ซ่อมบำรุงและวินิจฉัยคอมพิวเตอร์ อาการจอฟ้า Beep Code ด้วยเครื่องมือ AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>ตอบคำถามอาจารย์นิเทศก์ได้อย่างฉะฉาน พร้อม Rubric ผลงานได้เกรด 4 แน่นอน</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">✓</span>
                <span>รับจ็อบทำเว็บให้ร้านค้าแถวบ้าน 1,500-3,500 บาท มีเงินเก็บส่งตัวเองเรียนต่อ ปวส.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4-Column KPI strip below hero split */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800 text-center sm:text-left">
          <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-400">ระยะเวลาหลักสูตร</p>
            <p className="text-lg font-bold text-white font-mono tabular-nums">4 เดือนเต็ม (16 สัปดาห์)</p>
          </div>
          <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-400">คลังโปรเจกต์สำเร็จ & สุ่ม</p>
            <p className="text-lg font-bold text-sky-400 font-mono tabular-nums">10,000+ รูปแบบ</p>
          </div>
          <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-400">ต้นทุนค่าเครื่องมือ AI</p>
            <p className="text-lg font-bold text-emerald-400 font-mono tabular-nums">0 บาท (ฟรีตลอดชีพ)</p>
          </div>
          <div className="p-3 bg-slate-800/40 rounded-lg border border-slate-800">
            <p className="text-xs text-slate-400">การรับรองผลงาน</p>
            <p className="text-lg font-bold text-amber-400 font-mono tabular-nums">พร้อมส่งอาจารย์ 100%</p>
          </div>
        </div>
      </div>
    </section>
  );
};
