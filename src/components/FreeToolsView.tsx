import React, { useState } from 'react';
import { freeToolsDirectory, lowSpecSurvivalGuide } from '../data/freeTools.ts';
import { ExternalLink, Cpu, ShieldCheck, Zap, Laptop, Layers } from 'lucide-react';

export const FreeToolsView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredTools = freeToolsDirectory.filter(t => {
    if (selectedCategory === 'all') return true;
    return t.category === selectedCategory;
  });

  return (
    <div className="space-y-10">
      {/* Intro Header */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs text-sky-700 font-semibold">100% FREE RESOURCE DIRECTORY</div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              คลังเครื่องมือฟรี 0 บาท สำหรับนักศึกษา ปวช. คอมพิวเตอร์
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              ผู้จัดการแผนกไอทีคัดสรรเครื่องมือฟรีระดับโลกมาให้น้องๆ ครบทุกหมวดหมู่! <strong>ไม่ต้องเสียเงินซื้อ AI รายเดือน ไม่ต้องตัดบัตรเครดิต</strong> และไม่จำเป็นต้องมีคอมพิวเตอร์ราคาแพง สเปกบ้านๆ แรม 4GB ก็สามารถใช้ AI ประมวลผลบนคลาวด์และสร้างผลงานขั้นเทพได้เหมือนโปรแกรมเมอร์บริษัทใหญ่
            </p>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm max-h-52">
            <img
              src="/src/assets/images/free_tools_ecosystem_1791712027853.jpg"
              alt="Free Developer & AI Ecosystem"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white font-semibold'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          ทั้งหมด ({freeToolsDirectory.length})
        </button>
        <button
          onClick={() => setSelectedCategory('free-llm')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
            selectedCategory === 'free-llm'
              ? 'bg-slate-900 text-white font-semibold'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          🧠 โมเดล AI & ฟรี API
        </button>
        <button
          onClick={() => setSelectedCategory('ide-agent')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
            selectedCategory === 'ide-agent'
              ? 'bg-slate-900 text-white font-semibold'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          💻 โปรแกรมเขียนโค้ด & Agent
        </button>
        <button
          onClick={() => setSelectedCategory('free-host')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
            selectedCategory === 'free-host'
              ? 'bg-slate-900 text-white font-semibold'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          🌐 โฮสต์เว็บฟรีตลอดชีพ
        </button>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredTools.map(tool => (
          <div
            key={tool.id}
            className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-1">
                    {tool.categoryLabel}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {tool.name}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full shrink-0">
                  {tool.badge}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {tool.description}
              </p>

              {/* Free tier box */}
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>โควตาฟรีที่ได้รับ:</span>
                </div>
                <p className="text-slate-600">{tool.freeTierLimit}</p>
              </div>

              {/* Low spec trick */}
              <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-100 space-y-1 text-xs text-amber-950">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>ทริคสำหรับคอมบ้านสเปกต่ำ:</span>
                </div>
                <p className="text-amber-900 leading-relaxed">{tool.lowSpecTrick}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 line-clamp-1 max-w-[240px]">
                {tool.recommendedFor}
              </span>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors"
              >
                <span>เปิดเว็บเครื่องมือ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* SECTION 2: Low-Spec Survival Guide */}
      <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2.5">
          <Laptop className="w-6 h-6 text-sky-400" />
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              สูตรลับเอาชีวิตรอด: คอมพิวเตอร์ที่บ้านสเปกไม่แรง (RAM 4GB - 8GB) ก็รัน AI ได้สบาย!
            </h3>
            <p className="text-xs text-slate-400">
              ข้อแนะนำจากผู้จัดการแผนกไอทีสำหรับน้องๆ ที่ไม่มีคอมพิวเตอร์สเปกเกมมิ่ง
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lowSpecSurvivalGuide.map(guide => (
            <div
              key={guide.ruleNumber}
              className="bg-slate-800/80 border border-slate-700/80 p-4 rounded-xl space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-sky-400 font-mono">
                <span>กฎข้อที่ 0{guide.ruleNumber}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{guide.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {guide.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
