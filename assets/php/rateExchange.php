<?php
include 'connection.php';
$stm = $pdo->query('SELECT e.id,cur.code,e.currency_id,e.sale,e.purchase,e.date_time FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id WHERE 
e.date_time IN(SELECT MAX(date_time) FROM exchange_rates GROUP BY currency_id )')->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($stm);

