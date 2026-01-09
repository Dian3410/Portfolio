document.addEventListener("DOMContentLoaded", () => {

    /* ===== MACHINE A ECRIRE ===== */
    const texts = [
        { id: "intro", text: "Bonjour, je suis", speed: 80 },
        { id: "name", text: "Dian Diallo", speed: 100 },
        {
            id: "description",
            text: "Étudiant en BTS Services Informatiques aux Organisations",
            speed: 50
        }
    ];

    let index = 0;

    function typeText() {
        if (index >= texts.length) return;

        const element = document.getElementById(texts[index].id);
        const text = texts[index].text;
        const speed = texts[index].speed;
        let charIndex = 0;

        element.textContent = "";

        const interval = setInterval(() => {
            element.textContent += text.charAt(charIndex);
            charIndex++;

            if (charIndex === text.length) {
                clearInterval(interval);
                index++;
                setTimeout(typeText, 500);
            }
        }, speed);
    }

    typeText();

    /* ===== SCROLL FLUIDE ===== */
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

});
