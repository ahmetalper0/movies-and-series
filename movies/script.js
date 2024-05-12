function create_item(image_src, image_name) {

    var item = document.createElement('div');

    item.classList.add('item');

    var image = document.createElement('img');

    image.src = image_src;
    image.alt = image_name;

    item.appendChild(image);

    return item;

}

fetch('https://ahmetalper-movies-and-series.hf.space/movies')

    .then(response => response.json())

    .then(data => {

        const movies = data;

        var movies_container = document.querySelector('.movies-container');

        for (let i = 0; i < 10; i++) {

            const movie = movies[i];

            var item = create_item(movie.image, movie.name);
            
            movies_container.appendChild(item);

        }

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });
