

const botaoUm = document.getElementById("botaoUm");
const botaoDois = document.getElementById("botaoDois");
const botaoTres = document.getElementById("botaoTres");
const botaoQuatro = document.getElementById("botaoQuatro");
const botaoCinco = document.getElementById("botaoCinco");
const botaoSubmit = document.querySelector(".botao-submit");
const boxRemover = document.getElementById("remover");

function esconderBox() {
    boxRemover.classList.remove("box-secundario");
    boxRemover.classList.add("aparecer");

}

function resetar() {
    const buttons = [botaoUm, botaoDois, botaoTres, botaoQuatro, botaoCinco];
    buttons.forEach(button => {
        button.classList.remove("botao-efeito-click");
        button.classList.add("botao-efeito");
    });
}



botaoUm.addEventListener("click", () => {
    console.log('Clicou no 1');
    document.querySelector(".nota").innerHTML = "You selected 1 out of 5";
    resetar();
    botaoUm.classList.remove("botao-efeito");
    botaoUm.classList.add("botao-efeito-click");




});

botaoDois.addEventListener("click", () => {
    console.log('Clicou no 2');
    document.querySelector(".nota").innerHTML = "You selected 2 out of 5";
    resetar();
    botaoDois.classList.remove("botao-efeito");
    botaoDois.classList.add("botao-efeito-click");
    


});

botaoTres.addEventListener("click", () => {
    console.log('Clicou no 3');
    document.querySelector(".nota").innerHTML = "You selected 3 out of 5";
    resetar();
    botaoTres.classList.remove("botao-efeito");
    botaoTres.classList.add("botao-efeito-click");


});

botaoQuatro.addEventListener("click", () => {
    console.log('Clicou no 4');
    document.querySelector(".nota").innerHTML = "You selected 4 out of 5";
    resetar();
    botaoQuatro.classList.remove("botao-efeito");
    botaoQuatro.classList.add("botao-efeito-click");



});

botaoCinco.addEventListener("click", () => {
    console.log('Clicou no 5');
    document.querySelector(".nota").innerHTML = "You selected 5 out of 5";
    resetar();
    botaoCinco.classList.remove("botao-efeito");
    botaoCinco.classList.add("botao-efeito-click");


});


botaoSubmit.addEventListener("click", () => {

    esconderBox();

})




