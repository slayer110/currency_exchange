<?php
include 'connection.php';
$data = json_decode(file_get_contents('php://input'), true);
$amount = $data['amountVal'];
$type = $data['typeVal'];
$id_exchange = $data['exchange_id'];
$sum = $data['sumVal'];
$sql = "INSERT INTO operations VALUES (NULL,'$id_exchange','$amount','$type','$sum',NOW())";
$rows = $pdo->exec($sql);
?>