// Selecting the Html Elements And variables
const display = document.querySelector('.display')
const dot=document.querySelector('.dot')
let keys  = document.querySelectorAll('.key')
let equal =document.querySelector('.equal')
keys = Array.from(keys);

let displayValue=''
let firstNum=''
let secondNum=''
let operator=''
let lastDigit;

const showNum=()=>{
    // Keyboard Eventlistener for buttons
    window.addEventListener('keydown',(e)=>{
        if(e.key>=0&&e.key<=9&&display.textContent.length<=12){
                
            if (operator==''){
                display.textContent+=e.key
                firstNum=+display.textContent
            } else if (firstNum){
                display.textContent+=e.key
                secondNum=+display.textContent
            }
         }else if (e.key=='.'){

            if(!display.textContent.includes('.')){
                display.textContent+=e.key
            } else {
                return
            }
         }
    })
    // Click Eventlistener 
keys.forEach(key=>{
    
        key.addEventListener('click',(e)=>{ 
            
            if(e.target.dataset.key>=0&&e.target.dataset.key<=9&&display.textContent.length<=12){
                
                if (operator==''){
                    display.textContent+=e.target.innerText
                    firstNum=+display.textContent
                } else if (firstNum){
                    display.textContent+=e.target.innerText
                    secondNum=+display.textContent
                }
             }else if (e.target.dataset.key=='.'){

                if(!display.textContent.includes('.')){
                    display.textContent+=e.target.innerText
                } else {
                    return
                }
             }
            }
             )}
             )}

// calculate numbers
const calculate=()=>{
// keyboard Event listeners for operators
    window.addEventListener('keydown',(e)=>{
        if (operator){
            if(e.key=='+'||e.key=='_'||e.key=='/'||e.key=='*'){
                firstNum=operate(operator,+firstNum,+secondNum)
            } 
        }
        if (e.key=='+'){
            display.textContent=''
            operator=add
        }else if (e.key=='_'){
            display.textContent=''
            operator=subtract
        }else if (e.target.dataset.key=='*'){
            display.textContent=''
            operator=multiply
        }else if (e.target.dataset.key=='/'){
            display.textContent=''
            operator=devide
            if (firstNum=='0'||displayValue=='0'){
                display.textContent="Error! Can't devide by 0."
            }
        } else if (e.key=='c'){
            clearScreen()
        }else if (e.key=='Backspace'){
            backspace()
        }
        if(e.key=='='||e.key=='Enter'){
            if (!displayValue){
                displayValue=operate(operator,+firstNum,+secondNum)
                displayValue=displayValue.toFixed(5)
                display.textContent=displayValue
            }else if (displayValue){
                firstNum=+displayValue
                displayValue=operate(operator,+firstNum,+secondNum)
                displayValue=displayValue.toFixed(5)
                display.textContent=displayValue
            }
        }
    })

// click eventlistener for operators
    keys.forEach(key=>{
    key.addEventListener('click',(e)=>{
        if (operator){
            if(e.target.dataset.key=='+'||e.target.dataset.key=='_'||e.target.dataset.key=='/'||e.target.dataset.key=='*'){
                firstNum=operate(operator,+firstNum,+secondNum)
            } 
        }
        if (e.target.dataset.key=='+'){
            display.textContent=''
            operator=add
        }else if (e.target.dataset.key=='_'){
            display.textContent=''
            operator=subtract
        }else if (e.target.dataset.key=='*'){
            display.textContent=''
            operator=multiply
        }else if (e.target.dataset.key=='/'){
            display.textContent=''
            operator=devide
            if (firstNum=='0'||displayValue=='0'){
                display.textContent="Error! Can't devide by 0."
            }
        } else if (e.target.dataset.key=='clearAll'){
            clearScreen()
        }else if (e.target.dataset.key=='backspace'){
            backspace()
        }

// click eventlistener for =
        if(e.target.dataset.key=='='){
             if (!displayValue){
                displayValue=operate(operator,+firstNum,+secondNum)
                displayValue=displayValue.toFixed(5)
                display.textContent=displayValue
            }else if (displayValue){
                firstNum=+displayValue
                displayValue=operate(operator,+firstNum,+secondNum)
                displayValue=displayValue.toFixed(5)
                display.textContent=displayValue
            }
        }
    })
    })
}
showNum()
calculate()

// clear screen
const clearScreen=()=>{
display.textContent=""
 displayValue=''
 firstNum=''
 secondNum=''
 operator=''
}
const backspace=()=>{
    display.textContent= display.textContent.substring(0, display.textContent.length - 1);
}
// The operator functions 
const add = (num1,num2)=> num1 + num2 
const subtract=(num1,num2)=> num1 - num2
const multiply=(num1,num2)=> num1 * num2
const devide=(num1,num2)=>num1 / num2
const operate=(operator,num1,num2)=> operator(num1,num2) 

