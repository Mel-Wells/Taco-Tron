document.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("focus", function () {
        this.style.borderColor = "#0ff"; // Neon glow effect
        this.style.boxShadow = "0 0 10px #0ff";
    });

    el.addEventListener("blur", function () {
        this.style.borderColor = "";
        this.style.boxShadow = "";
    });
});

// This function makes it to where whatever the user clicks on is glowing, as it should.
