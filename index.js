const homeOne = document.getElementById("home-one");
const homeTwo = document.getElementById("home-two");
const homeThree = document.getElementById("home-three");
const guestOne = document.getElementById("guest-one");
const guestTwo = document.getElementById("guest-two");
const guestThree = document.getElementById("guest-three");
let homeText = document.getElementById("home-text");
let guestText = document.getElementById("guest-text");

const newGame = document.getElementById("new");

function Home(Case){
    let value = homeText.textContent;
    switch(Case){
        case "home-one":{
            homeText.textContent = Number(value)+1;
            break;
        }
        case "home-two":{
            homeText.textContent = Number(value)+2;
            break;
        }
        case "home-three":{
            homeText.textContent = Number(value)+3;
            break;
        }
    }
}

function Guest(Case){
    let value = guestText.textContent;
    switch(Case){
        case "guest-one":{
            guestText.textContent = Number(value)+1;
            break;
        }
        case "guest-two":{
            guestText.textContent = Number(value)+2;
            break;
        }
        case "guest-three":{
            guestText.textContent = Number(value)+3;
            break;
        }
    }
}

homeOne.addEventListener("click",(e)=>Home(e.target.id));
homeTwo.addEventListener("click",(e)=>Home(e.target.id));
homeThree.addEventListener("click",(e)=>Home(e.target.id));
guestOne.addEventListener("click",(e)=>Guest(e.target.id));
guestTwo.addEventListener("click",(e)=>Guest(e.target.id));
guestThree.addEventListener("click",(e)=>Guest(e.target.id));

newGame.addEventListener("click",()=>{
    homeText.textContent = "00";
    guestText.textContent = "00";
})