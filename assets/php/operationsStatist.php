<?php
include 'connection.php';
$sale = $pdo->query('SELECT cur.code,SUM(op.amount) as amountSale,SUM(op.amount*e.sale) as sumSale, e.sale FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id INNER JOIN operations as op ON e.id=op.exchange_id WHERE op.type="sale" GROUP BY cur.code')->fetchAll(PDO::FETCH_ASSOC);

$purchase = $pdo->query('SELECT cur.code,SUM(op.amount) as amountPurchase,SUM(op.amount*e.purchase) as sumPurchase, e.purchase FROM currency as cur 
INNER JOIN exchange_rates as e ON cur.id=e.currency_id INNER JOIN operations as op ON e.id=op.exchange_id WHERE op.type="purchase" GROUP BY cur.code')->fetchAll(PDO::FETCH_ASSOC);

$array = array(
    "sale" => $sale,
    "purchase" => $purchase
);
$result_array = [];
foreach ($sale as $item) {
    $result_array[] = [
        'code' => $item['code'],
        'amountSale' => $item['amountSale'],
        'sumSale' => $item['sumSale']
    ];
}
foreach ($purchase as $item) {
    $flag = 0;
    foreach ($result_array as $key => $elem) {
        if ($item['code'] === $elem['code']) {
            $result_array[$key]['amountPurchase'] = $item['amountPurchase'];
            $result_array[$key]['sumPurchase'] = $item['sumPurchase'];
            $flag = 1;
        }
    }
    if (!$flag) {
        $result_array[] = [
            'code' => $item['code'],
            'amountPurchase' => $item['amountPurchase'],
            'sumPurchase' => $item['sumPurchase']
        ];
    }
}
echo json_encode($result_array);

