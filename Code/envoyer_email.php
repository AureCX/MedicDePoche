<?php
// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse email où vous souhaitez recevoir les messages
    $destinataire = "letrioinfernalnsi@gmail.com";

    // Sujet du message
    $sujet = "Nouveau message de la part de $nom";

    // Construire le corps du message
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message\n";

    // En-têtes de l'email
    $entetes = "From: $nom <$email>";

    // Envoyer l'email
    if (mail($destinataire, $sujet, $contenu, $entetes)) {
        echo "Votre message a bien été envoyé.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    // Redirection si le formulaire n'a pas été soumis
    header("Location: contact.php");
    exit;
}
?>
