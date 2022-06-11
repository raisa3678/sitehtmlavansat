console.log("test")

// Variabile
let variabilaMea = 1;
// poate fi modificata
const variabilaMeaConstanta = 2;
// nu poate fi modificata

let unu, doi, trei; //Variabile goale

//nedefinit si nul
let nedefinit = undefined;
let nul = null;

//tipuri de date
//numar
let numar =123

//text (string)
let text = "textul variabilei"

//Boolean
let adevarat = true;
let fals = false;

//liste (array)
let lista = ["unu", 4, "text"]

//accesarea elementelor dintr o lista
console.log(lista[0])
console.log(lista);
//dimensiunea unei liste
console.log(lista.lenght);

//obiecte
let elev = {
nume: "Gigi",
varsta:68
}
console.log(elev)
console.log(elev.nume)
console.log(elev.varsta)
//selectoare DOM (Document Object Model)
//Selectare dupa ID
const elementeDupaId = document.getElementById("titlu")
console.log(elementeDupaId)

//selectare dupa tag
const elementeDupaTag = document.getElementsByTagName("p")

//selectare dupa clasa
const elementeDupaClasa = document.getElementsByClassName("pargraf")
console.log(elementeDupaClasa)
