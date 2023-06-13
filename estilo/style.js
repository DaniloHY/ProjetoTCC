//#region SCROLL
const element = document.querySelector("#container_livros");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
  });
});
//#endregion SCROLL

//#region MODO ESCURO

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//#endregion MODO ESCURO