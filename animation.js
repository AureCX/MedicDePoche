// Détecter la langue du navigateur
var langueNavigateur = navigator.language || navigator.userLanguage;

// Rediriger ou charger dynamiquement le contenu pour la langue détectée
if (langueNavigateur.startsWith("fr")) {
    window.location.href = "index.html"; // Redirection vers la version française
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
 // Fonction d'initialisation de la page
function initPage() {
  // Appeler la fonction pour détecter la langue du navigateur
  detecterLangueNavigateur();

  // Appeler la fonction de détection de pays au chargement de la page
  detecterPays();
}

// Fonction pour détecter la langue du navigateur
function detecterLangueNavigateur() {
  var langue = navigator.language || navigator.userLanguage;
  console.log("Langue du navigateur :", langue);
  // Ajoutez le code pour la traduction du site en fonction de la langue détectée ici
}

// Appeler la fonction d'initialisation au chargement de la page
window.onload = initPage;

// Fonction pour afficher les numéros de secours en fonction du pays
function afficherNumSecoursParPays(pays) {
  var numsSecours;

  // Sélectionnez les numéros de secours en fonction du pays
  switch (pays) {
      case "France":
          numsSecours = {
              "Samu": "15",
              "Pompiers": "18",
              "Numéro d'urgence européen": "112",
              "Numéro d'urgence pour les personnes sourdes et malentendantes": "114",
              "Numéro d'appel médical de garde": "116 117",
              "Numéro vert Tabac Info Service": "0800 130 000",
              "Numéro vert Sida Info Service": "0800 235 236"
          };
          break;
      // Ajoutez d'autres pays avec leurs numéros de secours ici
      default:
          // Si le pays n'est pas reconnu, utilisez les numéros de secours par défaut
          numsSecours = {
              "Samu": "15",
              "Pompiers": "18",
              "Numéro d'urgence européen": "112"
          };
  }

  // Affichez les numéros de secours dans la modal
  var modalContent = document.querySelector(".modal-content");
  modalContent.innerHTML = ""; // Effacez le contenu actuel de la modal

  // Parcourez les numéros de secours et affichez-les dans la modal
  for (var service in numsSecours) {
      modalContent.innerHTML += "<p><b>" + service + " :</b> " + numsSecours[service] + "</p>";
  }
}

// Fonction pour détecter automatiquement le pays de l'utilisateur
function detecterPays() {
  // Utilisez une API de géolocalisation pour obtenir le pays de l'utilisateur
  // Vous pouvez utiliser des services comme GeoIP ou l'API de géolocalisation HTML5
  // Par exemple, vous pouvez appeler une API externe pour obtenir les informations de géolocalisation de l'utilisateur
  // Ensuite, utilisez les données de localisation pour déterminer le pays
  // Ici, nous simulons simplement la détection de pays en utilisant une valeur statique
  var pays = "France"; // Remplacez cette valeur par la vraie détection du pays

  // Une fois que le pays est détecté, affichez les numéros de secours correspondants
  afficherNumSecoursParPays(pays);
}

// Fonction pour obtenir la position géographique de l'utilisateur
function obtenirPositionUtilisateur() {
  // Demander au navigateur de fournir la position géographique
  navigator.geolocation.getCurrentPosition(
      function(position) {
          // Extraire les coordonnées de latitude et de longitude
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          // Appeler une fonction pour déterminer le pays en fonction des coordonnées
          determinerPaysParCoordonnees(latitude, longitude);
      },
      function(error) {
          console.error("Erreur de géolocalisation :", error);
          // En cas d'erreur, vous pouvez gérer le problème ici
      }
  );
}

// Fonction pour déterminer le pays en fonction des coordonnées géographiques
function determinerPaysParCoordonnees(latitude, longitude) {
  // Ici, vous devrez utiliser un service tiers pour convertir les coordonnées en informations de localisation (pays)
  // Il existe de nombreux services disponibles pour cela, par exemple : GeoNames, OpenStreetMap Nominatim, etc.
  // Vous devez choisir un service qui répond à vos besoins et obtenir une clé API si nécessaire

  // Exemple : Utiliser GeoNames pour obtenir le nom du pays
  var geoNamesUrl = "http://api.geonames.org/countryCodeJSON?lat=" + latitude + "&lng=" + longitude + "&username=demo";
  
  // Envoyer une requête AJAX au service GeoNames
  fetch(geoNamesUrl)
      .then(response => response.json())
      .then(data => {
          // Extraire le nom du pays à partir des données de réponse
          var pays = data.countryName;
          
          // Utiliser le nom du pays pour afficher les numéros de secours correspondants ou effectuer d'autres actions nécessaires
          afficherNumSecoursParPays(pays);
      })
      .catch(error => {
          console.error("Erreur lors de la récupération du pays :", error);
          // En cas d'erreur, vous pouvez gérer le problème ici
      });
}

// Fonction pour afficher les numéros de secours en fonction du pays
function afficherNumSecoursParPays(pays) {
  // Implémentez cette fonction comme décrit dans la réponse précédente
}
