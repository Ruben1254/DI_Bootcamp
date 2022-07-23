// 1st Challenge

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then((values) => (console.log(values)))

// 2nd Challenge
 

// const sunsetHour = (e) => {
//   e.preventDefault()
//   let latCity1 = document.getElementsByClassName("lat")[0].value
//   let longCity1 = document.getElementsByClassName("long")[0].value
//   let latCity2 = document.getElementsByClassName("lat")[1].value
//   let longCity2 = document.getElementsByClassName("long")[1].value


  
//     const p1 = new Promise((resolve, reject) =>{
//       let resCity1 = fetch(`https://api.sunrise-sunset.org/json?lat=${latCity1}&lng=${longCity1}&date=today`)
//       if (resCity1.status == 200){
//         let jsonCity1 = resCity1.json()
//         resolve(jsonCity1.results.sunrise)  
//       }else{
//          reject("Error city1")
//        }
//     })
  
//     const p2 = new Promise ((resolve,reject) =>{
//     let resCity2 = fetch(`https://api.sunrise-sunset.org/json?lat=${latCity2}lng=${longCity2}date=today`)
//     if (resCity2.status == 200){
//       let jsonCity2 = resCity2.json()
//       resolve(jsonCity2.results.sunrise) 
//     }else{
//        reject("Error city2")
//      }
//     })

//   const display = (arr) => {
//     arr.forEach((item, index) => {
//       let div = document.createElement('div')
//       let p = document.createElement('p')
//       let text = document.createTextNode(`Sunset hour at Citi ${index} : ${item}`)
//       p.appendChild(text)
//       div.appendChild(p)
//       document.body.appendChild(div)
//     })
//   }

// Promise.all([p1,p2])
// .then(values => display(values))
// .catch(error => console.log(error))

// }




const sunsetHour = (e) => {
  e.preventDefault()
  // let latCity1 = document.getElementsByClassName("lat")[0].value
  // let longCity1 = document.getElementsByClassName("long")[0].value
  // let latCity2 = document.getElementsByClassName("lat")[1].value
  // let longCity2 = document.getElementsByClassName("long")[1].value


  
    const p1 = new Promise((resolve, reject) =>{
      fetch(`https://api.sunrise-sunset.org/json?lat=3&lng=4&date=today`)
      .then(resCity1 => {
        if (resCity1.status == 200){
          let jsonCity1 = resCity1.json()
          console.log(jsonCity1)
          resolve(jsonCity1.result.sunrise)  
        }else{
           reject("Error city1")
         }
      })
    })
    return p1
}
let formerLocation = document.getElementById("sunsetform")
formerLocation.addEventListener("submit", sunsetHour)
