// track element
const ul = document.querySelector('.list');
const input = document.getElementById('todo-text');
const form = document.querySelector('form');

// add event listenr on form
form.addEventListener('submit',event=>{
    event.preventDefault();

    // get value
    const inputValue = input.value.trim();

    if(inputValue){
        // make list item 
        let li = makeListItem(inputValue);

        // append inside the ul
        ul.appendChild(li);

        // remove input value and store todo
        input.value = '';
        storeTodo();
    }
})


// makeListItem function
function makeListItem(todo,className){
    // create list item
    let li = document.createElement('li');
    li.innerText =todo;
    li.className = className || 'todo-item';

    // add event listener on li
    li.addEventListener('click',()=> {
        li.classList.toggle('finish');

        // store list
        storeTodo();
    });

    // add contextmenu event listener on li
    li.addEventListener('contextmenu',(event)=>{
        event.preventDefault();

        li.remove()

        // store list
        storeTodo();
    });

    return li;
}

// storeTodo function
function storeTodo(){
    // extract todo
    let allTodo = document.querySelectorAll('.todo-item');

    let todoData = [];

    // store value inside todoData
    allTodo.forEach(todo=>{
        let className = todo.className;
        let innerText = todo.innerText;

        todoData.push({className,innerText});
    })

    localStorage.setItem('todo',JSON.stringify(todoData));
}

// loadTodo function
function loadTodo(){
    // todo item from localstore
    let todoList = localStorage.getItem('todo');
    let arrayTodo = JSON.parse(todoList);

    // traverse all todo
    arrayTodo.forEach(todo=>{
        // extart todo object
        let {
            className,
            innerText
        } = todo;

        // create li
        let li = makeListItem(innerText,className);

        // apppend child inside the ul
        ul.appendChild(li);
    })
}

// intial call
loadTodo();