import React, { useState } from 'react';
import { MasterProject, ProjectCategory, DifficultyLevel, ProjectVibe } from '../types/index.ts';
import { masterProjectsList } from '../data/masterProjects.ts';
import {
  generatorCategories,
  generatorThemes,
  generatorAudiences,
  generatorDifficulties,
  buildGeneratedProject,
} from '../data/generatorMatrix.ts';
import { ProjectCard } from './ProjectCard.tsx';
import { Search, Sparkles, Dices, Filter, Plus, BookOpen, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectGeneratorViewProps {
  onOpenProjectDetail: (project: MasterProject) => void;
  customProjects: MasterProject[];
  onAddCustomProject: (project: MasterProject) => void;
}

export const ProjectGeneratorView: React.FC<ProjectGeneratorViewProps> = ({
  onOpenProjectDetail,
  customProjects,
  onAddCustomProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Generator Controls State
  const [genCategory, setGenCategory] = useState<ProjectCategory>('games');
  const [genThemeId, setGenThemeId] = useState<string>('');
  const [genDifficulty, setGenDifficulty] = useState<DifficultyLevel>('medium');
  const [genVibe, setGenVibe] = useState<ProjectVibe>('show-friends');
  const [customInterest, setCustomInterest] = useState<string>('');
  const [isGeneratorOpen, setIsGeneratorOpen] = useState<boolean>(true);

  // Combine curated + custom generated
  const allProjects = [...customProjects, ...masterProjectsList];

  // Filter themes according to category
  const activeThemes = generatorThemes.filter(t => t.category === genCategory);

  const handleGenerateCustom = () => {
    const newProject = buildGeneratedProject({
      category: genCategory,
      themeId: genThemeId || activeThemes[0]?.id,
      difficulty: genDifficulty,
      vibe: genVibe,
      customInterest,
    });

    onAddCustomProject(newProject);
    onOpenProjectDetail(newProject);
    confetti({ particleCount: 50, spread: 80, origin: { y: 0.6 } });
  };

  const handleSurpriseMe = () => {
    const randomCats: ProjectCategory[] = ['games', 'it-tools', 'freelance-money', 'web-clones', 'social-creator', 'ai-automation'];
    const randomDiffs: DifficultyLevel[] = ['easy', 'medium', 'hard'];
    const randomVibes: ProjectVibe[] = ['show-friends', 'teacher-wow', 'make-money', 'it-support', 'fun-meme'];

    const chosenCat = randomCats[Math.floor(Math.random() * randomCats.length)];
    const matching = generatorThemes.filter(t => t.category === chosenCat);
    const chosenTheme = matching[Math.floor(Math.random() * matching.length)]?.id;

    const newProject = buildGeneratedProject({
      category: chosenCat,
      themeId: chosenTheme,
      difficulty: randomDiffs[Math.floor(Math.random() * randomDiffs.length)],
      vibe: randomVibes[Math.floor(Math.random() * randomVibes.length)],
    });

    onAddCustomProject(newProject);
    onOpenProjectDetail(newProject);
    confetti({ particleCount: 70, spread: 100, origin: { y: 0.5 } });
  };

  // Filtered List
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.oneLiner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.whyExciting.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* SECTION 1: Infinite Generator Console (10,000+ Permutations) */}
      <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-sky-400 font-semibold mb-1">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>ระบบสุ่มสร้างโปรเจกต์ไม่ซ้ำ (สร้างได้มากกว่า 10,000 รูปแบบ)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                ยังนึกไม่ออกว่าจะทำอะไรดี? ให้ระบบสุ่มงานที่เหมาะกับคุณ!
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleSurpriseMe}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <Dices className="w-4 h-4" />
                <span>สุ่มทันที (Surprise Me!)</span>
              </button>
              <button
                onClick={() => setIsGeneratorOpen(!isGeneratorOpen)}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 cursor-pointer"
              >
                {isGeneratorOpen ? 'ย่อหน้าจอตั้งค่า' : 'ปรับแต่งเงื่อนไข'}
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            เลือกสไตล์งานที่คุณชอบ หรือใส่คำค้นหาสิ่งที่สนใจ (เช่น "เกมยิง", "ช่างคอม", "ร้านหมูกระทะ", "มีมอนิเมะ") ระบบจะสังเคราะห์โจทย์คำสั่งงานที่ชัดเจน พร้อม <strong>Prompt ภาษาไทยแบบละเอียดยาวๆ</strong> และ <strong>Bonus English Prompt</strong> ให้ก๊อบปี้ไปวางใน AI ได้ทันที 0 บาท!
          </p>

          {isGeneratorOpen && (
            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-5">
              {/* Category & Theme Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                {/* 1. Category */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">1. หมวดหมู่งานที่สนใจ:</label>
                  <select
                    value={genCategory}
                    onChange={e => {
                      const newCat = e.target.value as ProjectCategory;
                      setGenCategory(newCat);
                      const matching = generatorThemes.filter(t => t.category === newCat);
                      setGenThemeId(matching[0]?.id || '');
                    }}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {generatorCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({cat.countApprox.toLocaleString()} งาน)
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Theme */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">2. ธีมย่อยเฉพาะเจาะจง:</label>
                  <select
                    value={genThemeId}
                    onChange={e => setGenThemeId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {activeThemes.map(theme => (
                      <option key={theme.id} value={theme.id}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Difficulty */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">3. ระดับความยาก:</label>
                  <select
                    value={genDifficulty}
                    onChange={e => setGenDifficulty(e.target.value as DifficultyLevel)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {generatorDifficulties.map(diff => (
                      <option key={diff.id} value={diff.id}>
                        {diff.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Vibe */}
                <div className="space-y-1.5">
                  <label className="font-semibold text-slate-300">4. สไตล์ & กลุ่มเป้าหมาย:</label>
                  <select
                    value={genVibe}
                    onChange={e => setGenVibe(e.target.value as ProjectVibe)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    {generatorAudiences.map(v => (
                      <option key={v.id} value={v.id}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Custom interest tag & Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-slate-800">
                <div className="w-full sm:flex-1">
                  <input
                    type="text"
                    value={customInterest}
                    onChange={e => setCustomInterest(e.target.value)}
                    placeholder="พิมพ์ไอเดียเสริม เช่น 'ร้านซ่อมคอม', 'เกมส์แข่งรถ', 'มีมแมว', 'อาหารตามสั่ง' (ไม่ใส่ก็ได้)"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <button
                  onClick={handleGenerateCustom}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>สร้างโจทย์และรับ Prompt เดี๋ยวนี้!</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SECTION 2: Curated Master Projects Library */}
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              คลังโจทย์และโปรเจกต์สำเร็จรูปแนะนำ (Curated Projects)
            </h3>
            <p className="text-xs text-slate-500">
              พบ {filteredProjects.length} โปรเจกต์ที่พร้อมลงมือทำได้ทันที
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] max-w-xs">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="ค้นหาชื่อเกมส์, อาการเสีย, เว็บ..."
              className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-sm"
            />
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ทั้งหมด ({allProjects.length})
          </button>
          <button
            onClick={() => setSelectedCategory('games')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'games'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎮 เกมส์ & บันเทิง
          </button>
          <button
            onClick={() => setSelectedCategory('it-tools')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'it-tools'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💻 เครื่องมือช่างคอม
          </button>
          <button
            onClick={() => setSelectedCategory('freelance-money')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'freelance-money'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💰 รับจ็อบหาเงิน
          </button>
          <button
            onClick={() => setSelectedCategory('web-clones')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'web-clones'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌐 ลอกเลียนเว็บดัง
          </button>
          <button
            onClick={() => setSelectedCategory('social-creator')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === 'social-creator'
                ? 'bg-white text-slate-900 shadow-sm font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📱 TikTok & มีม
          </button>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
            <p className="text-slate-500 text-sm">ไม่พบโปรเจกต์ที่ตรงกับคำค้นหา "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-sky-700 font-semibold hover:underline cursor-pointer"
            >
              ล้างตัวกรองและดูทั้งหมด
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenProjectDetail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
