// JavaScript code
  // Fonction pour ajouter un message à la chatbox
function addMessage(message) {
    var chatMessages = document.getElementById('chat-messages');
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatMessages.appendChild(newMessage);
    // Fait défiler automatiquement vers le bas pour afficher le dernier message
    chatMessages.scrollTop = chatMessages.scrollHeight;
    console.log('Message ajouté à la chatbox :', message);
  }
  
  // Fonction pour gérer l'envoi de messages
  function sendMessage() {
    var input = document.getElementById('input');
    var message = input.value.trim(); // Supprime les espaces vides au début et à la fin
    if (message !== '') {
      addMessage(message);
      input.value = ''; // Efface le champ de texte après l'envoi du message
      console.log('Message envoyé :', message);
    }
  }
  
  // Ajouter un gestionnaire d'événements pour le clic sur le bouton d'envoi
  var sendButton = document.querySelector('button'); // Sélectionne le premier bouton trouvé
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
function askChatGPT(question) {
  console.log('Question envoyée à ChatGPT :', question);
  // Envoyer la question à l'API de GPT-3.5 (vous devez remplacer 'YOUR_API_KEY' par votre clé API réelle)
  fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
          model: 'text-davinci-003', // Modèle GPT-3.5 à utiliser
          prompt: question, // Question de l'utilisateur
          max_tokens: 100 // Nombre maximal de tokens dans la réponse
      })
  })
  .then(response => response.json())
  .then(data => {
      // Vérifier si data.choices est défini et non vide
      if (data.choices && data.choices.length > 0) {
          // Récupérer la réponse de ChatGPT
          const answer = data.choices[0].text.trim();
          // Afficher la réponse dans la chatbox
          addMessage(answer, false);
      } else {
          // Si aucune réponse n'est renvoyée, afficher un message d'erreur
          addMessage("Sorry, nothing has been found.", false);
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

