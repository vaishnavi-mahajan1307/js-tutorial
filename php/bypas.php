<?php
function addOne($b) {
    $b = $b + 1;
}

$a = 5;
addOne($a);
echo "wihtout by passs reference  $a;" // still 5

?>

<?php

function twoOne(&$b) {
    $b = $b + 1;
}

$a = 5;
twoOne($a);
echo "with by pass reference $a;" // now it's 6

?>