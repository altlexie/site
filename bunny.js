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