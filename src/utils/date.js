// 오늘의 날짜 반환
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
