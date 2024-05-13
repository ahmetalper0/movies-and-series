function create_item(image_src) {

    var item = document.createElement('div');

    item.classList.add('item');

    var image = document.createElement('img');

    image.src = image_src;
    image.alt = 'image';

    item.appendChild(image);

    return item;

}

fetch('https://ahmetalper-movies-and-series.hf.space/database')

    .then(response => response.json())

    .then(data => {

        const movies = data.movies;
        const movie_container = document.querySelectorAll('.item-container')[0];

        movies.forEach(movie => {

            movie_container.appendChild(create_item(movie.image_url));

        });

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });