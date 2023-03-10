import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import { countryInputEl, countryList, countryInfo } from './js/refs';
import fetchCountries from './js/fetchCountries';

// import { countryList } from './templates/country-list';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryInputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
refs.countryInputEl.setAttribute('placeholder', 'Enter country name');
// Слушатель на INPUT с debounce
refs.countryInputEl.addEventListener(
  'input',
  debounce(onCountrySearchInput, DEBOUNCE_DELAY)
);

// получаем масив стран
function onCountrySearchInput(evt) {
  const inputText = evt.target.value;
  const valueNormalized = inputText.trim().toLowerCase();

  console.log(valueNormalized);
  if (valueNormalized === '') {
    clearAll();
    return;
  } else {
    fetchCountries(valueNormalized)
      .then(countres => {
        const findCountry = countres.filter(({ name }) =>
          name.official.toLowerCase().includes(valueNormalized)
        );
        console.log(findCountry);
        if (findCountry.length < 2) {
          const markupCountryCard = createCountryInformation(findCountry[0]);
          refs.countryInfo.innerHTML = markupCountryCard;
          refs.countryList.style.backgroundColor = '#ffffff';
          refs.countryInfo.style.backgroundColor = '#b2eeef';
          refs.countryList.innerHTML = '';
          Notiflix.Notify.success('Here your result');
        } else if (findCountry.length > 1 && findCountry.length <= 10) {
          const markupList = createCountriesList(findCountry);
          refs.countryList.innerHTML = markupList;
          refs.countryInfo.innerHTML = '';

          refs.countryList.style.backgroundColor = '#d4db8f';
          Notiflix.Notify.success('Here your result');
          return;
        } else {
          clearAll();
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        }
      })
      .catch(() => {
        clearAll();
        Notiflix.Notify.failure('Oops, there is no country with that name.');
      });
  }
}
function createCountriesList(countries) {
  return countries
    .map(
      ({ flags: { svg }, name: { official } }) => `
       <li class="list__item">
        <img class="img_item" src="${svg}" alt="${official}"/>
        <h4>${official}</h4>
        </li>
    
        `
    )
    .join('');
}

function createCountryInformation({
  flags: { svg },
  name: { official },
  capital,
  population,
  languages,
}) {
  const langs = Object.values(languages).join(', ');
  return `
  <div class="info__item">
    <div class="block-img">
      <img class="img_item" src="${svg}" alt="${official}"/>
      <h2>${official}</h2>
    </div>
        <div class="info__block">
            <p><b>Capital:</b> ${capital}</p>
            <p><b>Population:</b> ${population}</p>
            <p><b>Languages:</b> ${langs}</p>
        </div>
  </div>
  `;
}
function clearAll() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
// 'Oops, Something went wrong'
