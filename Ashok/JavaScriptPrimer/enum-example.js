var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["SUNDAY"] = 1] = "SUNDAY";
    DaysOfWeek[DaysOfWeek["MONDAY"] = 2] = "MONDAY";
    DaysOfWeek[DaysOfWeek["TUESDAY"] = 3] = "TUESDAY";
    DaysOfWeek[DaysOfWeek["WEDNESDAY"] = 4] = "WEDNESDAY";
    DaysOfWeek[DaysOfWeek["THURSDAY"] = 5] = "THURSDAY";
    DaysOfWeek[DaysOfWeek["FRIDAY"] = 6] = "FRIDAY";
    DaysOfWeek[DaysOfWeek["SATURDAY"] = 7] = "SATURDAY";
})(DaysOfWeek || (DaysOfWeek = {}));
;
var today = new Date().getDay() + 1;
console.log(today);
switch (today) {
    case DaysOfWeek.SUNDAY:
        console.log('Sunday');
        break;
    case DaysOfWeek.MONDAY:
        console.log('Monday');
        break;
    case DaysOfWeek.TUESDAY:
        console.log('Tuesday');
        break;
    case DaysOfWeek.WEDNESDAY:
        console.log('Wednesday');
        break;
    default:
        break;
}
