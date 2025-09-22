function showCashless() {
    document.getElementById("cashless").style.display = "grid";
    document.getElementById("offline").style.display = "none";
}

function showOffline() {
    document.getElementById("offline").style.display = "block";
    document.getElementById("cashless").style.display = "none";
}