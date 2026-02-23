import { useEffect, useState } from 'react';

interface WeekInfoModalProps {
  onClose: () => void;
}

export function WeekInfoModal({ onClose }: WeekInfoModalProps) {
  const [isNumerator, setIsNumerator] = useState(true);

  useEffect(() => {
    // Фіксована дата початку семестру: 9 лютого 2026 року
    const startDate = new Date('2026-02-09T00:00:00');
    const now = new Date();
    
    // Вираховуємо кількість днів, що пройшли
    const diffTime = now.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Ділимо на 7, щоб отримати індекс тижня (0 - перший тиждень, 1 - другий і т.д.)
    const weekIndex = Math.floor(diffDays / 7);
    
    // Якщо індекс парний (0, 2, 4...) — це чисельник. Якщо непарний — знаменник.
    setIsNumerator(weekIndex % 2 === 0);
  }, []);

  return (
    // Backdrop (Темний розмитий фон)
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-smooth"
      onClick={onClose}
    >
      {/* Modal Body */}
      <div 
        className="relative w-full max-w-xs bg-white/[0.05] backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 shadow-2xl flex flex-col items-center text-center transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Кнопка закриття */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Іконка календаря */}
        <div className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center mb-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Статус поточного тижня */}
        <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
          Зараз іде
        </h3>
        
        <div className="text-3xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
          {isNumerator ? 'Чисельник' : 'Знаменник'}
        </div>

        {/* Деталі семестру */}
        <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-white/50">Зміна тижня</span>
            <span className="text-white font-medium">Щопонеділка</span>
          </div>
          <div className="h-px w-full bg-white/5" />
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-white/50">Початок</span>
            <span className="text-white font-medium tabular-nums">09.02</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-white/50">Кінець</span>
            <span className="text-white font-medium tabular-nums">~31.05</span>
          </div>
        </div>
        
        <p className="mt-5 text-[9px] text-white/30 font-medium leading-relaxed max-w-[90%]">
          Тип тижня розраховується автоматично від дати початку семестру.
        </p>

      </div>
    </div>
  );
}