
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header'
import Nav from './Nav'
import App from './App';
import Footer from './Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <App />
    <Footer />
    
  </React.StrictMode>
);


          // СТАРЫЙ МЕТОД ЗАПРОСОВ Владилен + деструктуризация
// const requestURL = 'https://jsonplaceholder.typicode.com/users'
// function sendRequest(method, url){
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open(method, url, true)
//     xhr.responseType = 'json'    // преобразование аналогичное JSON.parse
//     xhr.onload = function() {
//       if(xhr.status >= 400){
//         reject(xhr.response)
//       }
//       else {
//         resolve(xhr.response)
//       }
//       // let data = JSON.parse(this.response)
//       for(let i = 0; i < xhr.length; i++){
//         let {city, street, suite, ...rest} = data[i].address
//       }
//     }
//     xhr.onerror = () => {reject(xhr.response)}
//     xhr.send()
//   })
// }
// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))





