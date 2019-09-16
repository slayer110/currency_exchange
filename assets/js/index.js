//получение элементов страницы и объявление переменных
const selectCur = document.getElementById('currency');
const rate = document.querySelector('#rate');
//Подключение списка валют в выпадающий список
fetch('http://exchange.vi/assets/php/rateExchange.phtml').then(res => res.json())
  .then(list => {
    console.log(list);
    list.forEach((elem) => {
      selectCur.appendChild(new Option(elem['code'], elem['currency_id']))
    });
    const definitionSelectedElement = () => {
      for (let i = 0; i < selectCur.options.length; i++) {
        if (selectCur.options[i].selected) {
         let row= list.filter((elem) => {
            return parseInt(elem['currency_id'])=== parseInt(selectCur.options[i].value)
          });
         rate.innerText=row[0]['sale'];
        }
      }
    };
    definitionSelectedElement();
    selectCur.addEventListener('change', () => {
      definitionSelectedElement();
    })
  });
