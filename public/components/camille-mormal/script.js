function initializeSlider() {
    console.log('Initializing slider...');
    
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
    const sliderIndicator = document.querySelector('.slider-indicator');
    const sliderPerview = document.querySelector('.slider-perview');
    const sliderTitle = document.querySelector('.slider-title');
    const sliderTitleWrapper = document.querySelector('.slider-title-wrapper');
    const counter = document.querySelector('.counter');
    const title = document.querySelector('.slider-title-wrapper');
    const prevSlides = document.querySelectorAll('.perview');
    const Indicators = document.querySelector('.slider-indicators');

    // Set initial styles
    gsap.set(sliderImages, { overflow: 'hidden' });
    gsap.set('.img', { position: 'absolute', width: '100%', height: '100%' });
    gsap.set('.img img', { width: '100%', height: '100%', objectFit: 'cover' });

    let currentImg = 1;
    let totalSlides = 5;
    let indicatorRotation = 0;

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
        const currentSlide = document.querySelectorAll(".img")[document.querySelectorAll(".img").length - 1];
        const slideImg = document.createElement('div');
        slideImg.classList.add('img');

        const slideImgElem = document.createElement('img');
        slideImgElem.src = `/camille/${currentImg}.jpg`;
        
        // Set initial position based on direction
        const startX = direction === 'left' ? '100%' : '-100%';
        const endX = direction === 'left' ? '-100%' : '100%';
        
        gsap.set(slideImgElem, { x: startX });
        slideImg.appendChild(slideImgElem);
        sliderImages.appendChild(slideImg);

        // Animate current slide out
        gsap.to(currentSlide.querySelector('img'), {
            x: endX,
            duration: 1.5,
            ease: 'power4.Out',   
        });

        // Animate new slide in
        gsap.to(slideImgElem, {
            x: '0%',
            duration: 1.5,
            ease: 'power4.Out',
        });

        cleanupSlides();

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

// Wait for both DOM and GSAP to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, checking for GSAP...');
        if (window.gsap) {
            console.log('GSAP found, initializing...');
            initializeSlider();
        } else {
            console.log('GSAP not found, waiting...');
            // If GSAP isn't loaded yet, wait for it
            const checkGSAP = setInterval(() => {
                if (window.gsap) {
                    console.log('GSAP found after waiting, initializing...');
                    clearInterval(checkGSAP);
                    initializeSlider();
                }
            }, 100);
        }
    });
} else {
    console.log('DOM already loaded, checking for GSAP...');
    if (window.gsap) {
        console.log('GSAP found, initializing...');
        initializeSlider();
    } else {
        console.log('GSAP not found, waiting...');
        // If GSAP isn't loaded yet, wait for it
        const checkGSAP = setInterval(() => {
            if (window.gsap) {
                console.log('GSAP found after waiting, initializing...');
                clearInterval(checkGSAP);
                initializeSlider();
            }
        }, 100);
    }
} 