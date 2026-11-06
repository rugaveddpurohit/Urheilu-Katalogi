// Yhteydenottolomake
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Perustarkistus
        if (!name || !email || !message) {
            alert("Täytä kaikki kentät!");
            return;
        }

        // Yksinkertainen sähköpostitarkistus
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Anna kelvollinen sähköpostiosoite.");
            emailInput.focus();
            return;
        }

        // Onnistumisviesti
        alert(`Kiitos viestistäsi, ${name}! Viesti on vastaanotettu.`);

        // Tyhjennä lomake
        contactForm.reset();
        nameInput.focus();
    });
}