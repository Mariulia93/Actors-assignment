fetch('actors.json')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    showActor(data);
    console.log(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });
  

function showActor(actors){
    actors.forEach((actor) => {
        console.log(actor);
        const template = document.querySelector("template").content;
        const clone = template.cloneNode(true);
        clone.querySelector(".name").textContent = actor.fullname;
        clone.querySelector(".movie").textContent = actor.movie;
        clone.querySelector(".secondpart").classList.add("hidden");
        const mainEl = document.querySelector("main");
        mainEl.appendChild(clone);
        document.querySelector(".stylingim").addEventListener("click", toggleImg)
    })
   
}
function toggleImg() {
    document.querySelector(".secondpart").classList.toggle("hidden");
}

 
        

