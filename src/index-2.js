// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


  // import Notiflix from 'notiflix';
  // import 'notiflix/dist/notiflix-3.2.5.min.css';
  
  // import './css/styles.css';
  // import getRefs from './get-refs';
  // import { fetchCountries } from './fetchCountries';
  
  // const debounce = require('lodash.debounce');
  // const DEBOUNCE_DELAY = 300;
  // const refs = getRefs()
  
  // refs.searchBoxEl.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));
  
  // function onSearchBoxInput(e) {
  //   const inputValue = e.target.value.trim();
  //   console.log(inputValue);
  
  //   fetchCountries(inputValue)
  //   .then(renderСountryList)
  //   .catch(error => console.log(error))
  // };


//  MODULE 11  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// ___________________________________________

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3];

//   // 1. Создаём массив промисов
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаем все промисы параллельно и ждем их завершения
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

// _______________________________________________

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}

