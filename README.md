# week-lib
> Generate an array containing arrays of seven items representing a day of the week

## Usage
### With Node

```js
let { prependWeeks,appendWeeks } = require('@jsnodor/week-pack')
// Generate all the days before 'today' up to 2 weeks in the past
let weeksBeforeToday = prependWeeks('today',2)
// Generate all the days after 26 January 2022 3 weeks in the future
let weeksAfter26Jan2022 = appendWeeks(new Date(2022,0,26),3)

```

## In the browser
```html
<!-- In the browser, the global object `WEEK_PACK` exposes the api -->
<script src="PATH/TO/@jsnodor/week-pack/dist/index.js"></script>
```

```js
WEEK_PACK.prependWeeks('today',2)
// Output
[
  [
    "2023-06-12T07:00:00.00Z",
    "2023-06-13T07:00:00.00Z",
    "2023-06-14T07:00:00.00Z",
    "2023-06-15T07:00:00.00Z",
    "2023-06-16T07:00:00.00Z",
    "2023-06-17T07:00:00.00Z",
    "2023-06-18T07:00:00.00Z"
  ],
  [
    "2023-06-19T07:00:00.00Z",
    "2023-06-20T07:00:00.00Z",
    "2023-06-21T07:00:00.00Z",
    "2023-06-22T07:00:00.00Z",
    "2023-06-23T07:00:00.00Z",
    "2023-06-24T07:00:00.00Z",
    "2023-06-25T07:00:00.00Z"
  ]
]

WEEK_PACK.appendWeeks('today',1)
// Output
[
  [
    "2023-06-27T07:00:00.00Z",
    "2023-06-28T07:00:00.00Z",
    "2023-06-29T07:00:00.00Z",
    "2023-06-30T07:00:00.00Z",
    "2023-07-01T07:00:00.00Z",
    "2023-07-02T07:00:00.00Z",
    "2023-07-03T07:00:00.00Z"
  ]
]

```
