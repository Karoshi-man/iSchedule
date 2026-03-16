export type LessonType = 'Lec' | 'Lab' | 'Prac';
export type WeekType = 'numerator' | 'denominator' | 'always';

export interface Lesson {
  id: number;
  day: string;
  order: number;
  timeStart: string;
  timeEnd: string;
  subject: string;
  type: LessonType;
  teacher: string;
  week: WeekType;
  link?: string;
}

export const scheduleData: Lesson[] = [
  // --- ПОНЕДІЛОК ---
  {
    id: 100,
    day: "Monday",
    order: 2,
    timeStart: "10:05",
    timeEnd: "11:25",
    subject: "Моделі генеративного ШІ",
    type: "Lec",
    teacher: "Довбиш Артур Віталійович",
    week: "denominator",
    link: "https://meet.google.com/zin-oxwi-dps" 
  },
  {
    id: 101,
    day: "Monday",
    order: 3,
    timeStart: "11:40",
    timeEnd: "13:00",
    subject: "Моделі генеративного ШІ",
    type: "Lec",
    teacher: "Довбиш Артур Віталійович",
    week: "always",
    link: "https://meet.google.com/wuq-pxbt-yag"
  },
  {
    id: 102,
    day: "Monday",
    order: 4,
    timeStart: "13:15",
    timeEnd: "14:35",
    subject: "Моделі генеративного ШІ",
    type: "Lab",
    teacher: "Довбиш Артур Віталійович",
    week: "always",
    link: "https://meet.google.com/izx-bkee-edn"
  },

  // --- ВІВТОРОК ---
  {
    id: 201,
    day: "Tuesday",
    order: 2,
    timeStart: "10:05",
    timeEnd: "11:25",
    subject: "Обробка зображень",
    type: "Lec",
    teacher: "Якимів Володимир Стефанович",
    week: "always",
    link: "https://zoom.us/j/94898935516?pwd=6SoYZHvQ0TrEuJ2ejQppj3VpG8hBrp.1"
  },
  {
    id: 202,
    day: "Tuesday",
    order: 3,
    timeStart: "11:40",
    timeEnd: "13:00",
    subject: "Обробка зображень",
    type: "Lab",
    teacher: "Якимів Володимир Стефанович",
    week: "always",
    link: "https://zoom.us/j/94898935516?pwd=6SoYZHvQ0TrEuJ2ejQppj3VpG8hBrp.1"
  },
  {
    id: 203,
    day: "Tuesday",
    order: 6,
    timeStart: "16:25",
    timeEnd: "17:45",
    subject: "Серверне Web",
    type: "Lec",
    teacher: "Ментинський Сергій Мирославович",
    week: "always",
    link: "https://teams.microsoft.com/meet/37049442638336?p=kJHT0yXEgbzPGqGXmz"
  },
  // Лабораторна звідси переїхала на середу

  // --- СЕРЕДА ---
  {
    id: 301,
    day: "Wednesday",
    order: 3,
    timeStart: "11:40",
    timeEnd: "13:00",
    subject: "Обробка людської мови",
    type: "Lec",
    teacher: "Чайка Ростислав Михайлович",
    week: "always",
    link: "https://us06web.zoom.us/j/86467867413?pwd=BYbz51bj6bIFEDbwh9ZNJDZztgD0n1.1"
  },
  {
    id: 302,
    day: "Wednesday",
    order: 4,
    timeStart: "13:15",
    timeEnd: "14:35",
    subject: "Обробка людської мови",
    type: "Lec",
    teacher: "Чайка Ростислав Михайлович",
    week: "numerator",
    link: "https://us06web.zoom.us/j/86467867413?pwd=BYbz51bj6bIFEDbwh9ZNJDZztgD0n1.1"
  },
  {
    id: 303,
    day: "Wednesday",
    order: 5,
    timeStart: "14:50",
    timeEnd: "16:10",
    subject: "Обробка людської мови",
    type: "Lab",
    teacher: "Чайка Ростислав Михайлович",
    week: "numerator",
    link: "https://us06web.zoom.us/j/86467867413?pwd=BYbz51bj6bIFEDbwh9ZNJDZztgD0n1.1"
  },
    {
    id: 304,
    day: "Wednesday",
    order: 4,
    timeStart: "13:15",
    timeEnd: "14:35",
    subject: "Обробка людської мови",
    type: "Lab",
    teacher: "Чайка Ростислав Михайлович",
    week: "denominator",
    link: "https://us06web.zoom.us/j/86467867413?pwd=BYbz51bj6bIFEDbwh9ZNJDZztgD0n1.1"
  },
  {
    id: 305, 
    day: "Wednesday",
    order: 7,
    timeStart: "18:00",
    timeEnd: "19:20",
    subject: "Серверне Web",
    type: "Lab",
    teacher: "Ментинський Сергій Мирославович",
    week: "always",
    link: "https://teams.microsoft.com/meet/37049442638336?p=kJHT0yXEgbzPGqGXmz"
  },

  // --- П'ЯТНИЦЯ ---
  {
    id: 501,
    day: "Friday",
    order: 5,
    timeStart: "14:50",
    timeEnd: "16:10",
    subject: "Фінансова грамотність",
    type: "Lec",
    teacher: "Ільчук Павло Григорович",
    week: "always",
    link: "https://us02web.zoom.us/j/84772238548?pwd=dTVreXJLQXFzdVNrTUp0aVpZUzdJUT09"
  },
  {
    id: 502,
    day: "Friday",
    order: 6,
    timeStart: "16:25",
    timeEnd: "17:45",
    subject: "Фінансова грамотність",
    type: "Prac",
    teacher: "Ільчук Павло Григорович",
    week: "numerator",
    link: "https://us02web.zoom.us/j/84772238548?pwd=dTVreXJLQXFzdVNrTUp0aVpZUzdJUT09"
  },
];