let ship = document.querySelector("#ship")
let game = document.querySelector('#game')
let scorebox = document.querySelector("#scorebox")
let asteroidi = []
let score = 0
let speed = 1000   

ship.style.left = '50vw';
ship.style.top = '90vh';
let pos = ship.offsetLeft;

window.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft" && pos > 680) {
        ship.style.left = (pos-40)+"px";
        pos = ship.offsetLeft;
    }else if (e.key == "ArrowRight" && pos < 1163) {
        ship.style.left = pos+40+"px";
        pos = ship.offsetLeft;
    }
})

setTimeout(a(), speed)

function a() {
    let magicanAsteroid = document.createElement("img")
    magicanAsteroid.src = 'asteroid.png';
    magicanAsteroid.style.top = '10vh';
    magicanAsteroid.style.position = 'absolute'
    magicanAsteroid.style.left = 680+(Math.random()*420)+'px';
    magicanAsteroid.className = 'asteroid';
    game.appendChild(magicanAsteroid);
    asteroidi.push(magicanAsteroid);
    setTimeout(a, speed)
}

setInterval(() => {
    asteroidi.forEach((e)=>{
        let ws = e.offsetTop
        e.style.top = ws+5+"px"
        if(e.offsetTop > ship.offsetTop - 40 && e.offsetTop < ship.offsetTop+50) {
            console.log("aaasssa")
            if(e.offsetLeft < ship.offsetLeft+40 && e.offsetLeft > ship.offsetLeft-100) {
                console.log("Aas")
                game.remove();
                document.body.innerHTML = "you dieded, final score: " + score
            }
        }
        if(ws >1000)
        {
            e.remove()
            console.log("del")
            score++
            speed-=10;
            scorebox.innerHTML = "score:" + score
        }
    })
}, 5);
