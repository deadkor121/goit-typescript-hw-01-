/*enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
    }
    
    
    const isWeekend = (day) => {
    }*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  switch (day) {
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
      return true;
    default:
      return false;
  }
};

console.log(isWeekend(DayOfWeek.Sunday))