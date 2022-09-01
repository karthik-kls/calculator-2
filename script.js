var buttons= document.getElementsByTagName("button");
var inputText = "";
var outputText ="";
var operantsArray =[];
var operatorsArray = [];
var isLastOperator = true;

for (var i=0;i< buttons.length; i++){
buttons[i].addEventListener("click",click);
}

function click(event) {
    calculate(

        event.target.innerText,
        event.target.classList.contains("btn2")
    );
    display(); 

    }
function calculate(input , isOperator) {
    if (input === "="){
    if(!isLastOperator) calculateResult();
    return;
}
    if (isOperator) {
        if (isLastOperator) return;
        operatorsArray.push(input);
    } else{
        if (isLastOperator){
        operantsArray.push(input);
        } else {
            if(
            input== "." & 
            operantsArray[operantsArray.length -1].includes(".")
            )
            return;
            operantsArray[operantsArray.length -1] =+input;
        }
        
    
        
    }


    
    isLastOperator = isOperator;
    console.log(operatorsArray, operantsArray);
    inputText += input;
}

function calculateResult(){

    
    
    console.log("Calculate");

}

function display() {
    getByClass("box").innerHTML = inputText || 0 ;
    getByClass("box2").innerHTML = outputText || 0 ;
}

function getByClass(className) {
    return document.getElementsByClassName(className) [0];
}
