const counterValue = document.querySelector('#counter');

function increment(){
    let value = parseInt(counterValue.innerText);
    value = value + 1;
    counterValue.innerText = value;
}

function decrement(){
    let value = parseInt(counterValue.innerText);
    if(value > 0){
        value = value -1;
        counterValue.innerText = value;
    }

}