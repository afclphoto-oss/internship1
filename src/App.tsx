import React, { useState } from 'react';
import { MasterProject } from './types/index.ts';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CurriculumView } from './components/CurriculumView.tsx';
import { ProjectGeneratorView } from './components/ProjectGeneratorView.tsx';
import { FreeToolsView } from './components/FreeToolsView.tsx';
import { TeacherDefenseView } from './components/TeacherDefenseView.tsx';
import { AiMentorView } from './components/AiMentorView.tsx';
import { ProjectDetailModal } from './components/ProjectDetailModal.tsx';
import { generateOfflineZipPackage } from './utils/zipExport.ts';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeTab, setActiveTab] = useState<'curriculum' | 'projects' | 'free-tools' | 'teacher-prep' | 'ai-mentor'>('curriculum');
  const [selectedProject, setSelectedProject] = useState<MasterProject | null>(null);
  const [customProjects, setCustomProjects] = useState<MasterProject[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<boolean>(false);

  const handleDownloadZip = async () => {
    setIsDownloading(true);
    try {
      const blob = await generateOfflineZipPackage(customProjects);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'IT_Intern_AI_Academy_Offline_Package.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
      setDownloadSuccessToast(true);
      setTimeout(() => setDownloadSuccessToast(false), 5000);
    } catch (err) {
      console.error('Failed to generate offline zip package:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleAddCustomProject = (project: MasterProject) => {
    setCustomProjects(prev => [project, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Top Bar Contract (3 Zones, Single Line) */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onDownloadZip={handleDownloadZip}
        isDownloading={isDownloading}
      />

      {/* Hero Section */}
      <HeroSection
        onGoToProjects={() => setActiveTab('projects')}
        onGoToGenerator={() => setActiveTab('projects')}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 md:py-10">
        {activeTab === 'curriculum' && (
          <CurriculumView onSelectProjectTab={() => setActiveTab('projects')} />
        )}

        {activeTab === 'projects' && (
          <ProjectGeneratorView
            onOpenProjectDetail={setSelectedProject}
            customProjects={customProjects}
            onAddCustomProject={handleAddCustomProject}
          />
        )}

        {activeTab === 'free-tools' && <FreeToolsView />}

        {activeTab === 'teacher-prep' && <TeacherDefenseView />}

        {activeTab === 'ai-mentor' && <AiMentorView />}
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Download Success Floating Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-sm">
            ✓
          </div>
          <div>
            <p className="text-sm font-bold">ดาวน์โหลดแพ็กเกจ Offline เรียบร้อยแล้ว!</p>
            <p className="text-xs text-slate-400">
              แตกไฟล์ ZIP แล้วดับเบิลคลิก index.html หรือ START-SERVER.bat ในคอมที่บ้านได้ทันที
            </p>
          </div>
        </div>
      )}

      {/* Quiet Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="text-slate-200 font-semibold">
              ศูนย์ฝึกงาน ปวช. ไอที สกิล AI 4 เดือน (IT Intern AI Academy)
            </p>
            <p className="text-slate-400">
              หลักสูตรประกาศนียบัตรวิชาชีพ สาขาคอมพิวเตอร์ · ออกแบบระบบโดย ผู้จัดการแผนกไอที (IT Manager) & พี่ AI (Gemini 2.5 Flash โดย Google AI)
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>เครื่องมือฟรี 100%</span>
            <span aria-hidden="true">·</span>
            <span>ไม่มีค่าใช้จ่ายแอบแฝง</span>
            <span aria-hidden="true">·</span>
            <span>รองรับคอมสเปกต่ำ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
