<?php
interface Vehicle {
    public function start();
}

class Car implements Vehicle {
    public function start() {
        echo "Car start with key";
    }
}

class Bike implements Vehicle {
    public function start() {
        echo "Bike start with kick/self";
    }
}

class Tractor implements Vehicle {
    public function start() {
        echo "Tractor start with button";
    }
    
}

?>