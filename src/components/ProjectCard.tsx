import React, { useState } from 'react';
import { MasterProject } from '../types/index.ts';
import { ArrowRight, Copy, Check, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: MasterProject;
  onOpenDetails: (project: MasterProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [copied, setCopied] = useState(false);

  const handleQuickCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.promptThaiLong);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={() => onOpenDetails(project)}
      className="bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
    >
      <div className="space-y-3">
        {/* Unboxed clean metadata kicker (Zero-pill discipline) */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-700">{project.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>{project.difficultyLabel}</span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1 font-mono tabular-nums">
            <Clock className="w-3 h-3 text-slate-400" />
            {project.durationHours} ชม.
          </span>
        </div>

        {/* Primary Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* One Liner Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
          {project.oneLiner}
        </p>

        {/* Why exciting callout */}
        <div className="bg-sky-50/70 border border-sky-100 p-2.5 rounded-lg text-xs text-sky-900">
          <span className="font-semibold text-sky-950">จุดเด่นอวดเพื่อน: </span>
          <span className="line-clamp-2">{project.whyExciting}</span>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={handleQuickCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
          title="คัดลอก Prompt ภาษาไทย"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-medium">คัดลอกแล้ว</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>คัดลอก Prompt</span>
            </>
          )}
        </button>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
          <span>ดูรายละเอียดเต็ม</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  );
};
