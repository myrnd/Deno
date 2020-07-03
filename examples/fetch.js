/*
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(json => console.log(json[0].name));
    */

const res = await fetch("https://restcountries.eu/rest/v2/all");
const COUNTRIES = res.json();

export default COUNTRIES;

//console.log(json.length);
