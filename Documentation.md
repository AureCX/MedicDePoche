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

<<<<<<< Updated upstream


Envoyer_email:
Récupération des données du formulaire : Ces lignes récupèrent les valeurs soumises via le formulaire HTML en utilisant la méthode POST. $_POST est une superglobale PHP qui permet d'accéder aux données envoyées via une requête HTTP POST.
Définition de l'adresse e-mail de destination : Cette ligne définit l'adresse e-mail à laquelle le message sera envoyé.
Sujet de l'e-mail : Cette ligne crée le sujet de l'e-mail en utilisant la valeur de la variable $nom.
Contenu de l'e-mail : Ces lignes construisent le contenu de l'e-mail en utilisant les valeurs des variables $nom, $email, et $message. "\n" est utilisé pour insérer des sauts de ligne.
En-têtes de l'e-mail : Ces lignes définissent les en-têtes de l'e-mail, incluant l'adresse de l'expéditeur (From), l'adresse de réponse (Reply-To), et le type de logiciel de messagerie (X-Mailer).
Envoi de l'e-mail : Cette ligne utilise la fonction prédéfinie mail() de PHP pour envoyer l'e-mail. Elle retourne true si l'e-mail est envoyé avec succès, sinon elle retourne false.
Vérification de l'envoi de l'e-mail : Ces lignes vérifient si l'e-mail a été envoyé avec succès. Si $mailEnvoye est true, un message de confirmation est affiché. Sinon, un message d'erreur est affiché.




Index: 
window.onload et afficherPopup : Cette fonction JavaScript est exécutée lorsque la page est complètement chargée. Elle appelle la fonction afficherPopup qui affiche une alerte avec un message de bienvenue.
openPopup : Cette fonction JavaScript ouvre une nouvelle fenêtre popup avec les dimensions spécifiées (600x600 pixels). Elle est utilisée pour afficher des pages spécifiques en cliquant sur les zones cliquables de l'image du corps.
showEmergencyNumbers :     showEmergencyNumbers affiche une boîte modale en modifiant son style display pour qu'il soit "block".
hideModal : hideModal cache la boîte modale en modifiant son style display pour qu'il soit "none".
HTML pour la boîte modale : Cette section de HTML crée une boîte modale contenant les numéros d'urgence importants. La boîte modale est initialement cachée (display: none;) et est affichée lorsque showEmergencyNumbers est appelée. La croix de fermeture (<span class="close">) appelle hideModal pour cacher la boîte modale.
Carte de zones cliquables (<map> et <area>) : Cette section définit une carte d'image où chaque zone cliquable appelle la fonction openPopup avec une URL spécifique lorsqu'on clique dessus.
Embedded Chatbot Configuration : Ce script configure et intègre un chatbot sur la page en utilisant le service Chatbase. Le chatbotId et le domain sont spécifiés pour identifier et charger le chatbot.


=======
>>>>>>> Stashed changes
