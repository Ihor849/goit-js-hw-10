// import './css/styles.css';
// import Notiflix from 'notiflix';
// import debounce from 'lodash.debounce';

// import { countryInputEl, countryList, countryInfo } from './js/refs';
// import fetchCountries from './js/fetchCountries';

// // import { countryList } from './templates/country-list';

// const DEBOUNCE_DELAY = 300;

// const refs = {
//   countryInputEl: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };
// refs.countryInputEl.setAttribute('placeholder', 'Enter country name');
// // Слушатель на INPUT с debounce
// refs.countryInputEl.addEventListener(
//   'input',
//   debounce(onCountrySearchInput, DEBOUNCE_DELAY)
// );

// // получаем масив стран
// function onCountrySearchInput(evt) {
//   const inputText = evt.target.value;
//   const valueNormalized = inputText.trim().toLowerCase();

//   console.log(valueNormalized);
//   if (valueNormalized === '') {
//     refs.countryInfo.innerHTML = ' ';
//     refs.countryList.innerHTML = ' ';
//     return;
//   } else {
//     fetchCountries(valueNormalized)
//       .then(countres => {
//         const findCountry = countres.filter(({ name }) =>
//           name.official.toLowerCase().includes(valueNormalized)
//         );
//         if (findCountry.length > 10) {
//           refs.countryList.innerHTML = '';
//           refs.countryInfo.innerHTML = '';
//           Notiflix.Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//           );
//         }
//         if (findCountry.length > 1 && findCountry.length <= 10) {
//           const markupList = createCountriesList(findCountry);
//           refs.countryList.innerHTML = markupList;
//           refs.countryInfo.innerHTML = '';
//           return;
//         }
//         if (findCountry.length === 1) {
//           const markupCountryCard = createCountryInformation(findCountry[0]);
//           refs.countryInfo.innerHTML = markupCountryCard;
//           refs.countryList.innerHTML = '';
//         }
//         if (findCountry.length === 0) {
//           refs.countryList.innerHTML = '';
//           refs.countryInfo.innerHTML = '';
//         }
//       })
//       .catch(error => {
//         // console.log(error);
//         Notiflix.Notify.info('Oops, Something went wrong');
//       });
//   }
// }
// function createCountriesList(countries) {
//   // return countryList;
//   return countries
//     .map(
//       ({ flags: { svg }, name: { official } }) => `
//       <li class="list__item">
//         <img src="${svg}" alt="${official}" width="30" height="30"/>
//         <h4>${official}</h4>
//         </li>
//         `
//     )
//     .join('');
// }

// function createCountryInformation({
//   flags: { svg },
//   name: { official },
//   capital,
//   population,
//   languages,
// }) {
//   const langs = Object.values(languages).join(', ');
//   return `
//   <div class="info__item">
//     <div class="block-img">
//       <img src="${svg}" alt="${official}" width="50"/>
//       <h2>${official}</h2>
//     </div>
//       <p><b>Capital:</b> ${capital}</p>
//       <p><b>Population:</b> ${population}</p>
//       <p><b>Languages:</b> ${langs}</p>
//   </div>
//   `;
// }
// Christmas Island, Montenegro, Burundi
