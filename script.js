function changeImage(element, characterName, storyFileName) {
    const mainImage = document.getElementById("mainImage");
    const storyText = document.getElementById("storyText");
    const characterTitle = document.getElementById("characterTitle");

    mainImage.src = element.src;
    mainImage.alt = element.alt;

    characterTitle.textContent = characterName;

    fetch('stories/' + storyFileName)
        .then(response => {
            if (!response.ok) throw new Error("Arquivo não encontrado");
            return response.text();
        })
        .then(data => {
            storyText.textContent = data;
        })
        .catch(error => {
            storyText.textContent = "Erro ao carregar a história: " + error.message;
        });
}

window.onload = function() {
    changeImage(
        document.querySelector('img[alt="Ayano Aishi"]'),
        "Ayano Aishi",
        "Ayano.txt"
    );

};
