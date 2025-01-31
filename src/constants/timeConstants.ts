const millisecondsPerSecond = 1000;
const secondsPerMinute = 60;
const minutesPerHour = 60;
const hoursPerDay = 24;

const unixMinute = secondsPerMinute * millisecondsPerSecond;
const unixHour = unixMinute * minutesPerHour;
const unixDay = hoursPerDay * unixHour;

export const unixTimesInMs = {
    minute: unixMinute,
    hour: unixHour,
    day: unixDay
};
