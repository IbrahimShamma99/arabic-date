const getDate = (dayIndex: number, monthIndex: number, yearIndex: number) => {
  const year = yearIndex ? yearIndex : "";
  //NOTE index is 0 when today -1 yesterday and 1 tomorrow
  var today = new Date();
  var date =
    today.getDate() +
    dayIndex +
    "/" +
    (today.getMonth() + 1 + monthIndex) +
    "/" +
    today.getFullYear() +
    year;
  return date;
};

export default getDate;
