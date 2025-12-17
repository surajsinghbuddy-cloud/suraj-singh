const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
function toggleWhatsAppChat() {
  const chatBox = document.getElementById("whatsappChatBox");

  if (chatBox.style.display === "block") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "block";
  }
}
function closeWhatsAppChat() {
  document.getElementById("whatsappChatBox").style.display = "none";
}
function openWhatsAppLink() {
  const whatsappNumber = "919999999999";
  window.open(`https://wa.me/${whatsappNumber}`, "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();

function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pickup = document.getElementById("pickup").value;
  const delivery = document.getElementById("delivery").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "916200988521"; // SAME WhatsApp number

  const whatsappMessage =
    `Hello MKS Roadlines,%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A` +
    `Pickup Location: ${pickup}%0A` +
    `Delivery Location: ${delivery}%0A` +
    `Message: ${message}`;

  const whatsappURL =
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

  window.open(whatsappURL, "_blank");
}

