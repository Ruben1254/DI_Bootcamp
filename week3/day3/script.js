// exe 1

function helloAlert() {
    alert("Hello World")
}

setTimeout(helloAlert, 2000)

let part2 = document.getElementById('container1')

function helloParaph(){
    let hello = document.createElement('p')
    let textHello = document.createTextNode('Hello World')

    hello.appendChild(textHello)
    part2.appendChild(hello)
}

setTimeout(helloParaph, 2000)
let interval = setInterval(helloParaph, 2000)

let clear = document.getElementById('clear')

const clearInt = () => {
    if (document.getElementsByTagName('p').length >= 5 ){
        clearInterval(interval)
    }
}

clear.addEventListener('click', clearInt)

// exe 2

let cube = document.getElementById('animate')
function myMove() {
      let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        console.log(timePassed)
        cube.style.left = timePassed / 5 + 'px';
        if (timePassed > 1730) {
          clearInterval(timer);
        }
    },20);
}
      