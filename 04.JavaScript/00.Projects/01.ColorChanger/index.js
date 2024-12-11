const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach( (btn)=> {
    btn.addEventListener('click', (e) => {
            body.style.backgroundColor = e.target.id;
    });
});