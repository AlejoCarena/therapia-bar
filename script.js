document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelectorAll('.toggle');
    const dayOptions = document.querySelectorAll('.day-options');
    const promo = document.getElementById('promo');
    const slider = document.querySelector('.slider');
    
    toggle.forEach((toggle) => {
        toggle.addEventListener('click', () => {
            promo.innerHTML = ``;
            slider.style.display = 'flex'; 
            dayOptions.forEach((option, index) => {
                setTimeout(() => {
                    option.classList.toggle('show');
                }, index * 200); // Ajusta el tiempo de retraso para cada opción
            });
        });
    });
});

function jueves(){
    const promo = document.getElementById('promo');
    document.querySelector('.slider').style.display = 'none';
    promo.innerHTML =``;
    setTimeout(() => {
        promo.innerHTML = `<img class="img" src="imgs/Flyer domingo promo.png" alt="">`;
        promo.classList.add('show'); // Añadir la clase para mostrar
    }, 200); // Tiempo de espera para suavidad
}

function viernes(){
    const promo = document.getElementById('promo');
    document.querySelector('.slider').style.display = 'none';
    promo.innerHTML =``;
    setTimeout(() => {
        promo.innerHTML = `<img class="img" src="imgs/Flyer sab.png" alt="">`;
        promo.classList.add('show'); // Añadir la clase para mostrar
    }, 200); // Tiempo de espera para suavidad
}

function sabado(){
    const promo = document.getElementById('promo');
    document.querySelector('.slider').style.display = 'none';
    promo.innerHTML =``;
    setTimeout(() => {
        promo.innerHTML = `<img class="img" src="imgs/Flyer domingo promo.png" alt="">`;
        promo.classList.add('show'); // Añadir la clase para mostrar
    }, 200); // Tiempo de espera para suavidad
}

function domingo(){
    const promo = document.getElementById('promo');
    document.querySelector('.slider').style.display = 'none';
    promo.innerHTML =``;
    setTimeout(() => {
        promo.innerHTML = `<img class="img" src="imgs/Flyer domingo promo.png" alt="">`;
        promo.classList.add('show'); // Añadir la clase para mostrar
    }, 200); // Tiempo de espera para suavidad
}

// Coordenadas de la ubicación de tu bar
var barLocation = [-31.43054963216361, -62.0878579448939]; // Ejemplo de coordenadas de Nueva York

// Inicializar el mapa
var map = L.map('map').setView(barLocation, 15);

// Agregar capa de mapa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar marcador en la ubicación del bar
L.marker(barLocation).addTo(map)
    .bindPopup('Therapia')
    .openPopup();

document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + totalSlides) % totalSlides) {
                slide.classList.add('prev');
            } else if (i === (index + 1) % totalSlides) {
                slide.classList.add('next');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000);

    showSlide(currentSlide);
});
