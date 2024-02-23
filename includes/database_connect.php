<?php
$conn = mysqli_connect("127.0.0.1","root","","pglife");

if(mysqli_connect_error()){
    echo"There is an error while making connection". mysqli_connect_error();
    return;
}