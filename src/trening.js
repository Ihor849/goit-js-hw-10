// import './css/styles.css';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

// import { countryInputEl, countryList, countryInfo } from './js/refs';
// import fetchCountries from './js/fetchCountries';

// const DEBOUNCE_DELAY = 300;

// const refs = {
//   countryInputEl: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// // Слушатель на INPUT с debounce
// refs.countryInputEl.addEventListener(
//   'input',
//   debounce(onCountrySearchInput, DEBOUNCE_DELAY)
// );

// // / Очищает разметку HTML
// // const clearMarkup = element => (element.innerHTML = '');
// // const changeBorderColor = color => (refs.inputEl.style.backgroundColor = color);

// function onCountrySearchInput(e) {
//   //   clearMarkup(refs.countryListEl);
//   //   clearMarkup(refs.countryInfoEl);
//   //   console.log(event.target.value);

//   //   borderColor('white');
//   const searchCountry = e.target.value.trim();

//   if (!e.target.value.trim()) {
//     console.log('dfgegt');
//     return;
//   }

//   fetchCountries(searchCountry)
//     .then(countris => {
//       console.log(countris);
//       if (countris.length > 10) {
//         Notiflix.Notify.info(
//           'Too many matches found. Please enter a more specific name.'
//         );
//         return;
//       }
//       renderMarkup(countris);
//     })
//     .catch(() => {
//       Notiflix.Notify.info('Oops, there is no country with that name');
//     });

//   function renderMarkup(countries) {
//     //   changeBorderColor('khaki');
//     console.log('GGGGG');
//     let result = countries.findIndex(
//       el => el.name.official.toUpperCase() === searchCountry.toUpperCase()
//     );
//     let markupCountryList = '';
//     let markupCountryInfo = '';

//     if (countries.length > 1 && countries.length <= 10 && result) {
//       markupCountryInfo.innerHTML = '';
//       markupCountryList.innerHTML = countries
//         .map(
//           e =>
//             `<li><img src="${e.flags.svg}" alt="flag" width="20"> <span>${e.name.official}</span></li>`
//         )
//         .join('');
//       return;
//     }
//   }
// }
