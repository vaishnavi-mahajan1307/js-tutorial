<?php

$number = 7;
$limit = 10;

echo " Multiplication Table of $number up to $limit:\n";

for ($i = 1; $i <= $limit; $i++){
    $result = $number *1;
    echo "$number x $i = $result\n";
    
}
?>