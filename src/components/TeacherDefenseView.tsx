import React, { useState } from 'react';
import { teacherQuestionsList, rubricCriteriaList, sampleWeeklyLogs } from '../data/teacherDefenseGuide.ts';
import { WeeklyLogEntry } from '../types/index.ts';
import { Award, ChevronDown, ChevronUp, Printer, Plus, CheckCircle, FileText, HelpCircle } from 'lucide-react';

export const TeacherDefenseView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'interview' | 'rubric' | 'logbook'>('interview');
  const [expandedQuestion, setExpandedQuestion] = useState<string>('q1');

  // Interactive Weekly Logs
  const [logs, setLogs] = useState<WeeklyLogEntry[]>(sampleWeeklyLogs);
  const [isAddingLog, setIsAddingLog] = useState<boolean>(false);
  const [newLogWeek, setNewLogWeek] = useState<number>(logs.length + 1);
  const [newLogTitle, setNewLogTitle] = useState<string>('');
  const [newLogProject, setNewLogProject] = useState<string>('');
  const [newLogTools, setNewLogTools] = useState<string>('Google AI Studio, VS Code Live Server');
  const [newLogProblem, setNewLogProblem] = useState<string>('');
  const [newLogSolution, setNewLogSolution] = useState<string>('');

  // Rubric calculator state
  const [scores, setScores] = useState<{ [id: string]: number }>({
    r1: 25,
    r2: 24,
    r3: 20,
    r4: 15,
    r5: 15,
  });

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogTitle.trim()) return;

    const newEntry: WeeklyLogEntry = {
      id: `log-custom-${Date.now()}`,
      week: Number(newLogWeek),
      title: newLogTitle,
      date: `สัปดาห์ที่ ${newLogWeek} ของการฝึกงาน`,
      projectCompleted: newLogProject || 'สร้างโปรเจกต์เว็บหรือเกมส์ด้วย AI',
      aiToolsUsed: newLogTools,
      problemFaced: newLogProblem || 'ไม่มีปัญหา ติดขัดเล็กน้อยแก้ไขได้',
      howResolvedByAI: newLogSolution || 'ใช้ AI ช่วยค้นหาสาเหตุและปรับแต่งโค้ด',
      hoursSpent: 40,
    };

    setLogs([newEntry, ...logs]);
    setIsAddingLog(false);
    setNewLogTitle('');
    setNewLogProject('');
    setNewLogProblem('');
    setNewLogSolution('');
  };

  const handlePrintLog = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs text-sky-700 font-semibold">INTERNSHIP REVIEW & DEFENSE PREPARATION</div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              เตรียมความพร้อมต้อนรับอาจารย์นิเทศก์ & คู่มือส่งรายงานฝึกงาน ปวช.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              เมื่ออาจารย์จากวิทยาลัยมาเยี่ยมตรวจการฝึกงาน น้องๆ สามารถเปิดหน้านี้อวดผลงาน สาธิตโปรแกรม ตอบคำถามเชิงลึก และแสดงบันทึกการฝึกงานได้อย่างมั่นใจเต็มร้อย <strong>รับประกันได้เกรด 4 และอาจารย์ต้องชื่นชมสถานประกอบการที่สอนน้องๆ อย่างดีเยี่ยม!</strong>
            </p>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm max-h-52">
            <img
              src="/src/assets/images/intern_success_presentation_1791712016949.jpg"
              alt="Vocational Intern Presenting Project"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveSubTab('interview')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'interview'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          🗣️ คำถาม 10 ข้อยอดฮิตที่อาจารย์ชอบถาม
        </button>
        <button
          onClick={() => setActiveSubTab('rubric')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'rubric'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          📊 เกณฑ์ประเมิน รูบริก (100 คะแนนเต็ม)
        </button>
        <button
          onClick={() => setActiveSubTab('logbook')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeSubTab === 'logbook'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          📝 สมุดบันทึกการฝึกงาน & พิมพ์รายงาน
        </button>
      </div>

      {/* TAB 1: Interview Questions */}
      {activeSubTab === 'interview' && (
        <div className="space-y-4">
          <div className="bg-sky-50 border border-sky-200 p-4 rounded-xl text-xs sm:text-sm text-sky-950">
            <strong>คำแนะนำจากผู้จัดการแผนกไอที:</strong> ซ้อมตอบตามแนวทางด้านล่างนี้ และก่อนตอบให้เปิดหน้าโปรเจกต์จริงบนคอมพิวเตอร์ให้อาจารย์ดู จะทำให้อาจารย์เห็นว่าน้องทำงานเป็นจริงและมีทักษะเกินระดับ ปวช. ไปแล้ว!
          </div>

          <div className="space-y-3">
            {teacherQuestionsList.map(item => {
              const isExpanded = expandedQuestion === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setExpandedQuestion(isExpanded ? '' : item.id)}
                    className="w-full p-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1 pr-4">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {item.question}
                      </h3>
                      <p className="text-xs text-slate-500">
                        สิ่งที่อาจารย์แอบประเมิน: {item.whyTeacherAsks}
                      </p>
                    </div>
                    <div className="shrink-0 p-1 rounded-md bg-slate-100 text-slate-600">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 pt-1 bg-slate-50/70 space-y-4 border-t border-slate-100">
                      <div className="space-y-1.5">
                        <div className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span>สคริปต์บทตอบแนะนำ (พูดตามนี้ได้เลย):</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 bg-white p-4 rounded-xl border border-slate-200 leading-relaxed shadow-sm">
                          "{item.sampleAnswerThai}"
                        </p>
                      </div>

                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-950">
                        <strong>💡 ทริคเด็ดเสริมความว้าว:</strong> {item.proTips}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Rubric Evaluation */}
      {activeSubTab === 'rubric' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                แบบประเมินตนเองตามเกณฑ์มาตรฐานวิชาชีพ ปวช. คอมพิวเตอร์
              </h3>
              <p className="text-xs text-slate-500">
                ประเมิน 5 มิติสำคัญ รวมคะแนนเต็ม 100 คะแนน
              </p>
            </div>
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center min-w-[140px]">
              <div className="text-xs text-emerald-700 font-semibold">คะแนนรวมที่ได้</div>
              <div className="text-3xl font-extrabold text-emerald-900 font-mono tabular-nums">
                {totalScore} / 100
              </div>
              <div className="text-[11px] font-bold text-emerald-800 mt-0.5">
                {totalScore >= 80 ? 'เกรด 4.0 (ดีเยี่ยมมาก)' : 'เกรด 3.5 (ดีมาก)'}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {rubricCriteriaList.map(criteria => (
              <div key={criteria.id} className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{criteria.dimension}</h4>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-slate-500">ให้คะแนน:</span>
                    <input
                      type="number"
                      min={0}
                      max={criteria.fullScore}
                      value={scores[criteria.id] || criteria.fullScore}
                      onChange={e =>
                        setScores({
                          ...scores,
                          [criteria.id]: Math.min(criteria.fullScore, Math.max(0, Number(e.target.value))),
                        })
                      }
                      className="w-16 text-center font-mono font-bold bg-slate-50 border border-slate-300 rounded px-2 py-1 text-slate-900"
                    />
                    <span className="text-slate-400">/ {criteria.fullScore}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-200 text-emerald-950">
                    <div className="font-bold text-emerald-800 mb-1">ระดับดีเยี่ยม:</div>
                    <p>{criteria.criteriaExcellent}</p>
                  </div>
                  <div className="p-3 bg-sky-50/50 rounded-lg border border-sky-100 text-sky-950">
                    <div className="font-bold text-sky-800 mb-1">ระดับดี:</div>
                    <p>{criteria.criteriaGood}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-slate-700">
                    <div className="font-bold text-slate-800 mb-1">ระดับพอใช้:</div>
                    <p>{criteria.criteriaFair}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Weekly Logbook & Printable Sheet */}
      {activeSubTab === 'logbook' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                สมุดบันทึกผลการฝึกปฏิบัติงานประจำสัปดาห์ (Weekly Internship Log)
              </h3>
              <p className="text-xs text-slate-500">
                บันทึกงานที่ทำ เครื่องมือ AI ที่ใช้ ปัญหาและวิธีแก้ เพื่อนำไปพิมพ์ส่งอาจารย์
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAddingLog(!isAddingLog)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>เพิ่มบันทึกสัปดาห์ใหม่</span>
              </button>
              <button
                onClick={handlePrintLog}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>พิมพ์รายงาน (Print)</span>
              </button>
            </div>
          </div>

          {/* Form to add log */}
          {isAddingLog && (
            <form onSubmit={handleAddLog} className="bg-slate-50 p-6 rounded-xl border border-slate-300 space-y-4">
              <h4 className="text-sm font-bold text-slate-900">กรอกข้อมูลบันทึกการฝึกงานสัปดาห์ใหม่</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">สัปดาห์ที่:</label>
                  <input
                    type="number"
                    value={newLogWeek}
                    onChange={e => setNewLogWeek(Number(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">หัวข้อกิจกรรมหลัก:</label>
                  <input
                    type="text"
                    value={newLogTitle}
                    onChange={e => setNewLogTitle(e.target.value)}
                    placeholder="เช่น พัฒนาเกมส์ Canvas 2D / ทำระบบสแกนไอพี"
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">ชิ้นงาน/โปรเจกต์ที่ทำเสร็จ:</label>
                  <input
                    type="text"
                    value={newLogProject}
                    onChange={e => setNewLogProject(e.target.value)}
                    placeholder="เช่น เกม Flappy Meme พร้อมระบบเสียง 8-Bit"
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">เครื่องมือ AI ฟรีที่ใช้:</label>
                  <input
                    type="text"
                    value={newLogTools}
                    onChange={e => setNewLogTools(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-semibold text-slate-700 block mb-1">ปัญหาที่พบในการทำงาน:</label>
                  <input
                    type="text"
                    value={newLogProblem}
                    onChange={e => setNewLogProblem(e.target.value)}
                    placeholder="เช่น โค้ดที่ได้มาติดเรื่อง CORS หรือไม่แสดงภาษาไทย"
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="font-semibold text-slate-700 block mb-1">วิธีแก้ปัญหาด้วย AI:</label>
                  <input
                    type="text"
                    value={newLogSolution}
                    onChange={e => setNewLogSolution(e.target.value)}
                    placeholder="เช่น ให้ AI ช่วยเขียน Web Audio API สังเคราะห์เสียงแทน"
                    className="w-full bg-white border border-slate-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingLog(false)}
                  className="px-4 py-2 text-xs text-slate-600 bg-white border border-slate-300 rounded-lg cursor-pointer"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg cursor-pointer"
                >
                  บันทึกลงสมุด
                </button>
              </div>
            </form>
          )}

          {/* List of logs */}
          <div className="space-y-4">
            {logs.map(log => (
              <div key={log.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs font-bold text-sky-700 font-mono">
                      WEEK 0{log.week} · {log.date}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{log.title}</h4>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    จำนวนชั่วโมงปฏิบัติงาน: {log.hoursSpent} ชม.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-700">ชิ้นงานที่ทำสำเร็จ:</span>
                    <p className="text-slate-600">{log.projectCompleted}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-bold text-slate-700">เครื่องมือ AI ฟรีที่ใช้:</span>
                    <p className="text-slate-600">{log.aiToolsUsed}</p>
                  </div>
                  <div className="space-y-1 bg-red-50/50 p-2.5 rounded border border-red-100 text-red-950">
                    <span className="font-bold text-red-900">ปัญหา/อุปสรรคที่พบ:</span>
                    <p className="text-red-900">{log.problemFaced}</p>
                  </div>
                  <div className="space-y-1 bg-emerald-50/50 p-2.5 rounded border border-emerald-100 text-emerald-950">
                    <span className="font-bold text-emerald-900">วิธีแก้ปัญหาด้วย AI:</span>
                    <p className="text-emerald-900">{log.howResolvedByAI}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
