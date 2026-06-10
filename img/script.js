// Rolagem suave para as seções ao clicar nos botões
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Pequena interação para clicar nas etapas
document.querySelectorAll(".etapa").forEach(etapa => {
    etapa.addEventListener("click", () => {
        alert(`Você clicou na etapa: ${etapa.querySelector("h3").textContent}`);
    });
});
