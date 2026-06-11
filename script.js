function calcularRacao() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const dias = parseInt(document.getElementById("dias").value);
    
    if(isNaN(quantidade) || quantidade < 1 || isNaN(dias) || dias < 1){
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Supondo que cada animal consome 2 kg de ração por dia
    const consumoPorAnimal = 2;
    const totalRacao = quantidade * dias * consumoPorAnimal;

    document.getElementById("resultado").textContent = 
        `Você precisará de ${totalRacao} kg de ração para ${quantidade} animais em ${dias} dias.`;
}
