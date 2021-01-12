'use strict';

let partners = document.querySelector(".addingactors");
partners.addEventListener("click", openPartners);

function openPartners(){
  this.nextElementSibling.classList.toggle("hover");
}

let form = document.querySelector('.formvalid');
let validateBtn = form.querySelector('.validbtn');

let nametask = form.querySelector('.nametask');
form.querySelector('.nametask').addEventListener('input',function (e) {
  let val = this.value.trim();
  val.length < 3 ? this.setCustomValidity('Введено меньше 3-х символов') :
  this.setCustomValidity('');
})

let description = form.querySelector('.description')
.addEventListener('input',function (e) {
  let val = this.value.trim();
  val.length < 3 ? this.setCustomValidity('Введено меньше 3-х символов') :
  this.setCustomValidity('');
})

let datetask = form.querySelector('.datetask');
form.querySelector('.datetask').addEventListener('input',function (e) {
  let other = this.value.trim();
  Date.prototype.format = function(format = 'yyyy-mm-dd') {
      const replaces = {
          yyyy: this.getFullYear(),
          mm: ('0'+(this.getMonth() + 1)).slice(-2),
          dd: ('0'+this.getDate()).slice(-2),
      };
      let result = format;
      for(const replace in replaces){
        result = result.replace(replace,replaces[replace]);
      }
      return result;
  };
  let corDate = ((new Date()).format('yyyy-mm-dd'));
  // console.log(corDate);
  // console.log(other);
  other < corDate  ? this.setCustomValidity(`Дата не может быть меньше: ${corDate}`) :
  this.setCustomValidity('');
})

let actors = form.querySelector('.actors');
form.querySelector('.actors').addEventListener('input',function (e) {
  let val = this.value.trim();
  val.length < 3 ? this.setCustomValidity('Введено меньше 3-х символов') :
  this.setCustomValidity('');
})

form.addEventListener('submit', function (event) {
  event.preventDefault()
  alert(`добавлена задача: ${nametask.value}, срок к: ${datetask.value} `);
  let task = {
    nametask: form.elements.nametask.value,
    description: form.elements.description.value,
    actors: form.elements.actors.value,
    date: form.elements.date.value,
  };

  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasks ? tasks : [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

});
