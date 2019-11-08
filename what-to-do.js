/*jslint node: true */
"use strict";


var toDo = [];

const input = document.querySelector('input.addItem');
const p = document.querySelector('p.added');
const submitButton = document.querySelector('button.addItem');
const toDoArray = [];
const addingToList = function(){
  submitButton.addEventListener('click', () => {
    var addElement = input.value;
    toDoArray.push(addElement);
    p.textContent = "New Idea Added!";
    for ( var i = 0; i <= toDoArray.length; i++ ){
        let li = document.createElement('li');
        let ul = document.querySelector('ul.majorList');
        let addListElement = ul.appendChild(li);
        li.textContent = toDoArray[i];
    }
  });
};



addingToList();
