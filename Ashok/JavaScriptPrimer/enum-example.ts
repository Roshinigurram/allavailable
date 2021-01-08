enum DaysOfWeek {
    SUNDAY = 1,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
};
let today = new Date().getDay() + 1;
console.log(today)
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
        console.log('This is Wednesday');
        break
    default:
        break;
}
