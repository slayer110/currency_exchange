//получение элементов страницы и объявление переменных
const selectCur = document.getElementById('currency');
const rate = document.querySelector('#rate');
const typeRate = document.getElementById('type');
const calculation = document.getElementById('calculation');
const amount = document.getElementById('amount');
const sum = document.getElementById('sum');

//Подключение списка валют в выпадающий список
fetch('http://exchange.vi/assets/php/rateExchange.php').then(res => res.json())
  .then(list => {
    list.forEach((elem) => {
      selectCur.appendChild(new Option(elem['code'], elem['currency_id']))
    });
    const definitionSelectedRate = () => {
      for (let i = 0; i < selectCur.options.length; i++) {
        if (selectCur.options[i].selected) {
          let row = list.filter((elem) => {
            return parseInt(elem['currency_id']) === parseInt(selectCur.options[i].value)
          });
          rate.setAttribute('id_cur', row[0].id);
          switch (typeRate.value) {
            case 'sale':
              rate.innerHTML = row[0]['sale'];
              break;
            case 'purchase':
              rate.innerHTML = row[0]['purchase'];
              break
          }
        }
      }
    };
    definitionSelectedRate();
    selectCur.addEventListener('change', () => {
      definitionSelectedRate();
      amount.innerText = '';
    });
    typeRate.addEventListener('change', () => {
      definitionSelectedRate();
      amount.innerText = '';
    })
  });

//расчёт
calculation.addEventListener('click', () => {
  if (sum.value == "") {
    return
  }
  amount.innerText = sum.value * rate.innerText;
  fetch('http://exchange.vi/assets/php/logOperations.php', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      exchange_id: rate.getAttribute('id_cur'),
      amountVal: sum.value,
      typeVal: typeRate.value,
      sumVal: amount.innerText
})
})
});
sum.addEventListener('focus', () => {
  amount.innerText = '';
});
