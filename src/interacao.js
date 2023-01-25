

/* Quando clicar no botao ficar selecionado a cor e o numero.

Saber quando clicou e pegar id do elemento botao.

Quando clicar no botao alterar frase thank 

Quando clicar no botao Submit dar hidden na page 1 */





const botaoUm = document.getElementById("botaoUm");
const botaoDois = document.getElementById("botaoDois");
const botaoTres = document.getElementById("botaoTres");
const botaoQuatro = document.getElementById("botaoQuatro");
const botaoCinco = document.getElementById("botaoCinco");
const botaoSubmit = document.querySelector(".botao-submit");
const boxRemover = document.getElementById("remover");


botaoUm.addEventListener("click", () => {
    console.log('Clicou no 1');
    document.querySelector(".nota").innerHTML = "You selected 1 out of 5";

});

botaoDois.addEventListener("click", () => {
    console.log('Clicou no 2');
    document.querySelector(".nota").innerHTML = "You selected 2 out of 5";

});

botaoTres.addEventListener("click", () => {
    console.log('Clicou no 3');
    document.querySelector(".nota").innerHTML = "You selected 3 out of 5";

});

botaoQuatro.addEventListener("click", () => {
    console.log('Clicou no 4');
    document.querySelector(".nota").innerHTML = "You selected 4 out of 5";

});

botaoCinco.addEventListener("click", () => {
    console.log('Clicou no 5');
    document.querySelector(".nota").innerHTML = "You selected 5 out of 5";

});


function esconderBox () {
        boxRemover.classList.remove("box-secundario");
        boxRemover.classList.add("aparecer"); 

}

botaoSubmit.addEventListener("click", () => {

    esconderBox();

})



