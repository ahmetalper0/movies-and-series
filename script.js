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

        item_containers = document.querySelectorAll('.item-container');

        for (let i = 0; i < 10; i++) {

            item_containers[0].appendChild(create_item(data.movies[i].image_url));
            item_containers[1].appendChild(create_item(data.series[i].image_url));

        }

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });
