'use strict';
// localStorage.clear();
function sortFunction(a,b){
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
}
function sortFunc(a,b){
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateB > dateA ? 1 : -1;
}

let tasks = JSON.parse(localStorage.getItem("tasks"));
var notesnone = document.querySelector(".notesnone");

function getTask(tasks) {
  let forTasks = jQuery('#tasks');
  if (!tasks || !tasks.length){
    notesnone.classList.add("notesblock");
  }
  $('.updateelem').remove();
  tasks.forEach(task =>{
    forTasks.append(
      `<div id="string" class="updateelem" >
      <input type="checkbox" class="fordelete">
      <h3>Дата:<p> ${task.date}</p></h3>
      <h3>Наименование задачи:<p> ${task.nametask}</p></h3>
      <h3>Описание задачи:<p> ${task.description}</p></h3>
      <h3>Участники:<p> ${task.actors}</p></h3>
      </div>`
    )
  });
};

getTask(tasks);

let deleteButton = document.querySelector(".reset");
deleteButton.addEventListener("click", deleteTasks);

function deleteTasks(event) {
  event.preventDefault();
  let delobj = Object.values(document.querySelectorAll('.fordelete'));
  for (let i = delobj.length - 1; i >= 0; i--) {
    if (delobj[i].checked) {
      let noteObj = delobj[i].parentElement;
      noteObj.classList.add('delete');
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  if (!tasks || !tasks.length){
    notesnone.classList.add("notesblock");
  }
}

$('#sorttask').click(function(){
  let newtasks = tasks.sort(sortFunction);
  getTask(newtasks);
});

$('#othersort').click(function(){
  let othertasks = tasks.sort(sortFunc);
  getTask(othertasks);
});
