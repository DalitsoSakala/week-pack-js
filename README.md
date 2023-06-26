# week-lib
> Generate an array containing arrays of seven items representing a day of the week

## Usage

```js
let { WEEK_LIB } = require('PATH/TO/week-lib/dist/src/week-lib.js')
// Generate all the days before 'today' up to 2 weeks in the past
let weeksBeforeToday = WEEK_LIB.prependWeeks('today',2)
// Generate all the days after 26 January 2022 3 weeks in the future
let weeksAfter26Jan2022 = WEEK_LIB.appendWeeks('today',3)

```

## Example

```js
WEEK_LIB.prependWeeks('today',2)
// Output
[
  [
    "2023-06-12T07:57:38.958Z",
    "2023-06-13T07:57:38.958Z",
    "2023-06-14T07:57:38.958Z",
    "2023-06-15T07:57:38.958Z",
    "2023-06-16T07:57:38.958Z",
    "2023-06-17T07:57:38.958Z",
    "2023-06-18T07:57:38.958Z"
  ],
  [
    "2023-06-19T07:57:38.958Z",
    "2023-06-20T07:57:38.958Z",
    "2023-06-21T07:57:38.958Z",
    "2023-06-22T07:57:38.958Z",
    "2023-06-23T07:57:38.958Z",
    "2023-06-24T07:57:38.958Z",
    "2023-06-25T07:57:38.958Z"
  ]
]

WEEK_LIB.appendWeeks('today',1)
// Output
[
  [
    "2023-06-27T07:57:50.150Z",
    "2023-06-28T07:57:50.150Z",
    "2023-06-29T07:57:50.150Z",
    "2023-06-30T07:57:50.150Z",
    "2023-07-01T07:57:50.150Z",
    "2023-07-02T07:57:50.150Z",
    "2023-07-03T07:57:50.150Z"
  ]
]

```
