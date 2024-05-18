const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;

    const result = document.querySelector('#results');

    if(height === "" || height < 0){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === "" || weight < 0){
        result.innerHTML = "Please give a valid weight";
    }
    else{
        const bmi = ((weight * 10000) / (height*height)).toFixed(2);
        let msg = "";
        if(bmi < 18.6){
            msg = "You are Under Weight";
        }else if(bmi >= 18.6 && bmi < 24.9){
            msg = "You are Fit";
        }else{
            msg = "You are Overweight";
        }
        result.innerHTML = `<span>${msg} : ${bmi}</span>`;
    }
})