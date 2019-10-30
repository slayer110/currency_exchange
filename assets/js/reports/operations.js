const operStat = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
const operLog = document.getElementsByClassName('table')[1].getElementsByTagName('tbody')[0];
fetch('http://exchange.vi/assets/php/operationsStatist.php').then(res => res.json()).then(res1 => {
  res1.forEach((elem) => {
    const tr = document.createElement('tr');
    for (let i in elem) {
      const td = document.createElement('td');
      td.innerHTML = elem[i];
      tr.appendChild(td);
    }
    operStat.appendChild(tr);
  })
});

fetch('http://exchange.vi/assets/php/operationLog.php').then(res => res.json()).then(res1 => {
  res1.forEach((elem) => {
    const tr = document.createElement('tr');
    for (let i in elem) {
      const td = document.createElement('td');
      switch (elem[i]) {
        case 'sale':
          td.innerText = 'Продажа';
          break;
        case 'purchase':
          td.innerText = 'Покупка';
          break;
        default:
          td.innerHTML = elem[i];
      }
      tr.appendChild(td);
    }
    operLog.appendChild(tr);
  })
});
