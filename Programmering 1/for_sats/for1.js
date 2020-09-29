
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klasslista")
let summa = 0

for (let i=1; i<=10; i++){
p_talserie1.innerHTML += `${i} `
}

for (let j=10; j>0; j--){
p_talserie2.innerHTML += `${j} `
}

for (let i = 0; i<10; i++) {
console.log(`${i}. I will not write all over the walls`)
}


for (let i=0; i<=10; i++){

    summa += i 

}
p_summa.innerHTML += `1 + 2 + 3 +...+9+10 = ${summa}`
console.log(summa)

//skapa en lista med elever

let elever = ["Rand", "sdasdasdasd" ] 


p_klass.innerHTML = "Klass IT19A <br/>"

for (let k = 0; k < elever.length; k++) {
    p_klass.innerHTML += `${k+1}. ${elever[k]} <br/>`
p_klass.innerHTML += elever[0]


}