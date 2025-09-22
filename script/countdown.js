let tanggal = new Date("Dec 14, 2036 00:00:00").getTime();

let x = setInterval(function() {
    let sekarang = new Date().getTime();
    let selisih = tanggal - sekarang;

    let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    let detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = hari + " <p>Day(s)</p>";
    document.getElementById("jam").innerHTML = jam + " <p>Hour(s)</p>";
    document.getElementById("menit").innerHTML = menit + " <p>Minute(s)</p>";
    document.getElementById("detik").innerHTML = detik + " <p>Second(s)</p>";

    if (selisih < 0) {
        clearInterval(x);
        document.getElementById("hari").innerHTML = "0 <p>Day(s)</p>";
        document.getElementById("jam").innerHTML = "0 <p>Hour(s)</p>";
        document.getElementById("menit").innerHTML = "0 <p>Minute(s)</p>";
        document.getElementById("detik").innerHTML = "0 <p>Second(s)";
    }
}, 1000);