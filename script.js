let toDoInput = document.querySelector('input');
let toDoList = document.querySelector('.to__do__list');
let toDoButton = document.querySelector('button');
let toDoForm = document.querySelector('form');

//local storage

let toDoListStorage = localStorage.getItem('toDoList');
if (toDoListStorage) {
  toDoList.innerHTML = toDoListStorage;
}

//create Element

toDoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  let toDoValue = toDoInput.value.trim();

  if (toDoValue) {
    let toDoItem = document.createElement('li'); 
    toDoItem.innerHTML = `
      <input type="checkbox" class="list__item">${toDoValue}
      <label><button class="list__btn">Delete</button><button class="list__btn__2">Edit</button></label>
    `;
    toDoList.appendChild(toDoItem);
    toDoInput.value = '';

    localStorage.setItem('toDoList', toDoList.innerHTML);
  }
})

//delete

window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('list__btn')) {
    evt.target.parentNode.parentNode.remove();
    localStorage.setItem('toDoList', toDoList.innerHTML);
  }
})


//edit
window.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('list__btn__2')) {
    let editInput = prompt('Edited text');
    let toDoItem = evt.target.parentNode.parentNode;
    toDoItem.innerHTML = `
      <input type="checkbox" class="list__item">${editInput}
      <label><button class="list__btn">Delete</button><button class="list__btn__2">Edit</button></label>
    `;
    localStorage.setItem('toDoList', toDoList.innerHTML);
  }
})