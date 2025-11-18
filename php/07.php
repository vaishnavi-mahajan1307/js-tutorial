<?php
function factorialRecursive($n) {
    if ($n < 0) {
        return "Factorial is not defined for negative numbers.";
    } elseif ($n == 0 || $n == 1) {
        return 1; 
    } else {
        return $n * factorialRecursive($n - 1); 
    }
}

// Example usage:
$number = 5;
echo "Factorial of " . $number . " is: " . factorialRecursive($number); 
?>