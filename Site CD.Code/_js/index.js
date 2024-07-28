let index = 0;

    function movimentoSlide(passos){
        const slides = document.querySelector('#carrocel_interno');
        const totalSlides = document.querySelectorAll('.carrocel_item').length;
        
        index = (index + passos + totalSlides) % totalSlides;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }