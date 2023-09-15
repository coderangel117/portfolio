<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
// On vérifie si le champ "recaptcha-response" contient une valeur
    if (empty($_POST['recaptcha-response'])) {
        var_dump($_POST['recaptcha-response']);
        echo "empty post response";
    } else {
        // On prépare l'URL
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=6LdZZCooAAAAAALpkddMatKj84lyv091TcfEEj87&response={$_POST['recaptcha-response']}";

        // On vérifie si curl est installé
        if (function_exists('curl_version')) {
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_TIMEOUT, 1);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec($curl);
        } else {
            // On utilisera file_get_contents
            $response = file_get_contents($url);
        }
        // On vérifie qu'on a une réponse
        if (empty($response)) {
            echo "no response ";
        } else {
            $data = json_decode($response);
            if ($data->success) {
                if (
                    !empty($_POST['nom']) &&
                    !empty($_POST['sujet']) &&
                    !empty($_POST['email']) &&
                    !empty($_POST['message'])
                ) {
                    // On nettoie le contenu
                    $nom = strip_tags($_POST['nom']);
                    $sujet = strip_tags($_POST['sujet']);
                    $email = strip_tags($_POST['email']);
                    $message = htmlspecialchars($_POST['message']);


                    if (filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
                        $regex = '/^[a-zA-Z0-9+_.-]+@gabrielperino.com+$/';
                        $match = preg_match($regex, $_POST['mail']);
                        if (!$match) {
                            $retour = mail('perino.contact@gmail.com',
                                'Formulaire de contact rempli',
                                "L'utilisateur :" . $_POST['mail'] . "\r\n vous a contacté au sujet de : " . $_POST['subject'] . "\r\n Voici son message : " . $_POST['message'],
                                "from:webmaster@gabrielperino.com" . "\r\n" . $_POST['mail']);
                            echo "Done";
                        }
                    }
                    else{
                        echo "mail non valide ";
                    }

                }
                else{
                    echo "Formulaire vide ";
                }
            } else {
                var_dump($data);
            }
        }
    }
} else {
    http_response_code(405);
    echo 'Méthode non autorisée';
}

