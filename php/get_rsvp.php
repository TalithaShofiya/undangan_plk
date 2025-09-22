<?php
$conn = new mysqli("localhost", "root", "", "undangan_plk");
$result = $conn->query("SELECT * FROM rsvp ORDER BY id DESC");

echo "<table class='tabel-tamu' border='1'>
<tr><th>Nama</th><th>Jumlah tamu</th><th>Kehadiran</th><th>Komentar</th></tr>";
while ($row = $result->fetch_assoc()) {
    echo "<tr>
        <td>{$row['name']}</td>
        <td>{$row['jumlah']}</td>
        <td>{$row['attendance']}</td>
        <td>{$row['komentar']}</td>
    </tr>";
}
echo "</table>";
$conn->close();
?>
