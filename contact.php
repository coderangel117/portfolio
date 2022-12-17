<?php
if (!empty($_POST)){
    $retour = mail('perino.contact@gmail.com',
    'Formulaire de contact rempli',
    "L'utilisateur :" . $_POST['mail'] . "\r\n vous a contacté au sujet de : " . $_POST['subject'] ."\r\n Voici son message : ". $_POST['message'],
    "from:webmaster@gabrielperino.com" ."\r\n" . $_POST['mail']);
    if ($retour){
        header("Location:/");
    }
    else{
    header("Location:/");
    }
}
header("Location:/");?>
        <script>alert("Votre message a bien été envoyé, je vous remercie")</script>

<a href="https://gabrielperino.com/">retourner sur la page d'accueil</a>
