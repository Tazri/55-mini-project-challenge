// create app element
const app = {};

app.data = [
    {
        name : 'Wolf on Hill',
        title : 'The brave wolf on the hill',
        color: '#e3083c',
        bg : './../asset/img/art/wolf_hill.jpg'
    },
    {
        name : 'The Winter',
        title : 'The white winter',
        color : 'aliceblue',
        bg: './../asset/img/art/winter.jpg'
    },
    {
        name : 'Village Sky',
        title : 'See the village sky',
        color: '#4c72b3',
        bg : './../asset/img/art/village_sky.jpg',
    },
    {
        name : 'Planet on Sky',
        title : 'See the planet on sky',
        color : '#fac851',
        bg : './../asset/img/art/planet-on-sky.jpg'
    },
    {
        name : 'Deer And Tree',
        title : 'Deer next to the tree',
        color: '#c35641',
        bg : './../asset/img/art/deer_tree_art.jpg'
    },
    {
        name : 'The Castle',
        title : 'Castle inside the forrest',
        color : '#323a48',
        bg : './../asset/img/art/building_castle.jpg'
    },
    {
        name : 'Air Baloon',
        title : 'Air baloon on sky',
        color : '#00a868',
        bg : './../asset/img/art/air_balloons.jpg'
    }
]

// cretae dataFunction object inside the app
app.dataFunction = {}

// create rightSlideDiv
app.dataFunction.createRightSlideDiv = (url)=>{
    // create div and set style and return it
    const div = document.createElement('div');

    div.style.background = `url(${url})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center center';

    return div;
}

// create leftSlideDiv
app.dataFunction.createLeftSlideDiv = ({name,title,color})=>{
    // create div and set inside data and return div
    const div = document.createElement('div');

    div.className = 'left-slide'
    div.style.backgroundColor = color;
    div.style.color = color;

    div.innerHTML = `
    <h1>${name}</h1>
    <p>${title}</p>
    `
    return div;
}