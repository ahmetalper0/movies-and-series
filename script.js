function create_item(image_src, image_name) {

    var item = document.createElement('div');

    item.classList.add('item');

    var image = document.createElement('img');

    image.src = image_src;
    image.alt = image_name;

    item.appendChild(image);

    return item;

}

fetch('https://ahmetalper-movies-and-series.hf.space/all')

    .then(response => response.json())

    .then(data => {

        const movies = data.movies;
        const series = data.series;

        var movies_container = document.querySelector('.movies-container');
        var series_container = document.querySelector('.series-container');

        for (let i = 0; i < 10; i++) {

            const movie = movies[i];
            const serie = series[i];

            var item = create_item(movie.image, movie.name);
            
            movies_container.appendChild(item);

            var item = create_item(serie.image, serie.name);

            series_container.appendChild(item);

        }

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });
