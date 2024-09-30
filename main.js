//disply contents inside calculator screen
function displayContent(content) {
    result.value += content //input id=result
}
//clear calculator screen
function clearCalcScreen(){
    result.value = " "
}
//display equal
function  displayResult(){
    result.value = eval(result.value)  //used to evaluate
}
function removeLastDigit(){
    result.value=result.value.slice(0,-1) //its a string so slice is used 
}