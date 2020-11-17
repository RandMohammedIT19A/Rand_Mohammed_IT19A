let fornamn = "Rand"
let efternamn = "Mohammed"
let namn = fornamn + " " + efternamn 
let adress = "Kronhusgatan 9"
let tleefon = 112
let alder = 17
console.log("Namn " + namn + "\n" + "Adress: " adress)

let p_uppgifter = document.querySelector("#personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Adress" + adress + "Ålder: " + alder

let alfabet = "abcdefghijklmnopqrstuvwxyzäåö"
let bokstav1 = alfabet[0]
let bokstav5 = alfabet[4]
console.log (`Bokstav på index 0 är: ${bokstav1}`)
console.log (`Bokstav på index 4 är: ${bokstav5}`)

let antal_bokstaver = alfabet.length
console.log(`Antal bokstaver i alfabetet är ${antal_bosktaver}`)


