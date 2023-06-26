


/**
 * Generate dates back in time
 * @param startDate The date to start with. This date is not included
 * @param  numweeks The number of weeks to generate
 * @returns A week pack excluding `startDate`
 */
function prependWeeks(startDate: Date | string | 'today', numWeeks: number = 10) {
    var data: Date[][] = []
    var argDate = new Date(startDate == 'today' ? new Date : startDate)
    var day0 = new Date(argDate.getTime() - (1000 * 60 * 60 * 24)) // Subtract one day
    for (var i = 0; i < numWeeks; i++) {
        var tmp: Date[] = []
        for (var j = 0; j < 7; j++) {
            var dt = new Date(day0.getTime() - ((j + i * 7) * (1000 * 60 * 60 * 24))) // Subtract
            tmp.unshift(dt)
        }
        data.unshift(tmp)
    }
    return data
}
/**
 * 
 * @param  startDate Generate dates a head of time
 * @param  numweeks The number of weeks to generate
 * @returns A week pack exluding `startDate`
 */
function appendWeeks(startDate: Date | string | 'today', numWeeks: number = 10) {
    var data: Date[][] = []
    var argDate = new Date(startDate == 'today' ? new Date : startDate)
    var day0 = new Date(argDate.getTime() + (1000 * 60 * 60 * 24)) // Add one day

    for (var i = 0; i < numWeeks; i++) {
        var tmp: Date[] = []
        for (var j = 0; j < 7; j++) {

            var dt = new Date(day0.getTime() + ((j + i * 7) * (1000 * 60 * 60 * 24))) // Add
            tmp.push(dt)
        }
        data.push(tmp)
    }
    return data
}


function generateInitialWeeks(startDate: Date | string | 'today', numWeeks: number = 8) {

    var today = new Date(startDate == 'today' ? new Date : startDate)
    var firstDayOfThisWeek = computeFirstDayOfWeek(today)
    var after = appendWeeks(new Date(firstDayOfThisWeek.getTime() - (1000 * 60 * 60 * 24)), numWeeks) // Subtract one day
    // var after = appendWeeks(dayjs(firstDayOfThisWeek).subtract(1, 'day').toDate())
    var before = prependWeeks(firstDayOfThisWeek, numWeeks)
    var pack = before.concat(after)

    return [firstDayOfThisWeek, today, pack]




    /**
     * Get the first day of the week. Adapted from https://stackoverflow.com/questions/4156434/javascript-get-the-first-day-of-the-week-from-current-date
     * @param d The reference date 
     * @returns 
     */
    function computeFirstDayOfWeek(d: Date) {
        d = new Date(d);
        var day = d.getDay(),
            diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    }
}


const WEEK_LIB = {
    prependWeeks,
    appendWeeks,
    generateInitialWeeks
}



export { WEEK_LIB }