window.addEventListener("DOMContentLoaded", function() {
    // Themes

    let root = document.querySelector(':root');

    let themeSwitcher = this.document.querySelector(".promo__theme");

    let titles = this.document.querySelectorAll(".title");

    let icon = document.createElement("img");

    
    icon.classList.add("promo__theme-icon");
    themeSwitcher.appendChild(icon);

    data = getComputedStyle(root);

    styles = {
        "dark": {
            bgColor: data.getPropertyValue('--darkModeColor'),
            titleColor: "#F7F9FB",
            mainPhone: "../img/phone/dark/main.png"
        },

        "light": {
            bgColor: data.getPropertyValue('--blocksLightColor'),
            titleColor: "#18181D",
            mainPhone: "../img/phone/light/main.png"
        }
    }

    function toggleTheme() {
        if (localStorage.getItem("theme") === "dark") {
            icon.src = "../icons/mode/sun.png";
            localStorage.setItem("theme", "light");
            setTheme("light")
        } else {
            icon.src = "../icons/mode/moon.png";
            localStorage.setItem("theme", "dark");
            setTheme("dark")
        }
    }

    if (localStorage.getItem("theme") === "dark") {

        icon.src = "../icons/mode/moon.png";
        localStorage.setItem("theme", "dark");
        setTheme("dark");

    } else {
        icon.src = "../icons/mode/sun.png";
        localStorage.setItem("theme", "light");
        setTheme("light");
    }

    function setTheme(mode_) {
        document.querySelector(".promo__phone-img").src = styles[mode_].mainPhone
        document.body.style.cssText = `transition: all 0.3s; background-color: ${styles[mode_].bgColor}`

        titles.forEach((item) => {
            item.style.cssText = `transition: all 0.3s; color: ${styles[mode_].titleColor}`
        })        
    }


    themeSwitcher.addEventListener("click", toggleTheme);

    // Slider

    let slides = document.querySelectorAll(".slider__slide"),
        sliderLine = document.querySelectorAll(".slider__navigation-line"),
        sliderCurrent = this.document.querySelector(".slider__navigation-current")

    let settings = {
        defaultActiveSlide: 0,
        totalSlides: slides.length
    };

    

    let isScrolling = false;

    function setSlide(animate = true) {
        sliderCurrent.textContent = `0${settings.defaultActiveSlide+1}`
        sliderLine.forEach((item, index) => {
            item.classList.remove("active");
    });

    sliderLine[settings.defaultActiveSlide].classList.add("active");

    slides.forEach((item, index) => {
        if (index === settings.defaultActiveSlide) {
            item.style.display = "flex";
        if (animate) {
            item.style.opacity = 0; // Начальная прозрачность 0
            item.style.transition = "opacity 0.5s ease-in-out"; // Плавная анимация
            setTimeout(() => {
            item.style.opacity = 1; // Конечная прозрачность 1
            }, 100); // Добавляем небольшую задержку для запуска анимации
        } else {
            item.style.opacity = 1;
        }
        } else {
            item.style.display = "none";
        }
    });
    }

    setSlide(true);
    
    slides.forEach((item) => {
        item.addEventListener('wheel', function() {
            if (isScrolling) return;
        
            if (settings.defaultActiveSlide >= slides.length-1) {
                settings.defaultActiveSlide = -1;
            } else {
                isScrolling = true;
                settings.defaultActiveSlide += 1;
                setSlide(true); // Вызываем setSlide() без анимации
        
                setTimeout(function() {
                    setSlide(true); // Вызываем setSlide() с анимацией через 0.5 секунды
                    isScrolling = false;
                }, 1000);
            }
            });
    })
    
    









})