<?php

$url = 'http://localhost:3000/getFunction?language=php';

$response = file_get_contents($url);
$data = json_decode($response, true);

$functionName = $data['functionName'];
$functionDefinition = $data['functionDefinition'];

eval($functionDefinition);
// addNumbers explicitly define nagare pani,
// since functionDefinition mai function name xa, this function becomes available
// scope chai herna parxa paxi
$result = addNumbers(2,4);
echo $result;
?>
