<?php
if (!empty($_POST)){
    $retour = mail('perino.contact@gmail.com',
    'Formulaire de contact rempli',
    $_POST['message'],
    "from:webmaster@gabrielperino.com" ."\r\n" . $_POST['mail']);
    if ($retour){
        header("Location:/");?>
        <script>alert("Votre message a bien été envoyé, je vous remercie")</script>
        <?php
    }
}
header("Location:/");?>
<a href="https://gabrielperino.com/">retourner sur la page d'accueil</a>