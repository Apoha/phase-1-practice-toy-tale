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
  toyAdded()
});







function divClass() {

  const divElem = document.querySelector("#toy-collection")

  fetch('http://localhost:3000/toys')

    .then(function (response) {
      console.log(response)
      return response.json()
    })


    .then(function (json) {
      //console.log(json)

      Array.from(json).forEach(toy =>
      //for(let i = 0; i<json.length; i++)
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
      });

    })

}



function toyAdded() {

  const addNewToy = {

    name: "Jessie",
    image: "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    likes: 0,
  };

  const newToyObjectInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //Accept: "application/json",
    },
    body: JSON.stringify(addNewToy),
  };


  fetch('http://localhost:3000/toys', newToyObjectInfo)

    .then(function (response) {
      console.log(response)
      return response.json()
    })


    .then(function (json) {
      console.log(json)
    })
}