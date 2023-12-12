<?php
$nom = htmlspecialchars($_POST['nom']);
$sujet = htmlspecialchars($_POST['sujet']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
// On vérifie si le champ "recaptcha-response" contient une valeur
    if (!empty($_POST['recaptcha-response'])) {
        $envFilePath = __DIR__ . '/.env';

        if (file_exists($envFilePath)) {
            $envContent = file_get_contents($envFilePath);
            $envVariables = parse_ini_string($envContent);
            $secret = $envVariables['SECRET'];

            $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response={$_POST['recaptcha-response']}";

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
            if (!empty($response)) {
                $data = json_decode($response);
                if ($data->success) {
                    if (
                        !empty($nom ) &&
                        !empty($sujet ) &&
                        !empty($email) &&
                        !empty($message)
                    ) {
                        // On nettoie le contenu
                        $nom = strip_tags($nom );
                        $sujet = strip_tags($sujet );
                        $email = strip_tags($email);
                        $message = htmlspecialchars($message);
                        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                            $regex = '/^[a-zA-Z0-9+_.-]+@gabrielperino.com+$/';
                            $match = preg_match($regex, $email);
                            if (!$match) {
                                $retour = mail('perino.contact@gmail.com',
                                    'Formulaire de contact rempli',
                                    "L'utilisateur :" . $email . "\r\n vous a contacté au sujet de : " . $sujet . "\r\n
                                     Voici son message : " . $message,
                                    "from:webmaster@gabrielperino.com" . "\r\n" . $email);
                                header('Location: /');
                            } else {
                                header('Location: index.html');
                            }
                        } else {
                            header('Location: index.html');
                        }
                    } else {
                        header('Location: index.html');
                    }
                } else {
                    header('Location: index.html');
                }
            } else {
                header('Location: index.html');
            }
        } else {
            header('Location: index.html');
        }
    } else {
        header('Location: index.hml');
    }
} else {
    http_response_code(405);
    echo 'Méthode non autorisée';
}

