// import data from "./conventions";
const data = require("./conventions");

const conventions = data.map((a) => a.conventions);
const times = data.map((a) => a.time);

const getDayDate = (dayIndex, monthIndex, yearIndex) => {
  //NOTE index is 0 when today -1 yesterday and 1 tomorrow
  var today = new Date();
  var date =
    today.getDate() +
    dayIndex +
    "/" +
    (today.getMonth() + 1 + monthIndex) +
    "/" +
    today.getFullYear() +
    yearIndex;
  return date;
};

console.log("today", getDayDate(0, 0, 0));
console.log("tomorrow", getDayDate(1, 0, 0));
console.log("yesterday", getDayDate(-1, 0, 0));

const converter = (arabic_text) => {
  //SECTION Common simple cases
  const word_index = conventions.indexOf(arabic_text);
  if (word_index !== -1) {
    const time = times[word_index];
    switch (time) {
      case "today":
        return;
    }
  } else {
    return new Error(
      "This text was not recognised please report your text here https://github.com/IbrahimShamma99/arabic-text/issues/new"
    );
  }
};

// export default converter;
