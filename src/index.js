fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


  import Notiflix from 'notiflix';
  import 'notiflix/dist/notiflix-3.2.5.min.css';
  
  import './css/styles.css';
  import getRefs from './get-refs';
  import { fetchCountries } from './fetchCountries';
  
  const debounce = require('lodash.debounce');
  const DEBOUNCE_DELAY = 300;
  const refs = getRefs()
  
  refs.searchBoxEl.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));
  
  function onSearchBoxInput(e) {
    const inputValue = e.target.value.trim();
    console.log(inputValue);
  
    fetchCountries(inputValue)
    .then(renderСountryList)
    .catch(error => console.log(error))
  };


