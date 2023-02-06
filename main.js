let ship = document.querySelector("#ship")
let game = document.querySelector('#game')
let scorebox = document.querySelector("#scorebox")
let asteroidi = []
let score = 0
let speed = 1000   
let i = 0

let pos = ship.offsetLeft;

window.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowLeft" && pos > 680) {

        let c = setInterval(() => {
            ship.style.left = pos-3+"px";
            pos = ship.offsetLeft;
            i++
            if(i>10) {
            i=0
            clearInterval(c)
            }
        }, 3);
    }else if (e.key == "ArrowRight" && pos < 1163) {
        let c = setInterval(() => {
            ship.style.left = pos+3+"px";
            pos = ship.offsetLeft;
            i++
            if(i>10) {
            i=0
            clearInterval(c)
            }
        }, 3);
    }
})

setTimeout(a(), speed)

function a() {
    let ast = document.createElement("img")
    ast.src = 'asteroid.png';
    ast.style.top = '10vh';
    ast.style.position = 'absolute'
    ast.style.left = 680+(Math.random()*420)+'px';
    ast.className = 'asteroid';
    game.appendChild(ast);
    asteroidi.push(ast);
    setTimeout(a, speed)
}

setInterval(() => {
    asteroidi.forEach((e)=>{
        let ws = e.offsetTop
        e.style.top = ws+5+"px"
        if(e.offsetTop > ship.offsetTop - 40 && e.offsetTop < ship.offsetTop+50) {
            if(e.offsetLeft < ship.offsetLeft+40 && e.offsetLeft > ship.offsetLeft-100) {
                game.remove();
                document.body.innerHTML = "you dieded, final score: " + score
            }
        }
        if(ws >1000)
        {
            e.remove()
            score++
            speed-=10;
            scorebox.innerHTML = "score:" + score
        }
    })
}, 10);
