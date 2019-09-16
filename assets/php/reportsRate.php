<?php
include 'connection.php';
$log = $pdo->query('SELECT e.id,cur.code,e.currency_id,e.sale,e.purchase,e.date_time FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id')->fetchAll(PDO::FETCH_ASSOC);
$other = $pdo->query('SELECT cur.code,MAX(e.sale) as saleMax, MIN(e.sale) as saleMIN,MAX(e.purchase) as purchaseMax,MIN(e.purchase) as purchaseMIN,e.date_time,AVG(e.sale) as saleAVG,AVG(e.purchase) as purchaseAVG FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id GROUP BY e.currency_id')->fetchAll(PDO::FETCH_ASSOC);
$array = array(
    "log" => $log,
    "other" => $other
);


echo json_encode($array);

