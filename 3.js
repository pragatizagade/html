
document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countries = data.map(country => country.name.common);

            displayData(countries);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(countries) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; 
    countries.forEach(countryName => {
        const countryElement = document.createElement('div');
        countryElement.textContent = countryName;
        dataContainer.appendChild(countryElement);
    });
}





