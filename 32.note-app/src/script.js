// create app object
const app = {};

// create object element and track
app.object = {
    addButton : document.getElementById('add-btn'),
    main : document.querySelector('main')
}

// create event function
app.eventFunction = {}

// create app store function
app.storeFunction = {};

// create storeItem function
app.storeFunction.storeNotes = ()=>{
    // create notes array 
    let notes = [];

    // create note and append inside notes;
    let noteDivs = app.object.main.querySelectorAll('.note');

    noteDivs.forEach(noteDiv=>{
        // track element inside the note
        let text = noteDiv.querySelector('textarea').value;
        let color = noteDiv.querySelector('.text-color').value;
        let bgColor = noteDiv.querySelector('.bg-color').value;

        // create note object
        let note = {text,color,bgColor};

        // store data
        notes.push(note);
    })

    // store data
    localStorage.setItem('notes',JSON.stringify(notes));
}

// create setNotes function
app.storeFunction.setNotes = ()=>{
    // get item from local stroage
    let jsonNotes = localStorage.getItem('notes');
    let notes = JSON.parse(jsonNotes);

    // set data in ui
    notes.forEach(note=>{
        // create noteDiv and append chiled inside the main
        let noteDiv = app.createObject.createNote(note);

        app.object.main.appendChild(noteDiv);
    })
}

// addButtonEvent function
app.eventFunction.addButtonEvent = ()=>{
    // create note
    let note = app.createObject.createNote({});

    // append child on main
    app.object.main.appendChild(note);

    // store notes
    app.storeFunction.storeNotes();
}

// editNote function
app.eventFunction.editNote = (event)=>{
    // track element
    let parentDiv = event.target.parentNode.parentNode.parentNode.parentNode
    let textNoteDiv = parentDiv.querySelector('.note-text');
    let textarea = parentDiv.querySelector('textarea');

    if(textNoteDiv.classList.contains('hidden')){
        // hide the textarea and update the textNoteDiv
        let textareaValue = textarea.value;
        textNoteDiv.innerHTML = marked(textareaValue);
        
        // hide textaea and show textNoteDiv
        textNoteDiv.classList.remove('hidden');
        textarea.classList.add('hidden'); 
    }else{
        // show the textarea and hide the textNoteDiv
        textNoteDiv.classList.add('hidden');
        textarea.classList.remove('hidden');
        textarea.focus();
    }

    // store the note in local storage
    app.storeFunction.storeNotes();
}

// deleteNote function
app.eventFunction.deleteNote = (event)=>{
    // find out the parent node
    let parentNode = event.target.parentNode.parentNode.parentNode;

    if(parentNode.className == 'tools'){
        parentNode.parentNode.remove()
    }else{
        parentNode.remove();
    }

    // store the note in local storage
    app.storeFunction.storeNotes();
}

// textColorChange Function
app.eventFunction.textColorChange = (event)=>{
    // let find out textDiv and change text color
    let textDiv = event.target.parentNode.parentNode.parentNode.parentNode.querySelector('.text');

    textDiv.style.color = event.target.value;

    // store the note again
    app.storeFunction.storeNotes();
}

// bgColorChange Function
app.eventFunction.bgColorChange = (event)=>{
    // let find out noteDiv and chagne bg color
    let noteDiv = event.target.parentNode.parentNode.parentNode.parentNode;

    noteDiv.style.background = event.target.value;

    // store notes agains
    app.storeFunction.storeNotes();
}

// createObject function
app.createObject = {}

// createColorInput function
app.createObject.createColorInput = (className,value,eventFunction)=>{
    // create color input and return it
    let colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.className = className;
    colorInput.value = value;
    colorInput.addEventListener('change',eventFunction);

    return colorInput;
}

// createTool Function
app.createObject.createToolsDiv = ({color = '#333333',bgColor = '#f0f8ff'})=>{
    // create div tools
    let toolsDiv = document.createElement('div');
    toolsDiv.className = 'tools';

    // create edit tools div their child
    let editToolsDiv= document.createElement('div');
    editToolsDiv.className = 'edit-tools';


    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    editToolsDiv.appendChild(editButton);
    editToolsDiv.appendChild(deleteButton);

    //  add event listener on buttons
    editButton.addEventListener('click',app.eventFunction.editNote);
    deleteButton.addEventListener('click',app.eventFunction.deleteNote);

    // create color tools div and their child
    let colorToolsDiv = document.createElement('div');
    colorToolsDiv.className = 'color-tools';

    let textColorDiv = document.createElement('div');
    textColorDiv.className = 'color';
    let bgColorDiv = document.createElement('div');
    bgColorDiv.className = 'color';

    // create textColor and bgColor input and append it.
    let textColorInput = app.createObject.createColorInput('text-color',color,app.eventFunction.textColorChange);
    let bgColorInput = app.createObject.createColorInput('bg-color',bgColor,app.eventFunction.bgColorChange);


    textColorDiv.appendChild(textColorInput);
    bgColorDiv.appendChild(bgColorInput);

    colorToolsDiv.appendChild(textColorDiv);
    colorToolsDiv.appendChild(bgColorDiv);

    // append colorToolsDiv and editTools div inside the toolsDiv
    toolsDiv.appendChild(editToolsDiv);
    toolsDiv.appendChild(colorToolsDiv);

    // return toolsDiv
    return toolsDiv;
}

// create textDiv function
app.createObject.createTextDiv = ({text = '',color = '#333333'})=>{
    // create textDiv and set className
    let textDiv = document.createElement('div');
    textDiv.className = 'text';
    textDiv.style.color = color;

    // create noteTextDiv
    let noteTextDiv = document.createElement('div');
    noteTextDiv.className = 'note-text';
    noteTextDiv.innerHTML = marked(text);

    // create textarea
    let textarea = document.createElement('textarea');

    // add hidden class by base on text
    if(text){
        textarea.classList.add('hidden');
    }else{
        noteTextDiv.classList.add('hidden');
    }

    // set text
    textarea.value = text;

    // append child inside the textDiv
    textDiv.appendChild(noteTextDiv);
    textDiv.appendChild(textarea)

    // return textDiv
    return textDiv;
}

// createNote function
app.createObject.createNote = ({text,color,bgColor})=>{
    // create noteDiv and set class and bg color
    let noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.style.background = bgColor ? bgColor : '#f0f8ff';

    // create toolsDiv and textDiv and append the child inside the noteDiv
    let toolsDiv = app.createObject.createToolsDiv({color,bgColor});
    let textDiv = app.createObject.createTextDiv({text,color});

    noteDiv.appendChild(toolsDiv);
    noteDiv.appendChild(textDiv);

    // return note
    return noteDiv;
}

// add event listener on add button
app.object.addButton.addEventListener('click',app.eventFunction.addButtonEvent);

// intial call
app.storeFunction.setNotes();