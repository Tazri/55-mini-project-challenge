let imgData = [
    {
        imgUrl : './../asset/img/art/air_balloons.jpg',
        color : '#268c84'
    },
    {
        imgUrl : './../asset/img/art/building_castle.jpg',
        color: '#2b2b33'
    },
    {
        imgUrl: './../asset/img/art/deer_tree_art.jpg',
        color : '#c25b14'
    },
    {
        imgUrl : './../asset/img/art/planet-on-sky.jpg',
        color: '#ebb536'
    },
    {
        imgUrl: './../asset/img/art/village_sky.jpg',
        color: '#32a8c1'
    },
    {
        imgUrl: './../asset/img/art/winter.jpg',
        color: '#8389a1'
    },
    {
        imgUrl: './../asset/img/art/wolf_hill.jpg',
        color: '#c00432'
    }
]

// addImg function
function addImg(){
    imgData.forEach(({imgUrl,color})=>{
        // create img set attribute
        let img = document.createElement('img');

        img.src = imgUrl;
        img.alt = imgUrl;
        img.dataset.color = color;

        // append img inside the imgContainer
        document.querySelector('.img-container').appendChild(img);
    })
}

// call addImg
addImg();