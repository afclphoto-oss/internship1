import React, { useState } from 'react';
import { askAiMentor, upgradePromptToMega, MentorMessage } from '../services/geminiService.ts';
import { Send, Sparkles, Terminal, Copy, Check, MessageSquare, Bot, User, RefreshCw, Wand2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AiMentorView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'prompt-tuner'>('chat');

  // Chat State
  const [messages, setMessages] = useState<MentorMessage[]>([
    {
      id: 'm1',
      sender: 'mentor',
      text: 'สวัสดีครับน้องๆ นักศึกษาฝึกงาน ปวช. คอมพิวเตอร์! พี่คือ "พี่ AI" (ขับเคลื่อนด้วยโมเดล Gemini 2.5 Flash โดย Google AI) ทำงานร่วมกับ "พี่ผู้จัดการแผนกไอที" ครับ\n\nมีปัญหาอะไรสงสัย เช่น โค้ดติดบั๊ก, ไม่เข้าใจเรื่องการต่อสายแลน, นึกไอเดียไม่ออก, หรือกังวลตอนอาจารย์นิเทศก์มาเยี่ยม พิมพ์ถามพี่ได้ตลอด 24 ชั่วโมงเลยครับ พี่พร้อมช่วยผลักดันให้น้องเก่งและผ่านการฝึกงานอย่างยอดเยี่ยมครับ!',
      timestamp: 'พร้อมช่วยเหลือตลอดเวลา',
      isAiGenerated: true,
    },
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Prompt Tuner State
  const [shortIdea, setShortIdea] = useState<string>('');
  const [tunedThai, setTunedThai] = useState<string>('');
  const [tunedEng, setTunedEng] = useState<string>('');
  const [isTuning, setIsTuning] = useState<boolean>(false);
  const [copiedThai, setCopiedThai] = useState<boolean>(false);
  const [copiedEng, setCopiedEng] = useState<boolean>(false);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userText = inputText.trim();
    const userMsg: MentorMessage = {
      id: `usr-${Date.now()}`,
      sender: 'student',
      text: userText,
      timestamp: 'เพิ่งส่ง',
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const aiReply = await askAiMentor(userText);
      const mentorMsg: MentorMessage = {
        id: `ai-${Date.now()}`,
        sender: 'mentor',
        text: aiReply,
        timestamp: 'ตอบกลับทันที',
        isAiGenerated: true,
      };
      setMessages(prev => [...prev, mentorMsg]);
    } catch (err) {
      const errorMsg: MentorMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'mentor',
        text: 'ขออภัยครับน้อง เกิดปัญหาการเชื่อมต่อเล็กน้อย แต่ไม่ต้องกังวลนะ ให้ลองเปิดดูในโหมดออฟไลน์ หรือสอบถามพี่ผู้จัดการแผนกไอทีได้ทันทีครับ!',
        timestamp: 'แจ้งเตือน',
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (q: string) => {
    setInputText(q);
  };

  const handleTunePrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!shortIdea.trim() || isTuning) return;

    setIsTuning(true);
    try {
      const result = await upgradePromptToMega(shortIdea);
      setTunedThai(result.thaiLong);
      setTunedEng(result.engLong);
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.7 } });
    } finally {
      setIsTuning(false);
    }
  };

  const handleCopyTunedThai = () => {
    navigator.clipboard.writeText(tunedThai);
    setCopiedThai(true);
    setTimeout(() => setCopiedThai(false), 2000);
  };

  const handleCopyTunedEng = () => {
    navigator.clipboard.writeText(tunedEng);
    setCopiedEng(true);
    setTimeout(() => setCopiedEng(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Mentor Intro Card with Credit */}
      <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs text-sky-700 font-semibold">
              <Bot className="w-4 h-4 text-sky-600" />
              <span>AI MENTOR LAB & PROMPT TUNER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              ห้องปรึกษาพี่ AI & สตูดิโออัปเกรด Prompt ภาษาไทย-อังกฤษ
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              สงสัยอะไรถามพี่เอไอได้ตลอดเวลา! โค้ดติดบั๊ก รันไม่ขึ้น ลืมวิธีใช้ Web Audio API หรือกังวลเรื่องการส่งงานอาจารย์ พิมพ์ถามได้เลย พร้อมเครื่องมือช่วยแปลงไอเดียสั้นๆ ให้กลายเป็น <strong>Prompt 5 ดาวความยาวกว่า 200 คำ</strong> ที่ให้ผลลัพธ์โค้ดสมบูรณ์แบบ
            </p>

            {/* Official Credit Box */}
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800">เครดิตระบบ:</span>
                <span>พี่เลี้ยง AI โมเดล <strong>Gemini 2.5 Flash</strong> (Google AI Studio)</span>
              </div>
              <div className="text-slate-500">
                ร่วมกับ <strong>ผู้จัดการแผนกไอที (IT Manager)</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-slate-200 shadow-sm max-h-52">
            <img
              src="/src/assets/images/ai_agent_coding_card_1791712004849.jpg"
              alt="AI Mentor Coding Lab"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('chat')}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'chat'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>แชตปรึกษาพี่ AI (AI Coding Coach)</span>
        </button>
        <button
          onClick={() => setActiveTab('prompt-tuner')}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'prompt-tuner'
              ? 'bg-slate-900 text-white'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Wand2 className="w-4 h-4" />
          <span>เครื่องจักรแปลง Prompt สั้นเป็น Super Prompt 5 ดาว</span>
        </button>
      </div>

      {/* TAB 1: Chat Console */}
      {activeTab === 'chat' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col h-[600px]">
          {/* Quick Suggestions Strip */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="text-slate-500 font-semibold shrink-0">คำถามยอดฮิต:</span>
            <button
              onClick={() => handleQuickQuestion('โค้ดของหนูเปิดแล้วจอขาวสนิท ไม่มีอะไรขึ้นเลย แก้ยังไงดีพี่?')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md hover:bg-sky-50 hover:text-sky-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              โค้ดจอขาว แก้ยังไง?
            </button>
            <button
              onClick={() => handleQuickQuestion('อาจารย์นิเทศก์ถามว่าใช้ AI ช่วย แล้วตัวเราเองเขียนโค้ดเป็นไหม?')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md hover:bg-sky-50 hover:text-sky-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              วิธีตอบอาจารย์เรื่องใช้ AI
            </button>
            <button
              onClick={() => handleQuickQuestion('จบ ปวช. 3 แล้วจะไปรับงานฟรีแลนซ์ทำเว็บให้ร้านค้ายังไงดี?')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md hover:bg-sky-50 hover:text-sky-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              รับจ็อบทำเว็บหาเงินจริง
            </button>
            <button
              onClick={() => handleQuickQuestion('แนะนำเทคนิคการจำ Beep Code ของเมนบอร์ดหน่อยครับ')}
              className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md hover:bg-sky-50 hover:text-sky-800 transition-colors whitespace-nowrap cursor-pointer"
            >
              เทคนิคจำ Beep Code
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'mentor' && (
                  <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'student'
                      ? 'bg-slate-900 text-white rounded-tr-none'
                      : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1 opacity-70">
                    <span className="font-semibold">
                      {msg.sender === 'student' ? 'น้องนักศึกษา ปวช.' : 'พี่ AI (Gemini 2.5 Flash)'}
                    </span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                </div>
                {msg.sender === 'student' && (
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 items-center text-xs text-slate-500">
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                  กำลังคิดคำตอบและเตรียมตัวอย่างโค้ดให้น้อง...
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              placeholder="พิมพ์คำถาม หรือข้อความบั๊กที่สงสัย แล้วกด Enter..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors disabled:opacity-50 cursor-pointer shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>ส่งคำถาม</span>
            </button>
          </form>
        </div>
      )}

      {/* TAB 2: Prompt Tuner Studio */}
      {activeTab === 'prompt-tuner' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900">
              ป้อนไอเดียสั้นๆ แล้วให้ระบบอัปเกรดเป็น Mega Prompt ละเอียดยาว 200+ คำ
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ปัญหาใหญ่ของเด็ก ปวช. คือ "สั่ง AI สั้นเกินไป เช่น สั่งแค่ 'ทำเว็บเกม' แล้วผลงานออกมาไม่ตรงใจ" เครื่องมือนี้จะช่วยใส่บทบาท (Role), กรอบเทคนิค (Tech Constraints), สถาปัตยกรรม Single-File, และดีไซน์ Tailwind CSS ให้อัตโนมัติ พร้อมทั้งเวอร์ชันภาษาไทยและภาษาอังกฤษ!
            </p>
          </div>

          <form onSubmit={handleTunePrompt} className="space-y-3">
            <label className="text-xs font-bold text-slate-700 block">
              พิมพ์ไอเดียที่น้องอยากทำ (เช่น "เว็บคิดเงินร้านชำแถวบ้าน", "เกมกดจับเวลา", "เครื่องมือคำนวณสเปกคอม"):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shortIdea}
                onChange={e => setShortIdea(e.target.value)}
                placeholder="เช่น เว็บขายการ์ดเกมและอุปกรณ์คอมพิวเตอร์ มีระบบตะกร้าสินค้า..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-500"
                required
              />
              <button
                type="submit"
                disabled={isTuning || !shortIdea.trim()}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-xl transition-colors cursor-pointer shrink-0 disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isTuning ? 'กำลังสร้าง...' : 'แปลงเป็น Prompt 5 ดาว'}</span>
              </button>
            </div>
          </form>

          {tunedThai && (
            <div className="space-y-6 pt-4 border-t border-slate-200 animate-in fade-in duration-300">
              {/* Thai Tuned */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Terminal className="w-4 h-4 text-sky-600" />
                    <span>Prompt ภาษาไทยตัวเต็ม (พร้อมวางใน AI ทันที):</span>
                  </div>
                  <button
                    onClick={handleCopyTunedThai}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    {copiedThai ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>คัดลอกสำเร็จ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>คัดลอก Prompt ภาษาไทย</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800">
                  {tunedThai}
                </pre>
              </div>

              {/* English Tuned */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      BONUS ENGLISH PROMPT
                    </span>
                    <span>(ฝึกภาษาอังกฤษและได้โค้ดแม่นยำสูงสุด):</span>
                  </div>
                  <button
                    onClick={handleCopyTunedEng}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    {copiedEng ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy English Prompt</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="p-4 bg-slate-950 text-emerald-300 rounded-xl text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap border border-slate-800">
                  {tunedEng}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
