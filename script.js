//dropdownmenu

const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("nav");

const dropDown = () => {
    menu.classList.toggle ("navMenuShow");
};
hamburger.addEventListener("click", dropDown);

////Hooverend het menu ook zien
let dropOver = () => {
    menu.classList.add("navMenuShow");
};
let dropOut =() => {
    menu.classList.remove("navMenushow");
};
hamburger.addEventListener("mouseover", dropOver);
hamburger.addEventListener("mouseout", dropDown);
menu.addEventListener("mouseover", dropOver);
menu.addEventListener("mouseout", dropDown);

//volledige functie
const kleurVeranderaar = (color, button) => {
    menu.classList.remove ("navMenuShow");
    menu.classList.add ("navMenuHide");
    body.classList.remove(body.classList);
    body.classList.add(color);
    kleurTekst.innerHTML = (`<br>De kleur is ${color}`);
    document.getElementById(button).checked = true;
};

let kleurTekst =document.getElementById("kleurKeuzeTekst");

let body  = document.body;
let wit  = document.getElementById("home");
let rood  = document.getElementById("rood");
let blauw = document.getElementById("blauw");
let geel  = document.getElementById("geel");
let groen = document.getElementById("groen");
let paars = document.getElementById("paars");
let oranje= document.getElementById("oranje");

rood.addEventListener("click", () => kleurVeranderaar("rood", "radioRood"));
blauw.addEventListener("click", () => kleurVeranderaar("blauw", "radioBlauw"));
geel.addEventListener("click",  () => kleurVeranderaar("geel", "radioGeel"));
groen.addEventListener("click", () => kleurVeranderaar("groen", "radioGroen"));
paars.addEventListener("click", () => kleurVeranderaar("paars", "radioPaars"));
oranje.addEventListener("click", () => kleurVeranderaar("oranje", "radioOranje"));
wit.addEventListener("click", () => kleurVeranderaar("wit", "radioHome"));

//radiobuttons
let checkHome = document.getElementById("labelHome");
let checkRood = document.getElementById("labelRood");
let checkBlauw = document.getElementById("labelBlauw");
let checkGeel = document.getElementById("labelGeel");
let checkGroen = document.getElementById("labelGroen");
let checkPaars = document.getElementById("labelPaars");
let checkOranje = document.getElementById("labelOranje");

checkRood.addEventListener("click", () => kleurVeranderaar("rood", "labelRood"));
checkBlauw.addEventListener("click", () => kleurVeranderaar("blauw", "labelBlauw"));
checkGeel.addEventListener("click",  () => kleurVeranderaar("geel", "labelGeel"));
checkGroen.addEventListener("click", () => kleurVeranderaar("groen", "labelGroen"));
checkPaars.addEventListener("click", () => kleurVeranderaar("paars", "labelPaars"));
checkOranje.addEventListener("click", () => kleurVeranderaar("oranje", "labelOranje"));
checkHome.addEventListener("click", () => kleurVeranderaar("wit", "labelHome"));



let keyChange = (entry)=> {
    if (entry.code === "Digit1") {
        kleurVeranderaar("wit", "radioHome");
    } else if (entry.code === "Digit2") {
        kleurVeranderaar("rood", "radioRood");
    } else if (entry.code === "Digit3") {
        kleurVeranderaar("blauw", "radioBlauw");
    } else if (entry.code === "Digit4") {
        kleurVeranderaar("geel", "radioGeel");
    } else if (entry.code === "Digit5") {
        kleurVeranderaar("groen", "radioGroen");
    } else if (entry.code === "Digit6") {
        kleurVeranderaar("paars", "radioPaars");
    } else if (entry.code === "Digit7") {
        kleurVeranderaar("oranje", "radioOranje");
    };
};
document.addEventListener('keypress', keyChange);