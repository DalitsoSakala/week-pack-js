(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WEEK_LIB = void 0;
    function resetDay(day) {
        var date = new Date(day);
        for (var m of ['Hours', 'Minutes', 'Seconds', 'Milliseconds'])
            date['set' + m](0);
        return date;
    }
    function prependWeeks(startDate, numWeeks = 10) {
        var data = [];
        var argDate = startDate == 'today' ? resetDay(new Date) : new Date(startDate);
        var day0 = new Date(argDate.getTime() - (1000 * 60 * 60 * 24));
        for (var i = 0; i < numWeeks; i++) {
            var tmp = [];
            for (var j = 0; j < 7; j++) {
                var dt = new Date(day0.getTime() - ((j + i * 7) * (1000 * 60 * 60 * 24)));
                tmp.unshift(dt);
            }
            data.unshift(tmp);
        }
        return data;
    }
    function appendWeeks(startDate, numWeeks = 10) {
        var data = [];
        var argDate = startDate == 'today' ? resetDay(new Date) : new Date(startDate);
        var day0 = new Date(argDate.getTime() + (1000 * 60 * 60 * 24));
        for (var i = 0; i < numWeeks; i++) {
            var tmp = [];
            for (var j = 0; j < 7; j++) {
                var dt = new Date(day0.getTime() + ((j + i * 7) * (1000 * 60 * 60 * 24)));
                tmp.push(dt);
            }
            data.push(tmp);
        }
        return data;
    }
    function generateInitialWeeks(startDate, numWeeks = 8) {
        var today = startDate == 'today' ? resetDay(new Date) : new Date(startDate);
        var firstDayOfThisWeek = computeFirstDayOfWeek(today);
        var after = appendWeeks(new Date(firstDayOfThisWeek.getTime() - (1000 * 60 * 60 * 24)), numWeeks);
        var before = prependWeeks(firstDayOfThisWeek, numWeeks);
        var pack = before.concat(after);
        return [firstDayOfThisWeek, today, pack];
        function computeFirstDayOfWeek(d) {
            d = new Date(d);
            var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1);
            return new Date(d.setDate(diff));
        }
    }
    const WEEK_LIB = {
        prependWeeks,
        appendWeeks,
        generateInitialWeeks
    };
    exports.WEEK_LIB = WEEK_LIB;
});
//# sourceMappingURL=week-lib.js.map