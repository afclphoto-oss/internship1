import React, { useState } from 'react';
import { internshipCurriculum } from '../data/internshipPlan.ts';
import { CheckCircle2, ChevronDown, ChevronUp, Copy, Check, Calendar, ArrowRight } from 'lucide-react';

interface CurriculumViewProps {
  onSelectProjectTab: () => void;
}

export const CurriculumView: React.FC<CurriculumViewProps> = ({ onSelectProjectTab }) => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);
  const [copiedPromptWeek, setCopiedPromptWeek] = useState<number | null>(null);

  const currentMonth = internshipCurriculum[activeMonthIndex];

  const handleCopyPrompt = (weekNumber: number, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptWeek(weekNumber);
    setTimeout(() => setCopiedPromptWeek(null), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Overview Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div>
            <div className="text-xs text-sky-700 font-semibold mb-1">ROADMAP หลักสูตรวิชาชีพ 4 เดือน</div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              แผนฝึกทักษะการทำงานด้วย AI สำหรับนักศึกษา ปวช. คอมพิวเตอร์
            </h2>
          </div>
          <button
            onClick={onSelectProjectTab}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors cursor-pointer"
          >
            <span>ข้ามไปเลือกโปรเจกต์ทำทันที</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
          ออกแบบโดยผู้จัดการแผนกไอที โดยยึดหลัก <strong>"ทำเป็นจริง สนุก ไม่น่าเบื่อ ฟรี 0 บาท และพร้อมทำงานทันทีหลังจบ ปวช. 3"</strong> โดยแบ่งระยะเวลา 16 สัปดาห์ออกเป็น 4 ระยะ ตั้งแต่เริ่มติดตั้งเครื่องมือ ไปจนถึงการรับมืออาจารย์นิเทศก์
        </p>
      </div>

      {/* Month Navigation Segmented Controls */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {internshipCurriculum.map((monthPlan, idx) => {
          const isSelected = activeMonthIndex === idx;
          return (
            <button
              key={monthPlan.month}
              onClick={() => {
                setActiveMonthIndex(idx);
                setExpandedWeek(monthPlan.weeks[0].weekNumber);
              }}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={isSelected ? 'text-sky-400 font-mono' : 'text-slate-500 font-mono'}>
                  MONTH 0{monthPlan.month}
                </span>
                <span className={`text-[11px] px-2 py-0.5 rounded ${isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                  4 สัปดาห์
                </span>
              </div>
              <h3 className="text-sm font-bold leading-snug line-clamp-2">
                {monthPlan.title.split(': ')[1] || monthPlan.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Selected Month Deep Dive */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        {/* Month Header Banner */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-900">{currentMonth.title}</h3>
            <span className="text-xs text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-md font-medium">
              สัปดาห์ที่ {currentMonth.weeks[0].weekNumber} - {currentMonth.weeks[currentMonth.weeks.length - 1].weekNumber}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-4">{currentMonth.subtitle}</p>

          <div>
            <div className="text-xs font-semibold text-slate-700 mb-2">ทักษะสำคัญที่นักศึกษาจะได้รับในเดือนนี้:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentMonth.skillsGained.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Breakdown Accordion */}
        <div className="divide-y divide-slate-200">
          {currentMonth.weeks.map(week => {
            const isExpanded = expandedWeek === week.weekNumber;
            return (
              <div key={week.weekNumber} className="transition-colors">
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 cursor-pointer focus:outline-none"
                >
                  <div className="space-y-1 pr-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <span>WEEK {week.weekNumber}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-sans font-medium">{week.goal}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{week.title}</h4>
                  </div>
                  <div className="shrink-0 p-1.5 rounded-lg bg-slate-100 text-slate-600">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-1 bg-slate-50/50 space-y-4">
                    {/* Practice Tasks */}
                    <div>
                      <div className="text-xs font-bold text-slate-800 mb-2">ภารกิจที่ต้องลงมือทำจริง:</div>
                      <div className="space-y-2">
                        {week.practiceTasks.map((task, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                            <span className="font-mono text-slate-400 font-bold shrink-0">0{tIdx + 1}.</span>
                            <span>{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suggested Prompt */}
                    <div className="bg-slate-900 text-slate-100 p-4 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-sky-400 font-semibold">Prompt แนะนำสำหรับสัปดาห์นี้:</span>
                        <button
                          onClick={() => handleCopyPrompt(week.weekNumber, week.suggestedPrompt)}
                          className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer"
                        >
                          {copiedPromptWeek === week.weekNumber ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-medium">คัดลอกแล้ว!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>คัดลอก Prompt</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-xs text-slate-200 font-mono leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                        "{week.suggestedPrompt}"
                      </p>
                    </div>

                    {/* Tangible Outcome */}
                    <div className="flex items-center gap-2 text-xs text-slate-700 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                      <span className="font-bold text-emerald-800">ผลงานเชิงประจักษ์เมื่อจบสัปดาห์:</span>
                      <span className="text-emerald-900">{week.outcome}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
