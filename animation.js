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

// JavaScript pour charger et appliquer les traductions
fetch('fr.json') // Charger le fichier JSON de traduction approprié
  .then(response => response.json())
  .then(data => {
    // Remplacer les chaînes de texte dans le document HTML
    Object.keys(data).forEach(key => {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = data[key];
      }
    });
  })
  .catch(error => console.error('Error loading translations:', error));


