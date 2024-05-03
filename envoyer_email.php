<?php
// Récupérer les données du formulaire
$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

// Adresse e-mail de destination
$destinataire = 'letrioinfernalnsi@gmail.com';

// Sujet de l'e-mail
$sujet = 'Nouveau message de ' . $nom . ' via le formulaire de contact';

// Contenu de l'e-mail
$contenu = "Nom: $nom\n";
$contenu .= "Email: $email\n";
$contenu .= "Message:\n$message";

// En-têtes de l'e-mail
$headers = 'From: ' . $email . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// Envoi de l'e-mail
$mailEnvoye = mail($destinataire, $sujet, $contenu, $headers);

// Vérifier si l'e-mail a été envoyé avec succès
if ($mailEnvoye) {
    echo '<p>Votre message a bien été envoyé. Nous vous contacterons bientôt.</p>';
} else {
    echo '<p>Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer plus tard.</p>';
}
?>
