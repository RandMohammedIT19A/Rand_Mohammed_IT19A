let namn = "Rand" 

function sayHello(){
    let alder = 17
    console.log(`Hej ${namn}, du är ${alder} år gammal`)
}
sayHello()
sayHello()

function addera(tal1, tal2){
    let summa = tal1+tal2
    return summa
}

console.log(`2+5=${addera(2,5)}`)

function dividera(tal1, tal2){
    let kvot = tal1/tal2
    return kvot
}

console.log(`35/7 = ${dividera(35,7)}`)
console.log(`2/0 = ${dividera(2,0)}`)

function cirkelArea(radie){
    let area = Math.PI*radie**2
    return area
}
let area10 = cirkelArea(10)
// anropa 
console.log(`Arean av en cirkel med radie 10 l.e är ${area10} a.e `)

