# Arabic-Date

[![npm](https://img.shields.io/npm/v/arabic-date.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/async-dispatch)

> Arabic text being converted to dd/mm/yyyy formatted date, still under development!

## Table of contents

- [arabic-date](#arabic-date)
  - [Table of contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [To Do](#to-do)
  - [License](#license)

## Install

`npm i --save arabic-date`

## Usage

```javascript
import ArabicDateConverter from 'arabic-date';

console.log("today's date", ArabicDateConverter('اليوم'));
console.log("yesterday's date", ArabicDateConverter('امبارح'));
console.log("tomorrow's date", ArabicDateConverter('بكرا'));
console.log("next month from now's date", ArabicDateConverter('الشهر الجاي'));

```

## To Do

- [ ] Adding typeScript types

## License

MIT
