const css = document.querySelector("h3")
// Selectam primul input
const color1 = document.querySelector(".color1")
//Selectam al 2 lea input
const color2 = document.querySelector(".color2")
//Selectam body-ul
const body = document.getElementById("gradiend")
//selectam butonul
const randomBtn = document.getElementById("randomBtn")

//Functia schimba backgroud-ul in functie de culorile selectate
function setGradiend(firstColor, secondColor) {
    //Selectam proprietatea background a elementului body
    //Selectam backround-ul cu culorile alese
    body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";

    // Afisam background-ul in h3
    css.textContent = body.style.background + ";" ;

}

//Functia schimba backgroud-ul in functie de valorile din input
function setGradiendOnInput() {
    setGradiend(color1.value, color2.value);
}

//Returneaza un nr random intre 0 si 250
function randomizer() {
    console.log(Math.floor(5.95))
    return Math.floor(Math.random() * Math.floor(250));
}


//Returneaza textul culorii rgb
function randomColor() {
    //rgb(123, 123, 123)
    const random = "rgb(" + randomizer() + ", " + randomizer() + ", " + randomizer() + ")"
    return random;
}
//console.log(randomColor())


//Schimba background-ul cu valori random
function setRandomGradiend(){
    setGradiend(randomColor(), randomColor())
}

color1.addEventListener("input", setGradiendOnInput)
color2.addEventListener("input", setGradiendOnInput)
randomBtn.addEventListener("click", setRandomGradiend)

setGradiendOnInput();