window.addEventListener("DOMContentLoaded", function() {
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

        icon.src = "../icons/mode/sun.png";
        localStorage.setItem("theme", "light");
        setTheme("light");

    } else {
        icon.src = "../icons/mode/sun.png";
        localStorage.setItem("theme", "light");
        setTheme("light");
    }

    function setTheme(mode_) {
        document.querySelector(".promo__phone-img").src = styles[mode_].mainPhone
        document.body.style.cssText = `transition: all 0.6s; background-color: ${styles[mode_].bgColor}`

        titles.forEach((item) => {
            item.style.cssText = `transition: all 0.6s; color: ${styles[mode_].titleColor}`
        })        
    }


    themeSwitcher.addEventListener("click", toggleTheme);



})