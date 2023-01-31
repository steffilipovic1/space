let ship = document.querySelector("#ship")
let game = document.querySelector('#game')
let asteroidi = []

ship.style.left = '50vw';
ship.style.top = '90vh';
let pos = ship.offsetLeft;

window.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft" && pos > 680) {
        ship.style.left = (pos-20)+"px";
        pos = ship.offsetLeft;
    }else if (e.key == "ArrowRight" && pos < 1163) {
        ship.style.left = pos+20+"px";
        pos = ship.offsetLeft;
    }
})

setInterval(() => {
    let magicanAsteroid = document.createElement("img")
    magicanAsteroid.src = 'asteroid.png';
    magicanAsteroid.style.top = '10vh';
    magicanAsteroid.style.position = 'absolute'
    magicanAsteroid.style.left = 680+(Math.random()*420)+'px';
    magicanAsteroid.className = 'asteroid';
    game.appendChild(magicanAsteroid);
    asteroidi.push(magicanAsteroid);

}, 3000);

setInterval(() => {
    asteroidi.forEach((e)=>{
        let ws = e.offsetTop
        e.style.top = ws+5+"px"
        if(e.offsetTop > ship.offsetTop - 40) {
            console.log("aaasssa")
            if(e.offsetLeft < ship.offsetLeft+40 && e.offsetLeft > ship.offsetLeft-40) {
                console.log("Aas")
                game.remove();
                document.body.innerHTML = "you dieded"
            }
        }
        if(ws >1000)
        {
            e.remove()
            console.log("del")
        }
    })
}, 10);
