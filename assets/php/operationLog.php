<?php
include 'connection.php';
$log = $pdo->query('SELECT cur.code,op.type,op.amount,e.sale, e.purchase,op.date FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id INNER JOIN operations as op ON op.exchange_id=e.id')->fetchAll(PDO::FETCH_ASSOC);


foreach ($log as $key => $item){
    if ($item['type'] == 'purchase'){
        $sumByn = $item['amount'] * $item['purchase'];
    }else{
        $sumByn = $item['amount'] * $item['sale'];
    }

    $log[$key] = [
      'code' => $item['code'],
      'type' => $item['type'],
      'amount' => $item['amount'],
      'sumByn' => $sumByn,
      'date' => $item['date']
    ];
}
echo json_encode($log);
