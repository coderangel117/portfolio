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