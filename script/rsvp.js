document.addEventListener('DOMContentLoaded', function () {
      const form = document.getElementById('rsvpForm');
      form.addEventListener('submit', function (e) {
      e.preventDefault();

      const id = document.getElementById('id').value;
      const name = document.getElementById('name').value;
      const jumlah = document.getElementById('jumlah').value;
      const attendance = document.getElementById('attendance').value;
      const komentar = document.getElementById('komentar').value;

      if (!name || !jumlah || !attendance || !komentar) {
        alert("Mohon lengkapi semua field!");
        return;
      }

      fetch("php/submit_rsvp.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `id=${encodeURIComponent(id)}&name=${encodeURIComponent(name)}&jumlah=${encodeURIComponent(jumlah)}&attendance=${encodeURIComponent(attendance)}&komentar=${encodeURIComponent(komentar)}`
      })
      .then(() => {
        alert("Data berhasil disimpan!");
        tampilkanTamu();
        form.reset();
        document.getElementById("id").value = "";
      })
      .catch(err => console.error("Gagal kirim data:", err));
    });

    tampilkanTamu();
});

  function tampilkanTamu() {
    fetch("php/get_rsvp.php")
      .then(res => res.text())
      .then(data => {
        document.getElementById("rsvpTable").innerHTML = data;
      })
      .catch(err => console.error("Gagal load data:", err));
}