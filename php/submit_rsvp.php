<?php
$conn = new mysqli("localhost", "root", "", "undangan_plk");

$id = $_POST["id"];
$name = $_POST["name"];
$jumlah = $_POST["jumlah"];
$attendance = $_POST["attendance"];
$komentar = $_POST["komentar"];

if ($id == "") {
    $sql = "INSERT INTO rsvp (name, jumlah, attendance, komentar) VALUES ('$name', '$jumlah', '$attendance', '$komentar')";
    $conn->query($sql);
}

$conn->close();
?>