import { useState } from 'react';
import { scheduleData, type WeekType } from './data/schedule';
import { LessonCard } from './components/LessonCard';

function App() {
  const [currentWeek, setCurrentWeek] = useState<WeekType>('numerator');
  
  // Стан для анімації (щоб форсувати перерендер при зміні тижня)
  // Ми використовуємо currentWeek як key, це найпростіший спосіб
  
  const daysMap = [
    { id: 'Monday', label: 'Понеділок' },
    { id: 'Tuesday', label: 'Вівторок' },
    { id: 'Wednesday', label: 'Середа' },
    { id: 'Thursday', label: 'Четвер' },
    { id: 'Friday', label: "П'ятниця" },
  ];

  const timeSlots = [1, 2, 3, 4, 5, 6, 7, 8];

  const timeMap: Record<number, string> = {
    1: "08:30", 2: "10:05", 3: "11:40", 4: "13:15", 
    5: "14:50", 6: "16:25", 7: "18:00", 8: "19:35"
  };

  return (
    <div className="h-screen w-screen relative text-white font-sans selection:bg-blue-500/30 overflow-hidden">
        
        {/* --- BACKGROUND --- */}
        <div className="absolute inset-0 -z-10 animate-bg-shift bg-gradient-to-br from-[#0d1126] via-[#1a1f3c] to-[#020617]" />
        
        {/* --- HEADER --- */}
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-1 p-1.5 bg-[#0F1014]/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-300">
            <div className="px-5 py-2 border-r border-white/5 mr-1 hidden sm:block">
              <h1 className="text-[10px] font-bold tracking-[0.2em] text-white/60">iSchedule</h1>
            </div>
            <button
              onClick={() => setCurrentWeek('numerator')}
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                currentWeek === 'numerator' 
                  ? 'bg-white/90 text-black shadow-lg scale-105' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              Чисельник
            </button>
            <button
              onClick={() => setCurrentWeek('denominator')}
              className={`px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                currentWeek === 'denominator' 
                  ? 'bg-white/90 text-black shadow-lg scale-105' 
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
            >
              Знаменник
            </button>
          </div>
        </header>

        {/* --- MAIN CONTENT --- */}
        <main className="h-full flex items-start overflow-x-auto no-scrollbar pl-[5vw] pr-12 gap-8 snap-x snap-mandatory pt-28 pb-4">
          
          {daysMap.map((day) => {
            const dayLessons = scheduleData
              .filter((l) => l.day === day.id)
              .filter((l) => l.week === 'always' || l.week === currentWeek);

            return (
              <div key={day.id} className="snap-start flex-none w-[380px] flex flex-col h-full relative">
                
                {/* STICKY DAY HEADER */}
                <div className="sticky top-0 z-20 pb-6">
                    <h2 className="text-4xl font-bold text-white pl-10 tracking-tight drop-shadow-2xl">
                    {day.label}
                    </h2>
                </div>
                
                {/* TIME GRID */}
                <div className="flex-1 overflow-y-auto no-scrollbar pb-20 px-2 mask-image-b space-y-2">
                  
                  {timeSlots.map((slotOrder) => {
                    const lesson = dayLessons.find(l => l.order === slotOrder);
                    
                    return (
                        <div key={slotOrder} className="flex gap-4 min-h-[120px]">
                            
                            {/* ЛІВА КОЛОНКА (Timeline) */}
                            <div className="flex flex-col items-center w-8 pt-2">
                                <span className={`text-sm font-mono font-bold transition-opacity duration-300 ${lesson ? 'text-white/90' : 'text-white/20'}`}>
                                    0{slotOrder}
                                </span>
                                <div className={`w-[1px] flex-grow mt-2 mb-2 transition-colors duration-300 ${lesson ? 'bg-gradient-to-b from-white/30 to-transparent' : 'bg-white/5'}`} />
                            </div>

                            {/* ПРАВА КОЛОНКА (Content) */}
                            <div className="flex-1 pb-6 relative">
                                {/* Анімація спрацьовує при зміні currentWeek */}
                                <div 
                                    key={`${day.id}-${slotOrder}-${currentWeek}`} 
                                    className="h-full w-full animate-smooth"
                                >
                                    {lesson ? (
                                        <LessonCard lesson={lesson} />
                                    ) : (
                                        // EMPTY SLOT
                                        <div className="h-full w-full rounded-2xl border border-dashed border-white/5 flex items-start justify-start p-4 opacity-100 hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-[10px] text-blue-200/20 font-mono tracking-wider select-none">
                                                {timeMap[slotOrder]} — Free
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
          
          <div className="w-12 flex-none" />
        </main>
    </div>
  );
}

export default App;