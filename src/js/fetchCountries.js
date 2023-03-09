// Функция получающая масив
const BASE_API = 'https://restcountries.com/v3.1/';
const SEARCH_BY_NAME = `all/`;
const FIELDS = `?fields=name,capital,population,flags,languages`;

export default function fetchCountries(name) {
  return fetch(`${BASE_API}${SEARCH_BY_NAME}${FIELDS}`).then(respons => {
    if (!respons.ok) {
      throw new Error(respons.status);
    }
    return respons.json();
  });
}
