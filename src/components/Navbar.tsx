import React from 'react';
import { Download, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: 'curriculum' | 'projects' | 'free-tools' | 'teacher-prep' | 'ai-mentor';
  onSelectTab: (tab: 'curriculum' | 'projects' | 'free-tools' | 'teacher-prep' | 'ai-mentor') => void;
  onDownloadZip: () => void;
  isDownloading: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onDownloadZip,
  isDownloading,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-16">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <button
          onClick={() => onSelectTab('curriculum')}
          className="text-left whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
            ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน
          </span>
        </button>

        {/* Zone 2: 4-5 Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            onClick={() => onSelectTab('curriculum')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'curriculum'
                ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                : 'hover:text-slate-900'
            }`}
          >
            หลักสูตร 4 เดือน
          </button>
          <button
            onClick={() => onSelectTab('projects')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'projects'
                ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                : 'hover:text-slate-900'
            }`}
          >
            คลัง 10,000 โปรเจกต์ & สุ่มงาน
          </button>
          <button
            onClick={() => onSelectTab('free-tools')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'free-tools'
                ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                : 'hover:text-slate-900'
            }`}
          >
            เครื่องมือฟรี 0 บาท & คอมสเปกต่ำ
          </button>
          <button
            onClick={() => onSelectTab('teacher-prep')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'teacher-prep'
                ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                : 'hover:text-slate-900'
            }`}
          >
            เตรียมส่งอาจารย์ & บันทึกงาน
          </button>
          <button
            onClick={() => onSelectTab('ai-mentor')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'ai-mentor'
                ? 'text-sky-700 font-semibold border-b-2 border-sky-600'
                : 'hover:text-slate-900'
            }`}
          >
            ห้องปรึกษาพี่ AI
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onDownloadZip}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 disabled:opacity-60 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'กำลังสร้างไฟล์ ZIP...' : 'ดาวน์โหลด Offline (ZIP)'}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav strip */}
      <div className="md:hidden flex items-center justify-between overflow-x-auto px-4 py-2 bg-slate-50 border-t border-slate-200 text-xs font-medium text-slate-600 gap-4 no-scrollbar">
        <button
          onClick={() => onSelectTab('curriculum')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'curriculum' ? 'text-sky-700 font-bold' : ''}`}
        >
          หลักสูตร
        </button>
        <button
          onClick={() => onSelectTab('projects')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'projects' ? 'text-sky-700 font-bold' : ''}`}
        >
          คลังโปรเจกต์ & สุ่ม
        </button>
        <button
          onClick={() => onSelectTab('free-tools')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'free-tools' ? 'text-sky-700 font-bold' : ''}`}
        >
          เครื่องมือฟรี
        </button>
        <button
          onClick={() => onSelectTab('teacher-prep')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'teacher-prep' ? 'text-sky-700 font-bold' : ''}`}
        >
          ส่งอาจารย์
        </button>
        <button
          onClick={() => onSelectTab('ai-mentor')}
          className={`whitespace-nowrap shrink-0 ${activeTab === 'ai-mentor' ? 'text-sky-700 font-bold' : ''}`}
        >
          ปรึกษาพี่ AI
        </button>
      </div>
    </header>
  );
};
