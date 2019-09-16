<?php
include 'connection.php';
$data = json_decode(file_get_contents('php://input'), true);
$sale = $data['saleVal'];
$purchase = $data['purchaseVal'];
$id_currency = $data['currencyVal'];
$sql = 'INSERT INTO exchange_rates VALUES (NULL,' . $id_currency . ',' . $sale . ',' . $purchase .',NOW())';
$rows = $pdo->exec($sql);
?>
