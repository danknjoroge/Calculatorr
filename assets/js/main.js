// *** Write your code here***
function calcNumbers(val){
    document.getElementById('result').value += val
    return val
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function deleted(){
    var val = document.getElementById('result').value.slice(0, -1);
    document.getElementById('result').value = val;  
}





