let planets = ["mercure","venus","earth","mars","jupiter","saturn","uranus","neptune"];

let colors = ["yellow","orange","blue","red","yellow","grey","lightblue","blue"];

for (let i = 0 ; i < planets.length; i++){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","planet");
    newDiv.style.backgroundColor = colors[i];
    document.getElementsByTagName("section")[0].append("newDiv");
}
