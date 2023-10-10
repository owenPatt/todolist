const headerForm = document.querySelector(".header__form");
const headerInput = document.querySelector(".header__input");
const itemContainer = document.querySelector(".main__item-container");

/*************
 * FUNCTIONS *
 *************/
const createNewItem = (title) => {
  const template = document.getElementById("item-template");
  const newItem = template.content.cloneNode(true);
  const newItemTitle = newItem.querySelector(".item__title");
  newItemTitle.textContent = title;
  itemContainer.appendChild(newItem);
};

/*******************
 * EVENT LISTENERS *
 *******************/
headerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewItem(headerInput.value);
  headerInput.value = "";
});

itemContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__delete")) {
    e.target.parentElement.remove();
  }
});
