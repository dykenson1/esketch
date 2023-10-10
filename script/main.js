const grid = document.querySelector("#container");
const btn = document.querySelector(".btn");
const popop = document.querySelector(".popop");
const validerBtn = document.querySelector(".valider");
const clear = document.querySelector(".button1");
const rgb = document.querySelector(".button2")
let input = document.querySelector("#nombre");
let inputColor = document.querySelector("color")
let color = document.querySelector(".black")

// Fonction de creation de grille
function creationDeGrille(inputValue){
    let inputUser = inputValue*inputValue
    grid.innerHTML = ''
    for (let i = 1; i <= inputUser; i++) {
        let newGrid = document.createElement('div')
        newGrid.classList.add('box')
        grid.appendChild(newGrid)
        newGrid.addEventListener('mousemove',()=>{
            newGrid.style.backgroundColor = color
        })   
    }
    grid.setAttribute('style',`grid-template-columns: repeat(${inputValue}, 1fr);
    grid-template-rows: repeat(${inputValue},1fr);`)

}

// fonction couleur par defaut
function defaultColor(){
    let black = 'black'
    return black
}


// function de nombre de grille
function nombreGrille(){
    let nbGrid = parseInt(input.value)
    creationDeGrille(nbGrid)
    popop.style.display = 'none'
}

// fonction netoyage des grille
function clearAll(){
    let grids = grid.querySelectorAll('div')
    grids.forEach(gridErase => gridErase.style.backgroundColor = '#ffffff')
}

// fonction couleur rgb
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le rouge
    const g = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le vert
    const b = Math.floor(Math.random() * 256); // Valeur aléatoire entre 0 et 255 pour le bleu
    return `rgb(${r}, ${g}, ${b})`;
}

// Les boutons
rgb.addEventListener('click',()=>{
    let grids = grid.querySelectorAll('div')
    grids.forEach(gridErase => gridErase.addEventListener('mousemove',()=>{
        gridErase.style.backgroundColor = getRandomRGBColor()
    }) )
    

})

color.addEventListener('click',()=>{
    let grids = grid.querySelectorAll('div')
    grids.forEach(gridErase => gridErase.addEventListener('mousemove',()=>{
        gridErase.style.backgroundColor = defaultColor()
    }) )
})

btn.addEventListener('click',()=>{
    popop.style.display = 'flex'
})

clear.addEventListener('click',clearAll)

validerBtn.addEventListener('click',nombreGrille)

// load page principale
creationDeGrille(10)