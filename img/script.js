// Pequena interação para tornar o site dinâmico
document.addEventListener("DOMContentLoaded", () => {
    const etapas = document.querySelectorAll(".etapa");
    etapas.forEach((etapa, index) => {
        etapa.addEventListener("click", () => {
            alert(`Você clicou na etapa: ${etapa.querySelector("h3").textContent}`);
        });
    });
});
