import {
    dayOfYear,
    currentDayOfYear
} from 'https://deno.land/std/datetime/mod.ts';

console.log(dayOfYear(new Date("2020-02-20")));
console.log(currentDayOfYear());