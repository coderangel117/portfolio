require('dotenv').config();

const secret = process.env.SECRET;

if (!secret) {
    console.error('La variable d\'environnement SECRET n\'a pas été définie.');
    process.exit(1); // Quittez l'application en cas d'erreur
}

const recaptchaScript = document.createElement('script');
recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${secret}`;
document.head.appendChild(recaptchaScript);

recaptchaScript.onload = function () {
    grecaptcha.ready(function () {
        grecaptcha
            .execute(secret, {action: 'homepage'})
            .then(function (token) {
                document.getElementById('recaptchaResponse').value = token;
            });
    });
};
