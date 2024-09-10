interface FormattedDate {
  year: number;
  month: number;
  day: number;
  dayOfWeek: string;
}
const daysOfWeek: string[] = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];
const daysOfWeekShort: string[] = ['일', '월', '화', '수', '목', '금', '토'];

const getDates = (date: Date, short: boolean = false): FormattedDate => {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();
  const dayOfWeek: string = short
    ? daysOfWeekShort[date.getDay()]
    : daysOfWeek[date.getDay()];

  return {
    year,
    month,
    day,
    dayOfWeek,
  };
};

export default getDates;
