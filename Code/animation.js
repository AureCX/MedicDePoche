// JavaScript code

// Fonction pour déplacer l'image lorsqu'elle est cliquée
function moveImage() {
    var image = document.querySelector('img');
    image.style.transition = 'transform 0.5s ease';
    image.style.transform = 'translateX(100px)'; // Déplacement de l'image de 100 pixels vers la droite
  }
  
  // Ajouter un gestionnaire d'événements pour détecter les clics sur l'image
  var image = document.querySelector('img');
  image.addEventListener('click', moveImage);
  // Fonction pour ajouter un message à la chatbox
function addMessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    // Fait défiler automatiquement vers le bas pour afficher le dernier message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // Fonction pour gérer l'envoi de messages
  function sendMessage() {
    var input = document.getElementById('input');
    var message = input.value.trim(); // Supprime les espaces vides au début et à la fin
    if (message !== '') {
      addMessage(message);
      input.value = ''; // Efface le champ de texte après l'envoi du message
    }
  }
  
  // Ajouter un gestionnaire d'événements pour le clic sur le bouton d'envoi
  var sendButton = document.getElementById('sendButton');
  sendButton.addEventListener('click', sendMessage);
  
  // Ajouter un gestionnaire d'événements pour la touche "Entrée" dans le champ de texte
  var input = document.getElementById('input');
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  });
  
  