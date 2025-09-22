function showRSVP() {
    const modal = document.getElementById("rsvpModal");
    modal.style.display = "block";
}

function closeRSVP() {
    const modal = document.getElementById("rsvpModal");
    modal.style.display = "none";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("rsvpModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
