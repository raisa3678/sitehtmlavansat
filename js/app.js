// selectam tagul body
const body = document.body
//selectam spanul cu id mode-toggle
const modeToggle = document.getElementById("mode-toggle")

//selectam lista de carduri
const cardList = document.getElementsByClassName("cards-list")[0] 

//selectam formularul
const searchForm = document.getElementById("searchForm");
//salvam proiectele
let projects = [];

if (searchForm) {
    searchForm.addEventListener("submit", search)
}

modeToggle.addEventListener("click", function() {
    body.classList.toggle("dark-mode")
    console.log(body)
})
function generatorCard(proiect) {
    console.log(proiect);
    //generam un li
    const li = document.createElement("li");
    //generam un div
    const div = document.createElement("div");
    //adaugam clasa card la div
    div.classList.add("card")

    //generam un element img
    const cardImg = document.createElement("img")
    //adaugam imaginea in atributul src
    cardImg.src = proiect.imagine;
    //adaugam numele imaginii in atributul alt
    cardImg.alt = proiect.nume
    //adaugam elementul img in card
    div.append(cardImg)

    //generam un div cu  card-content
    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    //adaugam titlu in card-content
    const titlu = document.createElement("h3")
    titlu.textContent = proiect.nume 
    cardContent.append(titlu);

    //adaugam descrierea in paragraf 
    const descriere = document.createElement("p")
    descriere.textContent = proiect.descriere
    cardContent.append(descriere)


    //adaugam butonul
    const cardBtn = document.createElement("button")
    cardBtn.textContent = "Mai multe"
    
    cardBtn.onclick = function() {
        location.href = proiect.link
    };
    cardContent.append(cardBtn)

    //adaugam card content in card
    div.append(cardContent);


    //adaugam card-ul in li
    li.append(div);
    //adaugam li in lista
    cardList.append(li)
}

//verifica valoarea din input in numele proiectului
function search(event) {
    event.preventDefault()
    const searchInput = searchForm.querySelector("input")

    //salvam valoarea din search input
    const searchValue = searchInput.value

    const found = projects.find(proiect => proiect.nume.toLowerCase().includes(searchValue.toLowerCase()));
    console.log(found)



    if (!found || ! searchValue) {
        //nu s-a gasit valoarea,afisam toate proiectele
        cardList.innerHTML = "";
        projects.forEach(function(proiect) {
            generatorCard(proiect)})

    } else {
        //s a gasit valoarea,afisam proiectul

     cardList.innerHTML = "";
     generatorCard(found)
    }
}
