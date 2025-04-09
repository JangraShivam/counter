const counterElement = document.getElementById('num');

const minus = () => {
    let val = parseInt(counterElement.innerText);
    counterElement.innerText= val-1;
}

const add = () => {
    console.log("aDD");
    let val = parseInt(counterElement.innerText);
    counterElement.innerText = val+1;
}

const mbtn = document.getElementById('btn1');
mbtn.addEventListener('click',minus);

const abtn = document.getElementById('btn2');
abtn.addEventListener('click',add);

