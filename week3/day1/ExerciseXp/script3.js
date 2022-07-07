let Div = document.getElementsByTagName("div")[0];
Div.setAttribute("id","socialNetworkNavigation");

let newLi = document.getElementsByTagName("ul")[0];
let li = document.createElement("li");
let text = document.createTextNode("Logout");
li.appendChild(text);
newLi.appendChild(li);