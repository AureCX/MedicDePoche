<?php
// Vérifier si le formulaire a été soumis
echo "s0";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    echo "s1";

    // Adresse email où vous souhaitez recevoir les messages
    $destinataire = "letrioinfernalnsi@gmail.com";
    echo "s2";

    // Sujet du message
    $sujet = "Nouveau message de la part de $nom";
    echo "s3";
    // Construire le corps du message
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message\n";
    echo "s4";

    // En-têtes de l'email
    $entetes = "From: $nom <$email>";
    echo "s5";

    // Envoyer l'email
    if (mail($destinataire, $sujet, $contenu, $entetes)) {
        // Votre message a bien été envoyé, rediriger vers la page FAQ
        header("Location: FAQ.html");
        echo "s6";
        exit; // Assurez-vous de terminer l'exécution du script après la redirection
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
        echo "s7";
    }
} else {
    // Redirection si le formulaire n'a pas été soumis
    header("Location: contact.php");
    echo "s8";
    exit;
}
?>

