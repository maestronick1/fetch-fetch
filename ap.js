const body = document.querySelector('body')
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let sprites = data.sprites;
    console.log (sprites);
    let profilePic = sprites.front_default;
    console.log(profilePic)

    let pokeName = data.name
     console.log(pokeName);
      let hItems = data.held_items
      console.log(hItems);
      let height= data.height
      let weight= data.weight
      console.log(height, weight);
      let moves = data.moves;
      console.log(moves);
      let onlyMove = moves[0].move.name;
      console.log(onlyMove);
      let type = data.types[0].type.name;


    

      const card = document.createElement ('div');
      card.classList.add('card');
      card.style.width = '18rem';
      const image = document.createElement('img');
      image.src = profilePic;
      image.classList.add('card-img-top');
      image.alt = pokeName;
      console.log(image);

      const cardBody = document.createElement('div')
      cardBody.classList.add('card-body');
      
      let firstLetter = pokeName.charAt(0).toUpperCase();
      let otherCHar =pokeName.slice(1)
      let finalName = firstLetter + otherCHar;
      console.log(finalName);
   const cardTitle = document.createElement('h5');
      cardTitle.classList.add("card-title");
      cardTitle.textContent = finalName
      console.log(finalName)
      
      const cardWeight = document.createElement('p');
      const cardHeight = document.createElement('p');
      const cardMove = document.createElement('p');
      const cardType = document.createElement('p');

      cardWeight.classList.add("card-text");
      cardHeight.classList.add('card-height');
      cardMove.classList.add('card-move');
      cardType.classList.add('card-type');

      cardWeight.textContent = "Weight: " + weight;
      cardHeight.textContent = "Height: " + height;
      cardMove.textContent = "Move: " + onlyMove;
      cardType.textContent = "Type: " + type;

      console.log(cardWeight);
      console.log(cardHeight);
      console.log(cardMove);
      console.log(cardType);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardWeight)
      cardBody.appendChild(cardHeight)
      cardBody.appendChild(cardMove)
      cardBody.appendChild(cardType)
    
      card.appendChild(image);//append image
      card.appendChild(cardBody);//append cardBody

      body.appendChild(card);
      console.log(cardBody);
});


//for (let i = 0; i < data.length; i++){
   // let eachCapsule = data[i];

   // const obj = {
//         capsuleID: eachCapsule.capsule_id,
//         details: eachCapsule.details,
//         landings: eachCapsule.landings
//     }
// }