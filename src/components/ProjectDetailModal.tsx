import React, { useState } from 'react';
import { MasterProject } from '../types/index.ts';
import { X, Copy, Check, Terminal, ExternalLink, Award, PlayCircle, CheckSquare, Square } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectDetailModalProps {
  project: MasterProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copiedThai, setCopiedThai] = useState(false);
  const [copiedEng, setCopiedEng] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<{ [step: number]: boolean }>({});

  if (!project) return null;

  const handleCopyThai = () => {
    navigator.clipboard.writeText(project.promptThaiLong);
    setCopiedThai(true);
    confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopiedThai(false), 2000);
  };

  const handleCopyEng = () => {
    navigator.clipboard.writeText(project.promptEngLong);
    setCopiedEng(eng => !eng);
    setCopiedEng(true);
    setTimeout(() => setCopiedEng(false), 2000);
  };

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{project.difficultyLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{project.durationHours} ชั่วโมง</span>
              <span aria-hidden="true">·</span>
              <span className="text-sky-700 font-medium">{project.vibeLabel}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer shrink-0"
            title="ปิดหน้าต่าง"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Why Exciting Callout */}
          <div className="bg-sky-50 border border-sky-100 p-4 rounded-xl space-y-1">
            <div className="text-xs font-bold text-sky-950 flex items-center gap-1.5">
              <span>🔥 ทำไมโปรเจกต์นี้ถึงน่าทำ & เอาไปอวดเพื่อนยังไง:</span>
            </div>
            <p className="text-xs sm:text-sm text-sky-900 leading-relaxed">
              {project.whyExciting}
            </p>
          </div>

          {/* Interactive Checkpoints / Deliverables */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">
                ขั้นตอนและรายการตรวจสอบ (Checklist):
              </h3>
              <span className="text-xs text-slate-500">
                คลิกเพื่อติ๊กบันทึกความคืบหน้า
              </span>
            </div>
            <div className="space-y-2">
              {project.tasks.map(task => {
                const isDone = !!completedSteps[task.step];
                return (
                  <div
                    key={task.step}
                    onClick={() => toggleStep(task.step)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isDone
                        ? 'bg-emerald-50/60 border-emerald-200 text-emerald-900'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5 text-slate-400">
                      {isDone ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </div>
                    <div className="space-y-0.5 flex-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold">
                          ขั้นตอนที่ {task.step}: {task.title}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          ส่งมอบ: {task.deliverable}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{task.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Thai Long Prompt Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Prompt ภาษาไทย (แบบละเอียดยาว ก๊อบปี้ไปวางใน AI ได้ทันที):
                </h3>
              </div>
              <button
                onClick={handleCopyThai}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                {copiedThai ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>คัดลอกสำเร็จแล้ว!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>คัดลอก Prompt ภาษาไทย</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-60 border border-slate-800">
              {project.promptThaiLong}
            </pre>
          </div>

          {/* English Bonus Prompt Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  BONUS ENGLISH PROMPT
                </span>
                <span className="text-xs text-slate-600">
                  (สำหรับฝึกภาษาอังกฤษ และเพิ่มความแม่นยำของ AI)
                </span>
              </div>
              <button
                onClick={handleCopyEng}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {copiedEng ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy English Prompt</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 bg-slate-950 text-emerald-300 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap max-h-48 border border-slate-800">
              {project.promptEngLong}
            </pre>
          </div>

          {/* Test Run Guide & Teacher Tip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <PlayCircle className="w-4 h-4 text-sky-600" />
                <span>วิธีทดสอบรันบนเครื่อง Localhost:</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.testRunGuide}
              </p>
            </div>

            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Award className="w-4 h-4 text-amber-600" />
                <span>ทริคตอบอาจารย์นิเทศก์ให้อาจารย์ร้องว้าว:</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed">
                {project.teacherBonusTip}
              </p>
            </div>
          </div>

          {/* Tools Badge Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">เครื่องมือที่ใช้:</span>
            {project.toolsUsed.map((tool, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-200">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            คำแนะนำ: วางโค้ดใน VS Code แล้วกดรันผ่าน Live Server ได้ฟรีทันที
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
