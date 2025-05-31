function initializeSlider() {
    // Loading screen
    const loadNo = document.querySelector('#load-no div');
    const load = document.querySelector('#load');
    let loadProgress = 0;
    
    const updateLoadProgress = () => {
        loadProgress += Math.random() * 30;
        if (loadProgress > 100) loadProgress = 100;
        loadNo.textContent = Math.round(loadProgress) + '%';
        
        if (loadProgress < 100) {
            requestAnimationFrame(updateLoadProgress);
        } else {
            setTimeout(() => {
                gsap.to(load, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => load.style.display = 'none'
                });
            }, 500);
        }
    };

    updateLoadProgress();

    // Slider functionality
    gsap.registerPlugin(CustomEase);
    CustomEase.create(
        "hop",
        "M0,0 C0.071,0.505 0.192, 0.726 0.318, 0.852 0.45, 0.984 0.504.1 1, 1"
    );

    const slider = document.querySelector('.slider');
    const sliderImages = document.querySelector('.slider-images');
    const sliderIndicator = document.querySelector('.slider-indicators');
    const sliderPerview = document.querySelector('.slider-perview');
    const sliderTitle = document.querySelector('.slider-title');
    const sliderTitleWrapper = document.querySelector('.slider-title-wrapper');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('.slider-title-wrapper');
    const prevSlides = document.querySelectorAll('.perview');
    const Indicators = document.querySelector('.slider-indicators');

    let currentImg = 1;
    let totalSlides = 5;
    let indicatorRotation = 0;

    // Initialize first image
    const firstImage = document.createElement('img');
    firstImage.src = `/camille/1.jpg`;
    firstImage.classList.add('img', 'current');
    sliderImages.appendChild(firstImage);

    const updateCounterAndTitlePosition = () => {
        const counterY = -20 * (currentImg - 1);
        const titleY = -20 * (currentImg - 1);

        gsap.to(counter, {
            y: counterY,
            duration: 1,
            ease: 'hop',
        });

        gsap.to(title, {
            y: titleY,
            duration: 1,
            ease: 'hop',
        });
    };

    const updateActiveSliderPreview = () => {
        prevSlides.forEach((prev) => prev.classList.remove('active'));
        prevSlides[currentImg - 1].classList.add('active');
    };

    const animateSlide = (direction) => {
        const currentImage = document.querySelector('.img.current');
        const nextImage = document.createElement('img');
        nextImage.src = `/camille/${currentImg}.jpg`;
        nextImage.classList.add('img', 'next');
        sliderImages.appendChild(nextImage);

        // Set initial positions
        gsap.set(currentImage, { width: '70%' });
        gsap.set(nextImage, { width: '30%', x: direction === 'left' ? '-100%' : '100%' });

        // Animate the transition
        gsap.to(currentImage, {
            width: '30%',
            x: direction === 'left' ? '100%' : '-100%',
            duration: 1,
            ease: 'power2.inOut'
        });

        gsap.to(nextImage, {
            width: '70%',
            x: 0,
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                // Clean up old images
                const oldImages = document.querySelectorAll('.img');
                oldImages.forEach(img => {
                    if (img !== nextImage) {
                        img.remove();
                    }
                });
                nextImage.classList.remove('next');
                nextImage.classList.add('current');
            }
        });

        indicatorRotation += direction === 'left' ? -90 : 90;
        gsap.to(Indicators, {
            rotation: indicatorRotation,
            duration: 1,
            ease: 'hop',
        });
    };

    document.addEventListener('click', (event) => {
        const sliderwidth = document.querySelector('.slider').clientWidth;
        const clickPosition = event.clientX;
        
        if (sliderPerview.contains(event.target)) {
            const clickedPrev = event.target.closest('.perview');
            
            if (clickedPrev) {
                const clickedIndex = Array.from(prevSlides).indexOf(clickedPrev) + 1;

                if (clickedIndex !== currentImg) {
                    if (clickedIndex < currentImg) {
                        currentImg = clickedIndex;
                        animateSlide('left');
                    } else {
                        currentImg = clickedIndex;
                        animateSlide('right');
                    }
                    updateActiveSliderPreview();
                    updateCounterAndTitlePosition();
                }
            }
            return;
        }

        if (clickPosition < sliderwidth / 2 && currentImg !== 1) {
            currentImg--;
            animateSlide('left');
        } else if (clickPosition > sliderwidth / 2 && currentImg !== totalSlides) {
            currentImg++;
            animateSlide('right');
        }
        updateActiveSliderPreview();
        updateCounterAndTitlePosition();
    });

    const cleanupSlides = () => {
        const imgElements = document.querySelectorAll('.slider-images .img');
        if (imgElements.length > totalSlides) {
            imgElements.forEach(img => {
                img.remove();
            });
        }
    };
}

function slideImage() {
    const currentImage = document.querySelector('.img.current');
    const nextImage = document.querySelector('.img.next');
    const prevImage = document.querySelector('.img.prev');

    // Remove prev class from current image
    if (prevImage) {
        prevImage.classList.remove('prev');
    }

    // Move current to prev
    currentImage.classList.remove('current');
    currentImage.classList.add('prev');

    // Move next to current
    nextImage.classList.remove('next');
    nextImage.classList.add('current');

    // Create new next image
    const newNextImage = document.createElement('img');
    newNextImage.src = images[currentIndex];
    newNextImage.classList.add('img', 'next');
    sliderImages.appendChild(newNextImage);

    // Animate the transition
    gsap.fromTo(
        [currentImage, nextImage],
        {
            x: 0,
            width: '100%'
        },
        {
            x: '-30%',
            width: '30%',
            duration: 1,
            ease: 'power2.inOut',
            onComplete: () => {
                // Remove the old prev image after animation
                if (prevImage) {
                    prevImage.remove();
                }
            }
        }
    );

    // Update counter and preview
    updateCounter();
    updatePreview();
}

// Wait for both DOM and GSAP to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.gsap) {
            initializeSlider();
        } else {
            // If GSAP isn't loaded yet, wait for it
            const checkGSAP = setInterval(() => {
                if (window.gsap) {
                    clearInterval(checkGSAP);
                    initializeSlider();
                }
            }, 100);
        }
    });
} else {
    if (window.gsap) {
        initializeSlider();
    } else {
        // If GSAP isn't loaded yet, wait for it
        const checkGSAP = setInterval(() => {
            if (window.gsap) {
                clearInterval(checkGSAP);
                initializeSlider();
            }
        }, 100);
    }
} 