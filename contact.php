<?php
$retour = mail('perino.contact@gmail.com',
    'Formulaire de contact rempli',
    $_POST['message'],
    "from:webmaster@gabrielperino.com" ."\r\n" . $_POST['mail']);
if ($retour){
    echo '<p>Votre message a bien été envoyé.</p>';
    header('index.html');
}
