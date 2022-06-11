//selectam input color
const inputColor = document.getElementById("colorPicker");
//selectam input height 
const inputHeight = document.getElementById("inputHeight")
const inputWidth = document.getElementById("inputWidth")
//selectam tabelul
const canvas = document.getElementById("canvas")
//selectam butonul
const buton = document.getElementById("submitSize")



//functie care ne genereaza canvas-ul in functie de inputHeight si inputWeidth
function makeCanvas() {
    const inputHeightVal = inputHeight.value
    const inputWidthVal= inputWidth.value
    
//verificam valoarea introdusa
if (inputHeightVal<=0 || inputHeightVal > 50 || inputWidthVal <=0 || inputWidthVal >50) {
    return
}

//adaugam un buton pt a goli canvasul
const clearBtn = document.createElement("button");
clearBtn.textContent = "Clear"
clearBtn.id = "clear-canvas"

if (canvas.children.length > 0) {
    while (canvas.lastElementChild) {
        canvas.removeChild(canvas.lastElementChild)
    }
    document.getElementById("clear-canvas").remove()
}

//adaugam elementele in tabel
//Pentru fiecare rand adaug o coloana
for (let row = 0; row < inputHeightVal; row++) {
    const tr = document.createElement("tr")
    
    for(let col = 0; col < inputWidthVal; col++) {
        const td = document.createElement("td")
        tr.append(td)
        canvas.append(tr)
    }
}
 //selectam toate celulele
 const allCells = document.getElementsByTagName("td")

 //adaugam un eveniment de click la fiecare celula
 for(let cell = 0; cell < allCells.length; cell++) {
     allCells[cell].addEventListener("click", function() {
         const inputColorVal = inputColor.value;
         allCells[cell].style.background = inputColorVal;
     })

  allCells[cell].addEventListener("contextmenu", function(event) {
      //Previne functionalitatea default pt click dreapta
      event.preventDefault();
      //setez background la alb
      allCells[cell].style.background = "white"
  })
  }

document.body.append(clearBtn);

clearBtn.addEventListener("click", function() {
    for (let cell = 0; cell < allCells.length;cell++) {
        allCells[cell].style.background = "white"
    }
})

}

//Cand butonul submit 
buton.addEventListener("click", function(event) {
    event.preventDefault()
    makeCanvas()
})