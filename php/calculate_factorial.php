<?php
if (isset($_POST['number'])) {
    $number = (int)$_POST['number']; 

    function factorialRecursive($n) {
        if ($n < 0) {
            return "Factorial is not defined for negative numbers.";
        } elseif ($n == 0 || $n == 1) {
            return 1; 
        } else {
            return $n * factorialRecursive($n - 1); 
        }
    }

}

echo "Factorial of " . $number . " is: " . factorialRecursive($number); 
?>