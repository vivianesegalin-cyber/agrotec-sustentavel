function mostrarInfo(tipo){

if(tipo === 'regenerativa'){
alert(
'A agricultura regenerativa melhora a saúde do solo, aumenta a biodiversidade e reduz a erosão.'
);
}

if(tipo === 'compostagem'){
alert(
'A compostagem transforma restos orgânicos em adubo rico em nutrientes.'
);
}

if(tipo === 'agua'){
alert(
'O uso eficiente da água reduz desperdícios e protege os recursos hídricos.'
);
}

}

const contadores = document.querySelectorAll('.contador');

contadores.forEach(contador => {

const atualizar = () => {

const alvo = +contador.getAttribute('data-target');

const atual = +contador.innerText;

const incremento = alvo / 100;

if(atual < alvo){

contador.innerText =
Math.ceil(atual + incremento);

setTimeout(atualizar,20);

}else{

contador.innerText = alvo;

}

};

atualizar();

});
