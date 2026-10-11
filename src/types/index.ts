export type ProjectCategory = 
  | 'games'
  | 'it-tools'
  | 'freelance-money'
  | 'web-clones'
  | 'social-creator'
  | 'ai-automation';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type ProjectVibe = 'fun-meme' | 'show-friends' | 'make-money' | 'it-support' | 'teacher-wow';

export interface ProjectTask {
  step: number;
  title: string;
  detail: string;
  deliverable: string;
}

export interface MasterProject {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  difficulty: DifficultyLevel;
  difficultyLabel: string;
  durationHours: number;
  vibe: ProjectVibe;
  vibeLabel: string;
  oneLiner: string;
  whyExciting: string; // เหตุผลที่เด็ก ปวช. จะชอบ / เอาไปอวดเพื่อนยังไง
  toolsUsed: string[];
  tasks: ProjectTask[];
  promptThaiLong: string;
  promptEngLong: string;
  testRunGuide: string;
  teacherBonusTip: string; // ทริคตอบอาจารย์นิเทศก์ให้อาจารย์ร้องว้าว
  starterSnippet?: string;
  tags: string[];
}

export interface FreeTool {
  id: string;
  name: string;
  category: 'ide-agent' | 'free-llm' | 'free-host' | 'media-creative' | 'low-spec-tool';
  categoryLabel: string;
  badge: string;
  url: string;
  description: string;
  freeTierLimit: string;
  howToUseWithoutMoney: string;
  lowSpecTrick: string;
  recommendedFor: string;
}

export interface InternshipWeek {
  weekNumber: number;
  title: string;
  goal: string;
  practiceTasks: string[];
  suggestedPrompt: string;
  outcome: string;
}

export interface InternshipMonthPlan {
  month: number;
  title: string;
  subtitle: string;
  skillsGained: string[];
  weeks: InternshipWeek[];
}

export interface TeacherQuestion {
  id: string;
  question: string;
  whyTeacherAsks: string;
  sampleAnswerThai: string;
  proTips: string;
}

export interface RubricCriteria {
  id: string;
  dimension: string;
  fullScore: number;
  criteriaExcellent: string;
  criteriaGood: string;
  criteriaFair: string;
}

export interface WeeklyLogEntry {
  id: string;
  week: number;
  title: string;
  date: string;
  projectCompleted: string;
  aiToolsUsed: string;
  problemFaced: string;
  howResolvedByAI: string;
  hoursSpent: number;
}
