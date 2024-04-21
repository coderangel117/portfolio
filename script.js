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
