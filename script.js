async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    // Berilgan davlatlar ro'yxati
    const includedCountries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "Andorra",
      "Angola", 
      "Antigua and Barbuda",
      "Argentina", "Armenia",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivia",
      "Bosnia and Herzegovina",
      "Botswana",
      "Brazil",
      "Brunei",
      "Bulgaria",
      "Burkina Faso",
      "Burundi", 
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Central African Republic",
      "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "DR Congo",
      "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia", 
      "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
      "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", 
      "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
      "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
      "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", 
      "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
      "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", 
      "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", 
      "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", 
      "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
      "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", 
      "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", 
      "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", 
      "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", 
      "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", 
      "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
      "Saint Vincent and the Grenadines", "Samoa", "San Marino", 
      "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", 
      "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", 
      "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", 
      "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
      "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", 
      "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
      "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", 
      "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", 
      "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];

    // Filtrlash va lotin alifbosi bo'yicha tartiblash
    const filteredCountries = data.filter(country =>
      includedCountries.includes(country.name.common)
    ).sort((a, b) => a.name.common.localeCompare(b.name.common));

    const countriesContainer = document.getElementById('countriesContainer');

    filteredCountries.forEach(country => {
      // Yangi karta yaratish
      const countryCard = document.createElement('div');
      countryCard.className = 'card_germany_home';

      // Ma'lumotlarni to'ldirish
      countryCard.innerHTML = `
        <div class="div_img_german">
          <a href="#">
            <img class="Germany_flag_home_page" src="${country.flags.svg}" alt="${country.name.common}">
          </a>
        </div>
        <div class="p_text_germn">
          <p class="Germany_text">${country.name.common}</p>
        </div>
        <div class="Gerany_text2">
          <p class="Population_Germany">Population: ${country.population.toLocaleString()}</p>
          <p class="Region">Region: ${country.region}</p>
          <p class="Capital">Capital: ${country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
      `;

      // Kartani konteynerga qo'shish
      countriesContainer.appendChild(countryCard);
    });
  } catch (error) {
    console.error("Davlatlar ma'lumotini olishda xatolik yuz berdi:", error);
  }
}



fetchCountries();
