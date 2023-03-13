import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

import getRefs from './js/getRefs';
import fetchCountries from './js/fetchCountries';

import listCauntriesTpl from './js/listCauntries';
import cardCauntriTpl from './js/cardCauntries';
import createCountriesList from './js/listCauntries';
import createCountryInformation from './js/cardCauntries';

const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.countryInputEl.setAttribute('placeholder', 'Enter country name');
// Слушатель на INPUT с debounce
refs.countryInputEl.addEventListener(
  'input',
  debounce(onCountrySearchInput, DEBOUNCE_DELAY)
);

// получаем масив стран
function onCountrySearchInput(evt) {
  const inputText = evt.target.value;
  const valueNormalized = evt.target.value.trim().toLowerCase();

  if (valueNormalized === '') {
    clearAll();
    return;
  } else {
    fetchCountries(valueNormalized)
      .then(countres => {
        const findCountry = countres.filter(({ name }) =>
          name.official.toLowerCase().includes(valueNormalized)
        );

        if (findCountry.length < 2) {
          const markupList = createCountryInformation(findCountry[0]);
          console.log(findCountry[0]);
          refs.countryInfo.innerHTML = markupList;
          refs.countryList.innerHTML = '';
          Notiflix.Notify.success('Here your result');
        } else if (findCountry.length > 1 && findCountry.length <= 10) {
          const markupList = createCountriesList(findCountry);
          refs.countryList.innerHTML = markupList;
          refs.countryInfo.innerHTML = '';

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

function clearAll() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}
