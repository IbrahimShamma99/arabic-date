import data from "./conventions";
import getDate from "./utils";
const conventions: any = data.map((a) => a.conventions);


ArabicDateConverter = (arabic_text) => {
  //SECTION Common simple cases
  const word_index = conventions.indexOf(arabic_text);
  if (word_index !== -1) {
    const time = data[word_index];
    return getDate(time.day, time.month, time.year);
  } else {
    return new Error(
      "This text was not recognised please report your text here https://github.com/IbrahimShamma99/arabic-text/issues/new"
    );
  }
};


export default ArabicDateConverter