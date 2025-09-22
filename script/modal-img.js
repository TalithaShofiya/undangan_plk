var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('gambar');
var modalImg = document.getElementById("img01");

for (var i = 0; i < images.length; i++) {
    var img = images[i];
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});