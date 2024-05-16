404:
<div class="container">: Agit comme un conteneur principal pour tout le contenu de la page d'erreur 404. Il est stylé pour centrer et mettre en forme le contenu de manière cohérente.
.container: La classe .container est utilisée pour appliquer des styles CSS spécifiques à un élément HTML, en l'occurrence un <div>, qui agit comme un conteneur principal pour le contenu de la page.
<h1> : Titre principal de la page, indiquant clairement qu'il s'agit d'une erreur 404.
<p> :  Fournit un message d'excuse indiquant que la page demandée n'a pas été trouvée.
<img> :  Affiche une image illustrative pour l'erreur 404.
Lien de retour à la page d'accueil : Fournit un lien cliquable permettant de retourner à la page d'accueil.


Animation:
initPage : Cette fonction est appelée lors du chargement de la page. Elle appelle deux autres fonctions : detecterLangueNavigateur pour détecter la langue du navigateur et detecterPays pour détecter automatiquement le pays de l'utilisateur.
detecterLangueNavigateur : Cette fonction détecte la langue du navigateur en utilisant les propriétés navigator.language ou navigator.userLanguage (selon la compatibilité du navigateur). Elle affiche la langue détectée dans la console et peut contenir du code pour charger les traductions appropriées.
detecterPays : Cette fonction simule la détection du pays de l'utilisateur en utilisant une valeur statique ("France"). En pratique, cette fonction serait améliorée pour détecter le pays dynamiquement. Elle appelle afficherNumSecoursParPays pour afficher les numéros de secours en fonction du pays détecté.
obtenirPositionUtilisateur :  Cette fonction utilise l'API de géolocalisation HTML5 pour obtenir la position géographique de l'utilisateur (latitude et longitude). En cas de succès, elle appelle determinerPaysParCoordonnees avec les coordonnées. En cas d'erreur, elle affiche un message d'erreur dans la console.
determinerPaysParCoordonnees : Cette fonction utilise un service tiers (GeoNames) pour convertir les coordonnées géographiques en informations sur le pays. Elle envoie une requête HTTP à l'URL de l'API GeoNames et extrait le nom du pays à partir de la réponse JSON. Elle appelle ensuite afficherNumSecoursParPays avec le nom du pays. En cas d'erreur, elle affiche un message d'erreur dans la console.
afficherNumSecoursParPays : Cette fonction affiche les numéros de secours pour un pays donné. Elle utilise un switch pour définir les numéros de secours en fonction du pays. Ensuite, elle sélectionne l'élément .modal-content dans le DOM, efface son contenu actuel, et ajoute les numéros de secours dans la modal.