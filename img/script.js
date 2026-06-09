let atual = 0;

const etapas =
document.querySelectorAll(".etapa");

function proximaEtapa(){

etapas[atual].classList.remove("ativa");

atual++;

if(atual >= etapas.length){
atual = 0;
}

etapas[atual].classList.add("ativa");
}
