
const ThemeButton = document.getElementById("ThemeButton");
const html = document.querySelector("html");


let DOM_img = document.createElement("img");
DOM_img.src = "images/icon-cross.svg";

// START ADD DELETE BUTTON
let dBtn = document.createElement("button");
dBtn.classList.add("button");
dBtn.appendChild(DOM_img);
function ToggleTheme() {
    html.classList.toggle("theme-dark");
    html.classList.toggle("theme-light");
}

function ToggleImageTheme() {
    const sun_img = document.createElement("img");
    const moon_img = document.createElement("img");
    moon_img.src = "images/icon-moon.svg";
    sun_img.src = "images/icon-sun.svg";

    ThemeButton.classList.toggle("dark");
    ThemeButton.classList.toggle("light");
    if (ThemeButton.classList.contains("light")) {
        ThemeButton.appendChild(moon_img);
    } else {
        ThemeButton.appendChild(sun_img);
    }
    ThemeButton.removeChild(ThemeButton.children[0]);
}

ThemeButton.addEventListener("click", function () {
    ToggleImageTheme();
    ToggleTheme();
})

function enlargeImage(image) {
    let enlargedImage = document.createElement('div');
    enlargedImage.className = 'enlarged';

    let img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    enlargedImage.appendChild(img);

    enlargedImage.onclick = function() {
        enlargedImage.parentNode.removeChild(enlargedImage);
    };

    document.body.appendChild(enlargedImage);
}

// Get the button:
let mybutton = document.getElementById("to-top");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop < 200) {
        mybutton.style.display = "none";
    } else {
        mybutton.style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
