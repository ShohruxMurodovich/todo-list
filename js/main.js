var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elList = document.querySelector(".list");

var toDoList = [];

elForm.addEventListener("submit" , function(evt){
  evt.preventDefault()
  var inputVal = elInput.value.trim();

  var toDo = {
    id: toDoList.length,
    title: inputVal,
  };

  toDoList.push(toDo.title);
  elList.innerHTML = "";
  for (var item of toDoList) {

    var li = document.createElement("li");

    li.textContent = item;

    elList.appendChild(li);

    elInput.value = ""
  }
});