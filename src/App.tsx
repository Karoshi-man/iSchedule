import { useState } from 'react';
import { scheduleData, type WeekType, type Lesson } from './data/schedule';
import { LessonCard } from './components/LessonCard';
import { LessonModal } from './components/LessonModal'; // <--- ДОДАЛИ ІМПОРТ

function App() {
  const [currentWeek, setCurrentWeek] = useState<WeekType>('numerator');
  
  // ДОДАЛИ СТАН ДЛЯ МОДАЛКИ
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  
  const daysMap = [
    { id: 'Monday', label: 'Понеділок' },
    { id: 'Tuesday', label: 'Вівторок' },
    { id: 'Wednesday', label: 'Середа' },
    { id: 'Thursday', label: 'Четвер' },
    { id: 'Friday', label: "П'ятниця" },
  ];

  const timeSlots = [1, 2, 3, 4, 5, 6, 7];

  const timeMap: Record<number, string> = {
    1: "08:30", 2: "10:05", 3: "11:40", 4: "13:15", 
    5: "14:50", 6: "16:25", 7: "18:00"
  };

  return (
    <div className="h-screen w-screen flex flex-col relative text-white font-sans selection:bg-blue-500/30 overflow-hidden">
        
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 -z-10 animate-bg-shift bg-gradient-to-br from-[#0d1126] via-[#1a1f3c] to-[#020617]" />
        
        {/* --- HEADER --- */}
        <header className="absolute top-4 left-1/2 -translate-x-1/2 z-50 shrink-0">
          <div className="flex items-center gap-1 p-1 bg-[#0F1014]/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300">
            <div className="px-4 py-1.5 border-r border-white/5 mr-1 hidden sm:block">
              <h1 className="text-[10px] font-bold tracking-[0.2em] text-white/60">iSchedule</h1>
            </div>
            <button
              onClick={() => setCurrentWeek('numerator')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                currentWeek === 'numerator' 
                  ? 'bg-white/90 text-black shadow-lg scale-105' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              Чисельник
            </button>
            <button
              onClick={() => setCurrentWeek('denominator')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                currentWeek === 'denominator' 
                  ? 'bg-white/90 text-black shadow-lg scale-105' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              Знаменник
            </button>
          </div>
        </header>

        {/* --- MAIN CONTENT (FIT SCREEN) --- */}
        <main className="flex-1 w-full flex gap-3 px-4 pt-20 pb-4 min-h-0">
          {daysMap.map((day) => {
            const dayLessons = scheduleData
              .filter((l) => l.day === day.id)
              .filter((l) => l.week === 'always' || l.week === currentWeek);

            return (
              <div key={day.id} className="flex-1 flex flex-col h-full min-w-0">
                
                {/* DAY HEADER */}
                <div className="shrink-0 pb-2 text-center">
                    <h2 className="text-xl lg:text-2xl font-bold text-white tracking-tight drop-shadow-lg">
                      {day.label}
                    </h2>
                </div>
                
                {/* TIME GRID */}
                <div className="flex-1 grid grid-rows-7 gap-1.5 min-h-0">
                  
                  {timeSlots.map((slotOrder) => {
                    const lesson = dayLessons.find(l => l.order === slotOrder);
                    
                    return (
                        <div key={slotOrder} className="flex gap-2 h-full min-h-0">
                            
                            {/* ЛІВА КОЛОНКА (Timeline) */}
                            <div className="flex flex-col items-center w-6 lg:w-8 pt-1 shrink-0">
                                <span className={`text-[10px] lg:text-xs font-mono font-bold transition-opacity duration-300 ${lesson ? 'text-white/90' : 'text-white/20'}`}>
                                    0{slotOrder}
                                </span>
                                <div className={`w-[1px] flex-grow mt-1 mb-1 transition-colors duration-300 ${lesson ? 'bg-gradient-to-b from-white/30 to-transparent' : 'bg-white/5'}`} />
                            </div>

                            {/* ПРАВА КОЛОНКА (Content) */}
                            <div className="flex-1 h-full relative min-w-0 pb-1">
                                <div 
                                    key={`${day.id}-${slotOrder}-${currentWeek}`} 
                                    className="h-full w-full animate-smooth"
                                >
                                    {lesson ? (
                                        // ДОДАЛИ ONCLICK
                                        <LessonCard 
                                          lesson={lesson} 
                                          onClick={() => setSelectedLesson(lesson)} 
                                        />
                                    ) : (
                                        // EMPTY SLOT
                                        <div className="h-full w-full rounded-xl border border-dashed border-white/5 flex items-center justify-center p-2 opacity-100 hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-[9px] lg:text-[10px] text-blue-200/20 font-mono tracking-wider select-none text-center">
                                                {timeMap[slotOrder]}<br/>Free
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                  })}
                  
                </div>
              </div>
            );
          })}
        </main>

        {/* --- MODAL RENDERING --- */}
        {selectedLesson && (
          <LessonModal 
            lesson={selectedLesson} 
            onClose={() => setSelectedLesson(null)} 
          />
        )}
    </div>
  );
}

export default App;