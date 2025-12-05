document.addEventListener('DOMContentLoaded', () => {
    const newMessageInput = document.getElementById('new-message');
    const sendMessageButton = document.getElementById('send-message');
    const messageBox = document.getElementById('message-box');

    sendMessageButton.addEventListener('click', () => {
        const messageText = newMessageInput.value.trim();

        if (messageText !== '') {
            // Create a new input element for the sent message
            const sentMessageElement = document.createElement('div');
            sentMessageElement.classList.add('sent-message');
            sentMessageElement.textContent = messageText;

            // Append the new message to the message box
            messageBox.appendChild(sentMessageElement);

            // Clear the input field
            newMessageInput.value = '';
            messageBox.scrollTop = messageBox.scrollHeight;
        }
    });

    newMessageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessageButton.click();
        }
    });
});
