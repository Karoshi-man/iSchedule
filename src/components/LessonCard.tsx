import { type Lesson } from "../data/schedule";

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  
  const dotColor = {
    Lec: "bg-blue-400",
    Lab: "bg-purple-400",
    Prac: "bg-emerald-400",
  };

  const Component = lesson.link ? 'a' : 'div';

  return (
    <Component
      href={lesson.link}
      target="_blank"
      rel="noreferrer"
      className={`
        group relative w-full h-full block
        ${lesson.link ? 'cursor-pointer' : 'cursor-default'}
      `}
    >
      
      {/* BODY: TRANSPARENT GLASS */}
      <div className="
        relative h-full
        bg-white/[0.01] backdrop-blur-md
        rounded-2xl p-5
        border border-white/10
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        transition-all duration-300
        
        /* HOVER EFFECTS */
        group-hover:bg-white/[0.05]
        group-hover:border-white/20
        group-hover:scale-[1.01]
        
        flex flex-col justify-between
      ">
        
        {/* Top Row */}
        <div className="flex justify-between items-start mb-3">
           {/* Type Badge */}
           <div className="flex items-center gap-2.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.05] mt-0.5">
              <div className={`w-1.5 h-1.5 rounded-full ${dotColor[lesson.type]}`} />
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/60 group-hover:text-white/80 transition-colors">
                {lesson.type}
              </span>
           </div>
           
           {/* Time Column */}
           <div className="text-right flex flex-col">
              <span className="text-[15px] font-bold text-white tracking-tight font-sf tabular-nums leading-none">
                {lesson.timeStart}
              </span>
              <span className="text-[11px] text-white/40 font-medium font-sf tabular-nums mt-1">
                {lesson.timeEnd}
              </span>
           </div>
        </div>

        {/* Content */}
        <div className="space-y-1 mb-2">
            <h3 className="text-[15px] font-medium leading-snug text-white/90 group-hover:text-white transition-colors">
                {lesson.subject}
            </h3>
            <p className="text-[11px] text-white/40 font-medium pl-0.5 group-hover:text-white/60 transition-colors">
                {lesson.teacher}
            </p>
        </div>

        {/* Visual Cue (Arrow Icon) */}
        {lesson.link && (
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </div>
        )}

      </div>
    </Component>
  );
}