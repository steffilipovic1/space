let ship = document.querySelector("#ship")
let game = document.querySelector('#game')

ship.style.left = '50vw';
ship.style.top = '90vh';
let pos = ship.offsetLeft;

window.addEventListener("keydown", (e)=>{
    console.log(e.key)
    if(e.key == "ArrowLeft" && pos > 680) {
        ship.style.left = (pos-20)+"px";
        pos = ship.offsetLeft;
    }else if (e.key == "ArrowRight" && pos < 1163) {
        ship.style.left = pos+20+"px";
        pos = ship.offsetLeft;
    }
})

setInterval(() => {
    a = document.createElement("img")
    a.src = 'asteroid.png';
    a.style.top = '10vh';
    a.style.position = 'absolute'
    a.style.left = 680+(Math.random()*420)+'px';
    a.className = 'asteroid';
    game.appendChild(a);
}, 3000);