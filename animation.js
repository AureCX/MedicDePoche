// Détecter la langue du navigateur
var langueNavigateur = navigator.language || navigator.userLanguage;

// Rediriger ou charger dynamiquement le contenu pour la langue détectée
if (langueNavigateur.startsWith("fr")) {
    window.location.href = "index_fr.html"; // Redirection vers la version française
} else if (langueNavigateur.startsWith("es")) {
    window.location.href = "index_es.html"; // Redirection vers la version espagnole
} else {
    // Chargez la version par défaut du site si aucune langue n'est détectée
}


