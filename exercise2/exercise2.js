/*Editable div challenge*/
console.log("Welcome to Editable Div!")

const editableDiv = document.querySelector(".content")

editableDiv.innerText = localStorage.getItem("text") ? localStorage.getItem("text") : "";

editableDiv.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.setAttribute('contenteditable', 'true');
})

const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', (e) => {
  localStorage.setItem("text", editableDiv.innerText);
})