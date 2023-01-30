let ship = document.querySelector("#ship")
let game = document.querySelector('#game')
let asteroidi = []

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
    asteroidi.push(document.createElement("img"))
    asteroidi[asteroidi.length-1].src = 'asteroid.png';
    asteroidi[asteroidi.length-1].style.top = '10vh';
    asteroidi[asteroidi.length-1].style.position = 'absolute'
    asteroidi[asteroidi.length-1].style.left = 680+(Math.random()*420)+'px';
    asteroidi[asteroidi.length-1].className = 'asteroid';
    game.appendChild(asteroidi[asteroidi.length-1]);
    asteroidi[asteroidi.length-1].animate([
        {
            transform: 'translateY(1000px)'
        }
    ], {duration: 5000, iterations: 1})
}, 3000);

setInterval(() => {
    asteroidi[0].remove()
}, 5000);