const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body')

btnTema.addEventListener('click', function () {
    bodyHalaman.classList.toggle('light-mode');
    if (bodyHalaman.classList.contains('light-mode')) {
        btnTema.textContent = '🌙 Mode Gelap';
    } else {
        btnTema.textContent = '☀ Mode Terang';
    }
});

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault();
    elemenModal.classList.add('show');
});

btnTutupModal.addEventListener('click', function () {
   elemenModal.classList.remove('show');
});
const stars = document.querySelectorAll('.star');
const hasil = document.getElementById('hasil');
let nilai = 0;

function tampilkan(jumlah) {
    stars.forEach(star => {
        star.classList.toggle('active', star.dataset.value <= jumlah);
    });
}

stars.forEach(star => {
    star.addEventListener('mouseover', () => tampilkan(star.dataset.value));
    star.addEventListener('mouseout', () => tampilkan (nilai));
    star.addEventListener('click', () => {
        nilai = star.dataset.value;
        tampilkan(nilai);
        hasil.textContent = 'Rating kamu: $(nilai) dari 5';
    });
});