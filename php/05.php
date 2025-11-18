<?php

$a = 10;
$b = 20;


$a = $a + $b; // $a now becomes 30
$b = $a - $b; // $b becomes 10 (original value of $a)
$a = $a - $b; // $a becomes 20 (original value of $b)
echo "After swapping: a = $a, b = $b";
?>