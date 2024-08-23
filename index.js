/*

let username;

document.getElementById("btn").onclick = function(){
    username = document.getElementById("nome").value;
    document.getElementById("h1").textContent = `Site do ${username}`
}








console.log(`Olá`);
console.log(`Vagabundo`);

window.alert(`aviso!! jan da o butico!!`);
window.alert(`ele dá mesmo!!`);*/

/*document.getElementById("h1").textContent = `doideira?`;
document.getElementById("p").textContent = `cara nem acredito que to progamando em js hahaha`;


let x = 10;

console.log(typeof x);
console.log(`Eu tenho ${x}`);

let Nome = "juliano";
let Idade = 18;
let Vagabundo = false;
document.getElementById("p").textContent = `Meu Nome é ${Nome}`;

window.alert("meu nome é juliano e sou maluco!!!");*/

/*let entaoeisso = true;

console.log(entaoeisso);

let valor = 10;

valor = valor ** 2;

console.log(valor);*/


let a; let b; let c; let x1; let x2; let D; let xix; let xiy; let div;

document.getElementById("btn").onclick = function(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    D = Math.sqrt(b**2 -4*a*c);
    div = 2*a;
    xix = -b+D;
    xiy = -b-D;
    x1 = xix/div;
    x2 = xiy/div;
    document.getElementById("x1").textContent = `X1 = ${x1}`
    document.getElementById("x2").textContent = `X2 = ${x2}`
}

