// create app project
let app = {};

// track element
app.object = {
    form : document.getElementById('form'),
    inputColor : document.getElementById('color'),
    textInput : document.getElementById('text'),
    text : document.getElementById('auto-text'),
    speedSpan : document.getElementById('speed'),
    upButton : document.querySelector('.up'),
    downButton : document.querySelector('.down')
}

// create data object
app.data = {
    speedValue : [50,40,30,20,10],
    speed : 3,
    placeholderBack : false,
    textBack : false ,
    text : app.object.text.innerText,
    textLength : app.object.text.innerText.length,
    textPause : false,
    placeholder : app.object.textInput.placeholder,
    placeholderPause : false,
    placeholderLength : app.object.textInput.placeholder.length,
    textIndex : 1,
    placeholderIndex : 1
}

// create function object
app.function = {}

// submit function
app.function.submit = event=>{
    event.preventDefault();

    // get the value and set value inside the text
    let value = app.object.textInput.value.trim();

    if(value){
        app.object.text.innerText = value;

        // reset the data and input value
        app.object.textInput.value = '';
        app.object.textInput.blur();

        app.data.textBack = false;
        app.data.textIndex = 0;
        app.data.textLength = value.length;
        app.data.text = value;
        app.data.textLength = value.length;
    }
}

// colorChange function
app.function.colorChange = event=>{
    app.object.text.style.color = event.target.value;
}

// speedButton function
app.function.speedButton = (type)=>{
    // decrease the speed
    if(type == 'down'){
         app.data.speed === 1 ||  --app.data.speed;
    }else{
        //increase the speed
        app.data.speed === 5 || ++app.data.speed;
    }

    // update speed
    app.object.speedSpan.innerText = app.data.speed;
}

// textEffect function
app.function.textEffect = ()=>{
    // erase the text letter by letter
    if(app.data.textBack){
        app.object.text.innerText = app.data.text.slice(0,app.data.textIndex--);

        // turn false text back
        if(app.data.textIndex === 1){
            app.data.textBack = false
        }
    }else{
        //  write the text letter by letter
        app.object.text.innerText = app.data.text.slice(0,app.data.textIndex++)

        // turn true  text back
        if(app.data.textIndex > app.data.textLength){
            app.data.textBack = true;
            app.data.textPause = true;
        }
    }

    // call it again
    if(app.data.textPause){
        setTimeout(app.function.textEffect,1000);
        app.data.textPause = false;
    }else{
        let speed = app.data.speedValue[app.data.speed -1];
        setTimeout(app.function.textEffect,speed);
    }
}

// placeholderEffect function
app.function.placeholderEffect = ()=>{
    // erase the text letter by letter
    if(app.data.placeholderBack){
        app.object.textInput.placeholder = app.data.placeholder.slice(0,app.data.placeholderIndex--);

        // turn false text back
        if(app.data.placeholderIndex === 1){
            app.data.placeholderBack = false
        }
    }else{
        //  write the text letter by letter
        app.object.textInput.placeholder = app.data.placeholder.slice(0,app.data.placeholderIndex++)

        // turn true  text back
        if(app.data.placeholderIndex > app.data.placeholderLength){
            app.data.placeholderBack = true;
            app.data.placeholderPause = true;
        }
    }

    // call it again
    if(app.data.placeholderPause){
        setTimeout(app.function.placeholderEffect,1000);
        app.data.placeholderPause = false;
    }else{
        setTimeout(app.function.placeholderEffect,30);
    }
}

// all function
const {
    speedButton,
    colorChange,
    submit,
    textEffect,
    placeholderEffect
} = app.function

// add event listener on down and up button
app.object.upButton.addEventListener('click',speedButton);
app.object.downButton.addEventListener('click',()=>speedButton('down'));

// add eventl listener on color input
app.object.inputColor.addEventListener('change',colorChange);

// add event listener on form 
app.object.form.addEventListener('submit',submit);

// intial function call
textEffect();
placeholderEffect();