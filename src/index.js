// import data from "./conventions";
const data = require("./conventions");

const conventions = data.map((a) => a.conventions);
const times = data.map((a) => a.time);

const getDay = (dayIndex) => {
  //NOTE index is 0 when today -1 yesterday and 1 tomorrow
  const todayDate = new Date().toISOString().split("T")[0];
  switch (dayIndex) {
    case 0:
      return todayDate;
  }
};

console.log(getDay(0));

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

console.log("not available", converter("اليوم"));

// export default converter;
