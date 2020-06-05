console.log('Start getting data from Server');
await fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(json => console.log(`Total records found: ${json.length}`));
console.log('Download completed!');
