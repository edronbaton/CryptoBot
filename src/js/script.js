window.addEventListener("DOMContentLoaded", function() {
    // Themes

    let root = document.querySelector(':root');

    let themeSwitcher = this.document.querySelector(".promo__theme");

    let titles = this.document.querySelectorAll(".title");

    let blocks = this.document.querySelectorAll(".block");
    
    let other_text = this.document.querySelectorAll(".other_text");
    
    let icon = document.createElement("img");

    

    
    icon.classList.add("promo__theme-icon");
    themeSwitcher.appendChild(icon);

    data = getComputedStyle(root);

    styles = {
        "dark": {
            bgColor: data.getPropertyValue('--darkModeColor'),
            titleColor: "#F7F9FB",
            mainPhone: "../img/phone/dark/main.png",
            blockColor: data.getPropertyValue('--blocksDarkColor'),
            otherTextColor: data.getPropertyValue('--otherTextOtherDark'),
            receivePhone: "../img/phone/dark/received.png",
            createAppButton: "../img/other/create_app_dark.png",
            exchangeArrows: "../img/exchange/arrows_dark.png",
            circleBgColor: "white",
            circleTextColor: "black"
        },

        "light": {
            bgColor: data.getPropertyValue('--lightModeColor'),
            titleColor: "#18181D",
            mainPhone: "../img/phone/light/main.png",
            blockColor: data.getPropertyValue('--blocksLightColor'),
            otherTextColor: data.getPropertyValue('--otherTextOtherLight'),
            receivePhone: "../img/phone/light/received.png",
            createAppButton: "../img/other/create_app_light.png",
            exchangeArrows: "../img/exchange/arrows_light.png",
            circleBgColor: "black",
            circleTextColor: "white"
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

        document.querySelector(".features__create-app_button-img").src = styles[mode_].createAppButton
        document.querySelector(".features__exchange_arrows_icon").src = styles[mode_].exchangeArrows
        document.querySelector(".features__send-phone-img").src = styles[mode_].receivePhone


        titles.forEach((item) => {
            item.style.cssText = `transition: all 0.3s; color: ${styles[mode_].titleColor}`
        })     
        
        blocks.forEach((item) => {
            item.style.cssText = `transition: all 0.3s; background-color: ${styles[mode_].blockColor}`
        })

        other_text.forEach((item) => {
            item.style.cssText = `transition: all 0.3s; color: ${styles[mode_].otherTextColor}`
        })

        document.querySelectorAll(".quick_start-number").forEach((item) => {
            item.style.cssText = `color: ${styles[mode_].circleTextColor}; background-color: ${styles[mode_].circleBgColor}`
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
    
    
    setInterval(() => {
        if (settings.defaultActiveSlide+1 >= settings.totalSlides) {
            settings.defaultActiveSlide = 0;
        } else {
            settings.defaultActiveSlide += 1;
        }
        
        
        setSlide()
    }, 2300);


    function setSlide(animate = true) {
        sliderCurrent.textContent = `0${settings.defaultActiveSlide+1}`
        sliderLine.forEach((item) => {
            item.classList.remove("active");
    });

    sliderLine[settings.defaultActiveSlide].classList.add("active");

    slides.forEach((item, index) => {
        if (index === settings.defaultActiveSlide) {
            item.style.display = "flex";
        if (animate) {
            item.style.opacity = 0; // Начальная прозрачность 0
            item.style.transition = "opacity 1.2s ease-in-out"; // Плавная анимация
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
    
    // slides.forEach((item) => {
    //     item.addEventListener('wheel', function() {
    //         if (isScrolling) return;
        
    //         if (settings.defaultActiveSlide >= slides.length-1) {
    //             settings.defaultActiveSlide = -1;
    //         } else {
    //             isScrolling = true;
    //             settings.defaultActiveSlide += 1;
    //             setSlide(true); // Вызываем setSlide() без анимации
        
    //             setTimeout(function() {
    //                 setSlide(true); // Вызываем setSlide() с анимацией через 0.5 секунды
    //                 isScrolling = false;
    //             }, 1000);
    //         }
    //         });
    // })
    
    









})