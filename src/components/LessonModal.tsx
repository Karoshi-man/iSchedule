import { type Lesson } from "../data/schedule";

interface LessonModalProps {
  lesson: Lesson;
  onClose: () => void;
}

export function LessonModal({ lesson, onClose }: LessonModalProps) {
  const dotColor = {
    Lec: "bg-blue-400",
    Lab: "bg-purple-400",
    Prac: "bg-emerald-400",
  };

  const typeLabels = {
    Lec: "Лекція",
    Lab: "Лабораторна",
    Prac: "Практична",
  };

  return (
    // Backdrop (Темний розмитий фон)
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-smooth"
      onClick={onClose}
    >
      {/* Modal Body (Стиль Apple Glass) */}
    <div 
        className="relative w-full max-w-md bg-white/[0.05] backdrop-blur-3xl border
         border-white/10 rounded-[32px] p-8 shadow-2xl flex flex-col items-center 
         text-center transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Кнопка закриття (Хрестик) */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Бейдж типу пари */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-6">
          <div className={`w-2 h-2 rounded-full ${dotColor[lesson.type]} shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
          <span className="text-[11px] font-bold tracking-widest text-white/80">
            {typeLabels[lesson.type]}
          </span>
        </div>

        {/* Основна інформація */}
        <h2 className="text-2xl font-bold text-white leading-tight mb-2 drop-shadow-md">
          {lesson.subject}
        </h2>
        
        <p className="text-sm font-medium text-white/50 mb-6">
          Викладач: <span className="text-white/80">{lesson.teacher}</span>
        </p>

        {/* Час */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Початок</span>
            <span className="text-xl font-bold font-sf tabular-nums text-white/90">{lesson.timeStart}</span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Кінець</span>
            <span className="text-xl font-bold font-sf tabular-nums text-white/90">{lesson.timeEnd}</span>
          </div>
        </div>

        {lesson.link ? (
          <a 
            href={lesson.link}
            target="_blank"
            rel="noreferrer"
            className="w-4/5 py-3 rounded-full bg-white/70 text-black font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
          >
            Приєднатися до пари
          </a>
        ) : (
          <div 
            className="w-4/5 py-3 rounded-full bg-white/5 border border-white/5 text-white/30 font-bold text-sm tracking-wide cursor-not-allowed"
          >
            Посилання відсутнє
          </div>
        )}

      </div>
    </div>
  );
}