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



PHP : 
Récupération des données du formulaire : Cette fonction récupère les valeurs soumises via le formulaire HTML en utilisant la méthode POST. $_POST est une superglobale PHP qui permet d'accéder aux données envoyées via une requête HTTP POST.
Définition de l'adresse e-mail de destination : Cette fonctions définit l'adresse e-mail à laquelle le message sera envoyé.
Sujet de l'e-mail : Cette fonction crée le sujet de l'e-mail en utilisant la valeur de la variable $nom.
Contenu de l'e-mail : Ces lignes construisent le contenu de l'e-mail en utilisant les valeurs des variables $nom, $email, et $message. "\n" est utilisé pour insérer des sauts de ligne.*
En-têtes de l'e-mail : Ces lignes définissent les en-têtes de l'e-mail, incluant l'adresse de l'expéditeur (From), l'adresse de réponse (Reply-To), et le type de logiciel de messagerie (X-Mailer).
Envoi de l'e-mail : Cette ligne utilise la fonction prédéfinie mail() de PHP pour envoyer l'e-mail. Elle retourne true si l'e-mail est envoyé avec succès, sinon elle retourne false.
Vérification de l'envoi de l'e-mail : Ces lignes vérifient si l'e-mail a été envoyé avec succès. Si $mailEnvoye est true, un message de confirmation est affiché. Sinon, un message d'erreur est affiché.


Index : 
openPopup(url) : Cette fonction est utilisée dans les éléments <area> pour ouvrir des pages spécifiques lorsque certaines zones de l'image sont cliquées.
showEmergencyNumbers() : Cette fonction est appelée lorsque le bouton "Les numéros importants" est cliqué, affichant ainsi la fenêtre modale avec les numéros d'urgence.
hideModal() : Cette fonction est appelée lorsque l'utilisateur clique sur l'élément <span> avec la classe close dans le modal, fermant ainsi la fenêtre modale.
HTML Modale :     Ce bloc HTML définit la structure et le contenu de la fenêtre modale.
    L'élément <span> avec la classe close est cliquable et appelle la fonction hideModal() pour fermer le modal.
    Les paragraphes <p> contiennent les informations des numéros d'urgence.
        Définit les styles CSS pour le modal et ses composants.
    .modal : stylise l'arrière-plan du modal, caché par défaut.
    .modal-content : stylise la boîte de contenu du modal.
    .close : stylise le bouton de fermeture (&times;) du modal.



FAQ : 
openPopup(url) : Cette fonction JavaScript ouvre une nouvelle fenêtre de navigateur (popup) avec l'URL spécifiée. Elle prend un argument url qui est l'adresse de la page à ouvrir. Les dimensions de la fenêtre sont fixées à 600x600 pixels.
showEmergencyNumbers() : Cette fonction affiche un modal contenant les numéros d'urgence importants. Elle modifie le style d'un élément HTML avec l'ID myModal pour le rendre visible (display: block).
hideModal() : Cette fonction cache le modal des numéros d'urgence en modifiant le style de l'élément HTML avec l'ID myModal pour le rendre invisible (display: none).
toggleEmailChatbox() : Cette fonction affiche ou cache le formulaire de contact (chatbox d'email). Elle vérifie l'état actuel de l'affichage (display) de l'élément HTML avec l'ID email-chatbox et le bascule entre block et none.



noussupporter : 
openPopup(url) : Ouvre une nouvelle fenêtre popup avec l'URL spécifiée.
showEmergencyNumbers() : Affiche un modal contenant les numéros d'urgence.
hideModal() : Cache le modal affiché.



Style : 
Styles globaux pour le body :     display: flex; flex-direction: column; align-items: center; justify-content: center; : Utilise Flexbox pour centrer le contenu verticalement et horizontalement.
    height: 90vh; : Hauteur de 90% de la hauteur de la fenêtre.
    margin: 0; : Supprime les marges par défaut.
    font-family: Arial, sans-serif; : Définit la police.
    color: hwb(0 0% 100%); : Couleur du texte (noir).
    background-color: #ffffff; : Couleur de fond blanche.
Styles pour les messages de bienvenue :     position: relative; : Position relative pour permettre un positionnement interne.
    text-align: center; : Texte centré.
Styles pour les images :     img : Images centrées horizontalement.
    cross-image-left et cross-image-right : Positionnement absolu des images à gauche et à droite du conteneur.
Styles pour les conteneurs et boutons :     .button-container : Conteneur de boutons centré.
    .container : Conteneur prenant toute la largeur et la hauteur disponibles.
    position: relative; top: 3.33%; left: 3.33%; : Positionnement relatif des boutons.
Styles pour la chatbox :     .chatbox-minimized : Style de la chatbox réduite en bas à droite.
    .chatbox : Style de la chatbox agrandie, initialement cachée.
    .chatbox-visible : Rend la chatbox visible.
Styles pour les messages et les entrées de chat :     .chat-messages : Conteneur de messages avec défilement vertical.
    .chat-input : Style pour la zone de saisie du chat et le bouton d'envoi.
Styles pour le bouton de fermeture :     .close-button : Bouton de fermeture positionné en bas à droite.
    filter: brightness(0) invert(1); : Filtre pour inverser les couleurs de l'image.
Styles divers :     .invisible-button : Style pour rendre les boutons invisibles.
    .croix img : Marge à droite pour l'image.
    .boutons button : Style des boutons avec bordures spécifiques.
    .bouton-tts : Positionnement et style du bouton TTS (Text-to-Speech).
    .image-corps : Positionnement relatif de l'image.
    .titre : Couleur du titre.
    .texte : Positionnement du texte.
    .faq-content : Style pour le contenu FAQ avec défilement vertical et hauteur maximale.