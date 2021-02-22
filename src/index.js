// import data from "./conventions";
const data = require("./conventions");

const conventions = data.map((a) => a.day);
const times = data.map((a) => a.time);

const converter = (arabic_text) => {
  //SECTION Common simple cases
  const word_index = conventions.indexOf(arabic_text);
  if (word_index !== -1) {
    const time = times[word_index];
  } else {
    return new Error(
      "This text was not recognised please report your text here https://github.com/IbrahimShamma99/arabic-text/issues/new"
    );
  }
};

console.log("not available",converter("ايش في"))

// export default converter;
