// JavaScript code
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
// Fonction pour ouvrir et fermer la chatbox
function toggleChatbox() {
  var chatbox = document.getElementById("chatbox");
  var closeButton = document.querySelector(".close-button"); // Sélectionner le bouton de fermeture
  
  chatbox.classList.toggle("chatbox-visible");
  
  // Vérifier si la chatbox est visible
  if (chatbox.classList.contains("chatbox-visible")) {
    closeButton.style.display = "block"; // Afficher le bouton de fermeture
  } else {
    closeButton.style.display = "none"; // Masquer le bouton de fermeture
  }
}
