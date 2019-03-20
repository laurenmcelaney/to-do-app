function onReady() {

}
window.onload = function() {
  onReady();
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   addToDoForm.addEventListener('submit', event => {
   event.preventDefault();

   // get the text
   let title = newToDoText.value;

   // create a new li
   let newLi = document.createElement('li');

   // create a new input
   let checkbox = document.createElement('input');
   let deleteButton = document.createElement('button')
      deleteButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-button--primary');

   // set the input's type to checkbox
   checkbox.type = "checkbox";

   // set the title
   newLi.textContent = title;

   // attach the checkbox to the li
   newLi.appendChild(checkbox);

   // attach the li to the ul
   toDoList.appendChild(newLi);
   deleteButton.type = "delete";
   deleteButton.textContent = "delete";
   newLi.appendChild(deleteButton);

   //empty the input
   newToDoText.value = '';

   deleteButton.addEventListener('click',
    function (event){
      newLi.remove();
    })

 });

}
