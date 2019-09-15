//получение элементов страницы и объявление переменных
// let saveQuery;
// const saveButton = document.querySelector('input[type=submit]');
// const sale = document.getElementById('sale');
// const purchase = document.getElementById('purchase');
// const selectCur = document.getElementById('currency');

//Подключение списка валют в выпадающий список
// const listCur = fetch('http://exchange.vi/assets/php/listOfCurrency.phtml').then(res => res.json())
//   .then(list => {
//     list.forEach((elem) => {
//       selectCur.appendChild(new Option(elem['code'], elem['id']))
//     });
//     const definitionSelectedElement = () => {
//       for (let i = 0; i < selectCur.options.length; i++) {
//         if (selectCur.options[i].selected) {
//           // alert(selectCur.options[i].value)
//         }
//       }
//     };
//     definitionSelectedElement();
//     selectCur.addEventListener('change', () => {
//       definitionSelectedElement();
//     })
//
//   });

//сохранение курса валюты

// saveButton.addEventListener('click', (e) => {
//   if (saveQuery) {
//     saveQuery = undefined
//   }
//   e.preventDefault();
//   saveQuery = fetch('http://exchange.vi/assets/php/saveCurrency.phtml', {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify({saleVal: sale.value, purchaseVal: purchase.value, currencyVal: selectCur.value})
//   })
// });
const tableOfCurrency=document.getElementsByClassName('table');

