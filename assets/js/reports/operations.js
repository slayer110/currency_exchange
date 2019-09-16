const oper = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];

fetch('http://exchange.vi/assets/php/operations.php').then(res => res.json()).then(res1 => {
  console.log(res1)
  res1.forEach((elem) => {
    const tr = document.createElement('tr');
    for (let i in elem) {
      const td = document.createElement('td');
      td.innerHTML = elem[i];
      tr.appendChild(td);
    }
    oper.appendChild(tr);
  })
});
