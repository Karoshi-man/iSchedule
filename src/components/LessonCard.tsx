import { type Lesson } from "../data/schedule";

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export function LessonCard({ lesson, onClick }: LessonCardProps) {
  // Кольори для вертикальної лінії (з легким неоновим світінням)
  const lineStyle = {
    Lec: "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.4)]",
    Lab: "bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.4)]",
    Prac: "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.4)]",
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
        flex items-center justify-between gap-2
      ">
        
        {/* Вертикальна лінія-індикатор зліва */}
        <div className={`
          absolute left-0 top-1/2 -translate-y-1/2 
          w-1.5 h-2/3  /* Трохи ширша початкова лінія */
          rounded-r-full transition-all duration-300 
          group-hover:h-4/5 /* При наведенні стає довшою, але не на всю висоту */
          group-hover:w-2   /* І трохи товщою */
          ${lineStyle[lesson.type]}
        `} />

        {/* Назва предмету (зліва, займає вільний простір, обрізається при потребі) */}
        <h3 className="flex-1 text-[11px] lg:text-[12px] font-medium leading-tight text-white/80 group-hover:text-white transition-colors line-clamp-2 pl-2">
            {lesson.subject}
        </h3>

        {/* Час початку (справа, притиснутий до краю) */}
        <span className="shrink-0 text-[10px] lg:text-[11px] font-bold text-white/40 group-hover:text-white/80 tracking-tight font-sf tabular-nums transition-colors">
          {lesson.timeStart}
        </span>

      </div>
    </button>
  );
}