<?php

$url = 'http://localhost:5000/getFunction?language=php';

$response = file_get_contents($url);
$data = json_decode($response, true);

$functionName = $data['functionName'];
$functionDefinition = $data['functionDefinition'];

eval($functionDefinition);

$result = addNumbers(2,4);

echo $result;
?>
