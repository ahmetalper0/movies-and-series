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

        const series = data.series;
        const serie_container = document.querySelectorAll('.item-container')[0];

        series.forEach(serie => {

            serie_container.appendChild(create_item(serie.image_url));

        });

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });