let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {


    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  divClass()
});







function divClass() {



  fetch('http://localhost:3000/toys')

    .then(function (response) {
      console.log(response)
      return response.json()
    })


    .then(function (json) {
      console.log(json)
      json.forEach(toy => createNewCard(toy))

      /* Array.from(json).forEach(toy =>
      // for(let i = 0; i<json.length; i++)
       {
          const divClassCard = document.createElement("div");
         divClassCard.className = "card"
          const h2 = document.createElement('h2')
          h2.textContent = toy.name;
         const imgCard = document.createElement('img')
         imgCard.className = "toy-avatar"
         imgCard.setAttribute("src", toy.image)
         likeCount = document.createElement('p')
         likeCount.textContent = toy.likes
         btn = document.createElement('button')
         btn.className = 'like-btn'
         btn.id = toy.id
         btn.textContent = 'Like <3'
         divElem.appendChild(divClassCard);
         divClassCard.appendChild(h2)
         divClassCard.appendChild(imgCard)
         divClassCard.appendChild(likeCount)
         divClassCard.appendChild(btn)
       }); */

    })
}





function toyAdded(name, image) {



  const listOfAddedNewToy = { name, image }

  /*{
     name: "Jessie",
    image: "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    likes: 0}*/

  //   {name: "Masha",
  //   image: "https://m.media-amazon.com/images/I/61GoXHGysyL._AC_SL1500_.jpg",
  //  likes: 0}



  // Add Toy to DOM using the addNewToy object

  const newToyObjectInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(listOfAddedNewToy),
  };


  fetch('http://localhost:3000/toys', newToyObjectInfo)

    .then(function (response) {
      console.log(response)
      return response.json()
    })


    .then(function (json) {
      console.log(json)
      createNewCard(json)
    })


}



function createNewCard(toy) {

  const divElem = document.querySelector("#toy-collection")
  console.log(toy)
  const divClassCard = document.createElement("div");
  console.log(divClassCard)
  divClassCard.className = "card"
  const h2 = document.createElement('h2')
  h2.textContent = toy.name;
  const imgCard = document.createElement('img')
  imgCard.className = "toy-avatar"
  imgCard.setAttribute("src", toy.image)
  likeCount = document.createElement('p')
  likeCount.textContent = toy.likes
  btn = document.createElement('button')
  btn.className = 'like-btn'
  btn.id = toy.id
  btn.textContent = 'Like <3'
  divElem.appendChild(divClassCard);
  divClassCard.appendChild(h2)
  divClassCard.appendChild(imgCard)
  divClassCard.appendChild(likeCount)
  divClassCard.appendChild(btn)


}




const form = document.querySelector(".add-toy-form")
console.log(form)

form.addEventListener("submit", function (e) {
  e.preventDefault()
  //debugger
  const name = e.target[0].value
  const image = e.target[1].value

  console.log("got logged")
  toyAdded(name, image)
})





