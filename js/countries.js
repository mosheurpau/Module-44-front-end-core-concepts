const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCounttries(data));
}

const displayCounttries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    console.log(countriesHTML)
    document.getElementById('countries').innerHTML = countriesHTML.join(' ');
}

// orginal
/*
const getCountryHTML = country => {
    return `
        <div class ="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `
} */

// option 2
const getCountryHTML = ({ name, flags, area, region }) => {
    return `
        <div class ="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Region: ${region}</p>
            <img src="${flags.png}">
        </div>
    `
}

// option 1
/* const getCountryHTML = country => {
    const { name, flags } = country;
    return `
        <div class ="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `
} */
loadCountries();