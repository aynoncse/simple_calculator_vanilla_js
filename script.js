const app           = document.querySelector('#app')
const screen        = document.createElement('div')
screen.className    = 'screen'
app.appendChild(screen)

const numbersArray  = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "C"];
const operatorsArray= ["/", "*", "-", "+", "="];



const buttons = document.createElement('div')
buttons.className = 'buttons'
app.appendChild(buttons)

const numbers = document.createElement('div')
numbers.className = 'numbers'
buttons.appendChild(numbers)

const operators = document.createElement('div')
operators.className = 'operators'
buttons.appendChild(operators)


numbersArray.forEach(element => {
    createButton(element, numbers)
})

operatorsArray.forEach(element => {
    createButton(element, operators)
})


function createButton(element, parent){
    let button = document.createElement('button')
    button.type= 'button'
    button.innerHTML = element
    button.value = element
    button.addEventListener('click', btnClick)
    parent.appendChild(button)
}

function btnClick() {
    switch (this.value) {
        case 'C':
            screen.innerHTML = screen.innerHTML.slice(0, -1)
            break;
        case '=':
            let expression = screen.innerHTML
            screen.innerHTML = eval(expression)
            break
        default:
            screen.append(this.value)
            break;
    }
}

