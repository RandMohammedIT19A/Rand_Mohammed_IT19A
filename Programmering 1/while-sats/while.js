let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1");
let p_talserie2 = document.querySelector("#talserie2");
h1_titel.innerHTML = "while-sats"

let n = 1
while (n <=19){
    p_talserie1.innerHTML += `${n}`
    n+=3
}

let k = 10
while (k >=0){
    p_talserie2.innerHTML += `${k}`
    k--
}

let