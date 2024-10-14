let currentIndex=0;


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    document.querySelector('.flex').style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    document.querySelector('.flex').style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(nextSlide, 3000); 