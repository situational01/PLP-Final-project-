// Getting DOM elements
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Function to add a new message to the chat
function addMessage(message, user = false) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  if (user) {
    messageElement.classList.add('user');
  }
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  // Scroll to the bottom after adding a new message
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for the send button
sendBtn.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    // Add user message to chat
    addMessage(message, true);

    // Clear the input field
    messageInput.value = '';

    // Simulate a bot response after a delay
    setTimeout(() => {
      addMessage('This is a bot response.');  // You can replace this with real logic
    }, 1000);
  }
});

// Allow sending messages by pressing Enter key
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendBtn.click();
  }
});
