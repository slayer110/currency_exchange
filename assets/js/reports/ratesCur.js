const logCurrency = document.getElementsByClassName('table')[0].getElementsByTagName('tbody')[0];
const RateMaxMin = document.getElementsByClassName('table')[1].getElementsByTagName('tbody')[0];
const RateAvg = document.getElementsByClassName('table')[2].getElementsByTagName('tbody')[0];
fetch('http://exchange.vi/assets/php/reportsRate.php').then(result => result.json())
  .then(rates => {
    logCurrency.innerHTML = "";
    rates['log'].forEach(elem => {
      const tr = document.createElement('tr');
      for (let i in elem) {
        if (i === 'currency_id') {

          continue
        }
        const td = document.createElement('td');
        td.innerHTML = elem[i];
        tr.appendChild(td);
      }
      logCurrency.appendChild(tr)
    });
    rates['other'].forEach(elem => {
      const tr = document.createElement('tr');
      for (let i in elem) {
        if (i === 'saleAVG' || i === 'purchaseAVG' || i === 'date_time' || i === 'purchaseAVG') {
          continue
        }
        const td = document.createElement('td');
        td.style.textAlign = "center";
        td.innerHTML = elem[i];
        tr.appendChild(td);
      }
      RateMaxMin.appendChild(tr)
    });
    rates['other'].forEach(elem => {
      const tr = document.createElement('tr');
      for (let i in elem) {
        if (i==='code'||i === 'saleAVG' || i === 'purchaseAVG' || i === 'purchaseAVG') {
          const td = document.createElement('td');
          td.style.textAlign = "center";
          td.innerHTML = elem[i];
          tr.appendChild(td);
        }
        RateAvg.appendChild(tr)
      }
    })
  });
