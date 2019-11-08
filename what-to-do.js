/*jslint node: true */
"use strict";
/* Steps it needs to accomplish

1. Be able to add new items to the list using input field xx
2. save that new value to an array  xx
    2a. run through the input field for each new added element to add to the visit list
3. Success Message xx
    3a. error message
2. Randomly select from array something to do
3. Show all the things added, so they can be marked off. */


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
