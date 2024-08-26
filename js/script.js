function typeMyMessage() {
  const message = "I am Sergio Silva.";
  const element = document.querySelector("#typing-text");
  const typeSpeed = 150;

  for (let i = 0; i < message.length; i++) {
    setTimeout(() => {
      element.textContent += message[i];
    }, typeSpeed * i);
  }
}

document.addEventListener("DOMContentLoaded", typeMyMessage);
