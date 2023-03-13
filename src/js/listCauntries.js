export default function createCountriesList(countries) {
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
