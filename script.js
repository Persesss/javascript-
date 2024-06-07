console.log();
const pi = 3.14;
let diameter = "";
let reseltaatoppervlakte = "";
let reseltaatomtrek = "";

let getHours = () => {
    let date = new Date();
    return date.getHours();
};
let getMinutes = () => {
    let date = new Date();
    return date.getMinutes();
};
let getSeconds = () => {
    let date = new Date();
    return date.getSeconds();
};

let tijd = getHours() + ":" + getMinutes() + ":" + getSeconds();
document.querySelector('#time').textContent = "Het is: " + tijd;

function klikme() {
    diameter = document.getElementById("diameter").value;
    reseltaatoppervlakte = diameter * diameter * pi * 0.25;
    reseltaatomtrek = diameter * pi;
    document.querySelector('#omtrek').textContent = "De omtrek van de cirkel is: " + reseltaatomtrek;
    document.querySelector('#oppervlakte').textContent = "De oppervlakte van de cirkel is: " + reseltaatoppervlakte;
}


