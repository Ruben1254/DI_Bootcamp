const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

robots.forEach((info) => {
  const divRobot = document.createElement("div");
  divRobot.setAttribute("class", "card")
  divRobot.setAttribute("id", info["id"]);
  let robotPic = document.createElement("img");
  robotPic.setAttribute("src",info["image"]);
  let robotName = document.createElement("h3")
  let textName = document.createTextNode(info["name"]);
  let email = document.createElement("p");
  let textEmail = document.createTextNode(info["email"]);
  divRobot.appendChild(robotPic);
  robotName.appendChild(textName);
  divRobot.appendChild(robotName);
  email.appendChild(textEmail);
  divRobot.appendChild(email);
  let section = document.getElementsByTagName("section")[0];
  section.appendChild(divRobot);
});


const inputSearch = document.querySelector("input");
inputSearch.addEventListener("input", searchDisplay );

function searchDisplay(e) {

  const searchNameResult = robots.filter((item) => item["name"].includes(e.target.value));
  const searchMAilResult = robots.filter((item) => item["email"].includes(e.target.value));
 console.log(searchNameResult)
  
  // for (let i = 0 ; i < robots.length ; i++){
  //   if (!robots[i]["name"].includes(searchNameResult)){ //|| robots[i]["email"].includes(searchMAilResult)){
  //     let htmlDiv = document.getElementById(`$[i+1]`);
  //     console(htmlDiv)
  //     htmlDiv.setAttribute("style","display : none")
  //   }
  // }

  robots.forEach((item) => {
    if (item['name']===searchNameResult['name'] || item['email']===searchMAilResult["email"]) {
    let Yes = document.getElementById(item['id'])
    Yes.setAttribute('style', 'display: block;')
    }else{
    let Yes = document.getElementById(item['id'])
    Yes.setAttribute('style', 'display: none;')
    }
  })
 }