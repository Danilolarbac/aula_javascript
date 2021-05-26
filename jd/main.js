
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // Essa função .innerHtml ingeta um texto no local onde eu vou querer
    // a função acima busca o id no meu html
    //console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar")
}

function redirecionar() {
     window.open("http://www.aesa.pb.gov.br/aesa-website/"); // abre uma aba no site selecionado
     window.location.href = "https://g1.globo.com/"; // abre o site na mesma janela
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse"
     //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
     //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada")
}

function funcaochange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1 , n2) {
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*
var validade
var idade = prompt("Digite sua idade: ")
validaidade(idade)

function validaidade(idade){
    if (idade >= 18) {
        validar = true
    }else{
        validar = false
    }
    return validar
}
console.log(validar)
*/

/*
function setReplace(frase, nome, novo_nome) { // na frase voce substitui vai Japão por vai Brasil
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"))
*/

/*
var d = new Date();
alert("o mês atual é " + (d.getMonth()+1))  // usa o mais 1 no getmonth para da o mes certo, a função get pode ser usado get.day ,hour et...
alert("o dia atual é " + d.getDay())
alert("o ano atual é " + d.getFullYear())
alert("a hora atual é " + d.getHours())
*/


/*
var contador
for (contador = 0; contador <= 5; contador++) {
    console.log(contador)
    alert(contador)
}
*/

/*
var contador = 0;
while (contador <= 5 ){
    console.log(contador);
    alert(contador)
    contador = contador + 1; // pode ser trocado por contador++
};
*/

/*
 var idade = prompt("Digite sua idade: ");  // o comando prompt vai exibir uma pergunta 

if (idade >= 18) {
    alert("Maior de idade")
}else {
    alert("Menor de idade")
};
*/

/*var fruta = [{nome:"Maçã", cor:"Vermelha"}, {nome:"Uva", cor:"Roxo"}];
console.log(fruta);
alert(fruta[1].nome); // da minha lista de dicionario chame a posição 1 e o elemento nome
*/

/*var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);*/


//var lista = ["Maça", "Pêra", "Laranja"];
//lista.pop(); // retira o ultimo elemento da lista
//lista.push("Uva"); // .push Add um elemento a lista
//console.log(lista.length) // .length informa o tamanho da lista
//console.log(lista);
//console.log(lista.reverse())  // .reverse() inverte a ordem de mostrar meus elementos
//console.log(lista.toString()) // transforma elementos em string
//console.log(lista[0]); 
//console.log(lista)
//console.log(lista.toString())
//console.log(lista.join(" | "))  // transforma em string e separa com o elemento escolhido no caso o pipeline |


/*var nome = "Danilo Cabral";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " Tem " + idade +" Anos ");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toUpperCase()); // a função .replace troca o primeiro elemento pelo segundo elemento
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));*/
