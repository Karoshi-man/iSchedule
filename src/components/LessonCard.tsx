import { type Lesson } from "../data/schedule";

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export function LessonCard({ lesson, onClick }: LessonCardProps) {
  const dotColor = {
    Lec: "bg-blue-400",
    Lab: "bg-purple-400",
    Prac: "bg-emerald-400",
  };

  return (
    <button
      onClick={onClick}
      className="group relative w-full h-full block overflow-hidden text-left focus:outline-none outline-none"
    >
      {/* BODY: MINIMALIST GLASS */}
      <div className="
        relative h-full w-full
        bg-white/[0.02] backdrop-blur-md
        rounded-xl p-2.5 lg:p-3
        border border-white/10
        shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]
        transition-all duration-300
        group-hover:bg-white/[0.06]
        group-hover:border-white/20
        flex flex-col gap-1.5 lg:gap-2
      ">
        
        {/* Top Row: Тільки крапка типу та час початку */}
        <div className="flex items-center justify-between">
           <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${dotColor[lesson.type]} shadow-[0_0_8px_rgba(255,255,255,0.3)]`} />
           <span className="text-[10px] lg:text-[11px] font-bold text-white/60 group-hover:text-white/90 tracking-tight font-sf tabular-nums transition-colors">
             {lesson.timeStart}
           </span>
        </div>

        {/* Content: Тільки назва предмета (обрізається, якщо не влазить) */}
        <h3 className="text-[10px] lg:text-[12px] font-medium leading-tight text-white/80 group-hover:text-white transition-colors line-clamp-2">
            {lesson.subject}
        </h3>

      </div>
    </button>
  );
}