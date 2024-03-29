//получение элементов страницы и объявление переменных
const editRateSale = document.getElementById('sale');
const editRatePurchase = document.getElementById('purchase');
const editCur = document.getElementById('cur');
const buttonSaveEdit = document.querySelectorAll('button.btn.btn-secondary')[0];
const pen = document.getElementsByClassName('fa-pen');
let saveQuery;
const tableOfCurrency = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

//сохранение курса валюты
updateListRates = () => {
  fetch('http://exchange.vi/assets/php/rateExchange.php').then(result => result.json())
    .then(rates => {
      console.log(rates)
      tableOfCurrency.innerHTML = "";
      rates.forEach((elem,index) => {
        const tr = document.createElement('tr');
        for (let i in elem) {
          if (i === 'currency_id' || i === 'id') {
            tr.setAttribute('curId', elem['currency_id']);
            continue
          }
          const td = document.createElement('td');
          td.innerHTML = elem[i];
          tr.appendChild(td);
        }
        const td = document.createElement('td');
        td.innerHTML = '<i class="fas fa-pen" style="color: blue;cursor: pointer" data-toggle="modal" data-target="#exampleModal"></i>';

        tr.appendChild(td);
        tableOfCurrency.appendChild(tr);

        pen[index].addEventListener('click', (e) => {
          const curId = e.target.parentElement.parentElement;
          console.log(curId);
          editCur.innerText = curId.cells[0].innerText;
          editRateSale.value = curId.cells[1].innerHTML;
          editRatePurchase.value = curId.cells[2].innerHTML;
          editRatePurchase.setAttribute('curId', curId.getAttribute('curId'))
        });

      });

    });
};

updateListRates();
//сохранение изменений
buttonSaveEdit.addEventListener('click', (e) => {
  if (saveQuery) {
    saveQuery = undefined
  }
  e.preventDefault();
  saveQuery = fetch('http://exchange.vi/assets/php/saveCurrency.php', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      saleVal: editRateSale.value,
      purchaseVal: editRatePurchase.value,
      currencyVal: editRatePurchase.getAttribute('curId'),
    })
  }).then(updateListRates());
});
