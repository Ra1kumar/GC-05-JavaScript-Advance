// List of selected signature fonts
const fonts = [
    "Great Vibes",
    "Pacifico",
    "Dancing Script",
    "Satisfy",
    "Marck Script"
];

// Show sample signatures on page load
window.onload = () => {
    const sampleContainer = document.getElementById("samples");

    fonts.forEach(font => {
        const div = document.createElement("div");
        div.className = "sample";
        div.style.fontFamily = font;
        div.textContent = font + " Sample Text";
        sampleContainer.appendChild(div);
    });
};

// Input event listener
document.getElementById("nameInput").addEventListener("input", function () {
    const name = this.value.trim();
    const fullDiv = document.getElementById("fullSignature");
    const shortDiv = document.getElementById("shortSignature");

    if (name === "") {
        fullDiv.textContent = "";
        shortDiv.textContent = "";
        return;
    }

    // Update full signature
    fullDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    fullDiv.textContent = name;

    // Generate short signature
    const parts = name.split(" ");
    if (parts.length >= 2) {
        const first = parts[0][0];
        const last = parts[parts.length - 1];
        shortDiv.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        shortDiv.textContent = first + ". " + last;
    }
});
