//получение элементов страницы
const saveButton = document.querySelector('input[type=submit]');
const sale = document.getElementById('sale');
const purchase = document.getElementById('purchase');

//Подключение списка валют в выпадающий список
const listCur = fetch('http://exchange.vi/assets/php/listOfCurrency.phtml').then(res => res.json())
  .then(list => {
    const selectCur = document.getElementById('currency');
    list.forEach((elem) => {
      selectCur.appendChild(new Option(elem, elem))
    });
    const definitionSelectedElement = () => {
      for (let i = 0; i < selectCur.options.length; i++) {
        if (selectCur.options[i].selected) {
          // alert(selectCur.options[i].value)
        }
      }
    };
    definitionSelectedElement();
    selectCur.addEventListener('change', () => {
      definitionSelectedElement();
    })

  });

//сохранение курса валюты

saveButton.addEventListener('click', (e) => {
  if (saveQuery) {
    delete saveQuery
  }
  e.preventDefault();
  const saveQuery = fetch('http://exchange.vi/assets/php/saveCurrency.phtml', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({saleVal: sale.value, purchaseVal: purchase.value})
  })
});
