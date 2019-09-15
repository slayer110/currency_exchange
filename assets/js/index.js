//получение элементов страницы и объявление переменных
const editRateSale = document.getElementById('sale');
const editRatePurchase = document.getElementById('purchase');
const editCur = document.getElementById('cur');
const buttonSaveEdit=document.querySelectorAll('button.btn.btn-primary');
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
const tableOfCurrency = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
const listCur = fetch('http://exchange.vi/assets/php/rateExchange.phtml').then(result => result.json())
  .then(rates => rates.forEach(elem => {
    const tr = document.createElement('tr');
    for (let i in elem) {
      if (i === 'currency_id') {
        tr.setAttribute('curId', elem[i]);
        continue
      }
      const td = document.createElement('td');
      td.innerHTML = elem[i];
      tr.appendChild(td);
    }
    const td = document.createElement('td');
    td.innerHTML = '<i class="fas fa-pen" style="color: blue;cursor: pointer" data-toggle="modal" data-target="#exampleModal"></i>';
    td.addEventListener('click', (e) => {
      const curId = e.target.parentElement.parentElement;
      editCur.innerText = curId.cells[1].innerText;
      editRateSale.value = curId.cells[2].innerHTML;
      editRatePurchase.value = curId.cells[3].innerHTML;
    });
    tr.appendChild(td);
    tableOfCurrency.appendChild(tr)
  }));

