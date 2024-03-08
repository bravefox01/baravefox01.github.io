let movieArr = new Array();

for(let i=1;i<=10;i++){
    let movie = {
        name: 'movieName',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/poster '+i+'.png'
    }

    movieArr.push(movie);
}    

let divRecommend = document.getElementById("divRecommend");
let str = '';
movieArr.forEach( movie => {
    str += `
    <div class="card">
        <img src="${movie.image}" alt="" class="card-img">
        <div class="card-body">
            <h2 class="name">movie name</h2>
            <h6 class="des">Lorem ipsum dolor sit amet consectetur.</h6>
            <button class="watchlist-btn">add to watchlist</button>
        </div>
    </div>
    `;
})

divRecommend.innerHTML = str;
divPopular.innerHTML = str;