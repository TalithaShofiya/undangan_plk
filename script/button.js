function tampilkanNavbar() {
    document.body.classList.remove("lock-scroll");

    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });

    document.querySelector('.image-navbar')?.classList.remove('hidden');
    document.querySelector('.music-player')?.classList.remove('hidden');
    document.getElementById("audio")?.play();
    document.getElementById('guest-information')?.remove();
    document.getElementById('btnBuka')?.remove();
}