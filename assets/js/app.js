let movies = "";

let color =(num) => {
    if(num > 7.5){
        return "bg-success";
    }else if(num > 5 && num < 7.5){
        return "bg-warning";
    }else{
        return "bg-danger";
    }
}

movieArray.forEach((ele) => {
  movies += `
         <div class="col-md-4 mb-4 box">
            <div class="card">
              <figure class="movieCard mb-0">
                <img
                  src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
                  alt="${ele.title}"
                  title="${ele.title}"
                />
                <figcaption class="movieTitle p-2">
                  <div class="row">
                    <div class="col-10">
                      <h3>${ele.title}</h3>
                    </div>
                    <div class="col-2 align-self-center">
                      <span class="pt-2 pb-2 ${color(ele.vote_average)}">${ele.vote_average}</span>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div class="movieOverview p-3">
                <h3 class="text-center">${ele.title}</h3>
                <p>
                  ${ele.overview}
                </p>
              </div>
            </div>
        </div>`;
});

document.getElementById('movies').innerHTML=movies;
