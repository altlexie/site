function afficherTexte() {
    const texte = document.getElementById("texteLapin").value.trim();
    const resultat = document.getElementById("resultat");

    if (texte !== "") {
        resultat.textContent = "Ton lapin s'appelle " + texte
    }
}

document
.getElementById("boutonLapin")
.addEventListener("click", afficherTexte);

const caseCochee = document.getElementById("case");
const texteCondition = document.getElementById("texteCase");
const image = document.getElementById("imageLapin");


caseCochee.addEventListener("change", function () {
if (caseCochee.checked) {
    texteCondition.style.display = "block";
    image.style.display = "block";
}    else {
    texteCondition.style.display = "none";
    image.style.display = "none";
}
});

