const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCounttries(data));
}

const displayCounttries = countries => {
    console.log(countries);
    const allCountriesHTML = countries.map(country => getCountryHTML)
}
loadCountries();