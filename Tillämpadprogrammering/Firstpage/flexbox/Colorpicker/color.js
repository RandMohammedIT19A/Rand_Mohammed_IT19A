let colorpicker = document.querySelector("#colorPicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "hotpink"

colorpicker.addEventListener("change", colorChanger())

function colorChanger(event){
let color = event.target.value;
console.log(color)

}