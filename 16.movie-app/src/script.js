// track element
const search = document.querySelector('.search');
const main = document.querySelector('main');
const form = document.querySelector('form');

// api
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8956de5700007e78de442d9c7a94e76e&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8956de5700007e78de442d9c7a94e76e&query="';

// get initial movies
getMovie(API_URL);

// getMovie funciton
async function getMovie(url){
    const res = await fetch(url);
    const data = await res.json();

    updateMainDiv(data.results);
}

// add event listiner on form 
form.addEventListener('submit',event=>{
    event.preventDefault();

    const searchTerm = search.value;

    if(searchTerm.trim() && searchTerm.trim() != ' '){
        getMovie(SEARCH_URL+searchTerm+'"');    
        search.value = '';
    }else{
        window.location.reload();
    }

})

// updateMainDiv fuction
function updateMainDiv(data){
    main.innerHTML = '';
    data.forEach(movie=>{
        // extract the object
        let {
            title,
            poster_path,
            overview,
            vote_average
        } = movie;
        
        // create info object
        let info = {
            name : title,
            imgSrc : IMG_PATH + poster_path,
            imgName : title,
            overview,
            rating : vote_average
        };
        
        // create div
        const div = document.createElement('div');
        div.classList.add("card");

        div.innerHTML = generateHtml(info);

        // append the div inside the main div
        main.appendChild(div);
    })
}

// generate html function
function generateHtml(info){
    let {imgName,imgSrc,name,rating,overview} = info;

    return `
        <img src="${imgSrc}" alt="${imgName}">

        <div class="info">
            <h2>${name}</h2>
            <span class="rating ${takeRatingColor(rating)}">${rating}</span>
         </div>

        <div class="overview">
            <h2>Overview</h2>
            <p>${overview}</p>
        </div>
    `
}

// takeRatingColor function
function takeRatingColor(rating){
    if(rating > 8){
        return 'green';
    }else if(rating > 5){
        return 'orange';
    }else{
        return 'red';
    }
}