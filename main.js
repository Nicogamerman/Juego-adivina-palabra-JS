let word = 'texto'; //Palabra a adivinar.
let wordArray = word.toUpperCase().split (''); //Split permite cortar el texto dependiendo lo que le pase, corta palabra en la letra que le diga. En caso que sea vacio, coloca cada letra separada.
console.log(wordArray);

let actualRow = document.querySelector('.row'); //Trabajamos sobre las row.

wordArray.forEach((item, index) => {//por cada elemento del arreglo vamos a imprimir la letra en cada recuadro.
    if(index===0){
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
    }else{
    actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
    }
});

let focusElement= document.querySelector('.focus')
focusElement.focus();
    
let squares = document.querySelectorAll('.square')
squares = [...squares] //De esta forma transofmro la lista en un arreglo.

let userInput = [] //lo que ingrese el user lo coloco abajo

squares.forEach (element =>{ //por cada letra en el cuadro vamos a colocar una escucha de click.
    element.addEventListener('input', event=>{
        //recoger lo que ingresa el user
        userInput.push(event.target.value.toUpperCase()) //el push agrega un elemento(letra) al final.
        console.log(userInput)
        if(event.target.nextElementSibling){ //si existe el elemento, saltar al siguiente cuadro
        event.target.nextElementSibling.focus();//me envia el cursor al siguiente cuadrado.
        }else{
            let sameElements = compareArrays(wordArray, userInput);
            console.log(sameElements)
        }
    });
})

//FUNCIONES

function compareArrays(array1, array2){
    let iqualsIndex = []
    array1.forEach((element, index)=>{
        if(element == array2[index]){
            console.log(`En la posicion ${index} si son iguales`);
            iqualsIndex.push(index);
        }else{
            console.log(`En la posicion ${index} NO son iguales`);
        }
    });
    return iqualsIndex;
}
function existLetter(array1, array2){
    let existIndexArray = [];
    array2.forEach((element, index)=>{
        if(array1.includes(element)){
            existIndexArray.push(index);
        }
    });
    return existIndexArray;
}
function createRow(){
    rowId++
    if (rowId <= 5){
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        newRow.setAttribute('id', rowId)
        mainContainer.appendChild(newRow)
        return newRow;
    }else{
        showResult(`Intentalo de nuevo, la respuesta correcta era "${word.toUpperCase()}"`)
    }
    
}
function drawSquares(actualRow){
    wordArray.forEach((item, index) => {
        if(index === 0){
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square focus">`
        }else{
            actualRow.innerHTML += `<input type="text" maxlength="1" class="square">`
        }
    });
}
function addfocus(actualRow){
    let focusElement = actualRow.querySelector('.focus')
    console.log(focusElement)
    focusElement.focus();
}
function showResult(textMsg){
    resultElement.innerHTML = `
    <p>${textMsg}</p>
    <button class="button">Reiniciar</button>`

    let resetBtn = document.querySelector('.button')
    resetBtn.addEventListener('click', ()=>{
        location.reload();
    });
}

