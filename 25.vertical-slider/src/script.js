// track element
app.object = {
    slider : document.querySelector('.slider'),
    rightSlider : document.querySelector('.right-slider'),
    leftSlider : document.querySelector('.left-slider'),
    upButton : document.querySelector('.btn-up'),
    downButton : document.querySelector('.btn-down')
}

// need variable
app.slideData = {
    slidesLength : app.object.rightSlider.querySelectorAll('div').length,
    activeSlidesIndex : 0
}

// intial function
app.intialFunction = {
    start : ()=>{
        app.object.leftSlider.style.top = `-${(app.slideData.slidesLength - 1) * 100}vh`;
    }
}

// setData function
app.intialFunction.setData = () => {
    // bgUrl
    let bgUrl = [];

    // add left slide first
    app.data.forEach(({name,title,color,bg}) =>{
        // add bg url inside bgUrl array
        bgUrl.unshift(bg)

        // create div and append inside left slider
        let div = app.dataFunction.createLeftSlideDiv({name,title,color});
        
        app.object.leftSlider.appendChild(div);
    })

    // add right slide 
    bgUrl.forEach(url=>{
        // create div and add div inside the right div
        let div = app.dataFunction.createRightSlideDiv(url);

        app.object.rightSlider.appendChild(div);
    })

    // reset the slidelength
    app.slideData.slidesLength = app.object.rightSlider.querySelectorAll('div').length;
}

// event functions
app.event = {};

// changeSlider function
app.event.changeSlider = () =>{
    const sliderHeight = app.object.slider.clientHeight;
    const activeSlidesIndex = app.slideData.activeSlidesIndex;

    // change slide
    app.object.rightSlider.style.transform = `translateY(-${activeSlidesIndex * sliderHeight}px)`;
    app.object.leftSlider.style.transform = `translateY(${activeSlidesIndex *sliderHeight}px)`;
}

// up event 
app.event.up = ()=>{
    // update the slide active index
    app.slideData.activeSlidesIndex += 1;

    if(app.slideData.activeSlidesIndex > app.slideData.slidesLength -1){
        app.slideData.activeSlidesIndex = 0;
    }

    // change the slide
    app.event.changeSlider();
}

// down event
app.event.down = () =>{
    // update slide index
    app.slideData.activeSlidesIndex -= 1;

    if(app.slideData.activeSlidesIndex < 0){
        app.slideData.activeSlidesIndex = app.slideData.slidesLength -1;
    }

    // change the slide
    app.event.changeSlider();
}

// add event listener on button
app.object.upButton.addEventListener('click',app.event.up);
app.object.downButton.addEventListener('click',app.event.down);

// call intial function of website
app.intialFunction.setData();
app.intialFunction.start();