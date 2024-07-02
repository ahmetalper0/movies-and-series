function create_item(image_src) {

    var item = document.createElement('div');

    item.classList.add('item');

    var image = document.createElement('img');

    image.src = image_src;
    image.alt = 'image';

    item.appendChild(image);

    return item;

}

fetch('https://ahmetalper-movies-and-series.hf.space/series')

    .then(response => response.json())

    .then(data => {

        var item_containers = document.querySelectorAll('.item-container');

        data.forEach(item => {

            const [item_date, item_type, item_name, item_image_url] = item;

            item_containers[0].appendChild(create_item(item_image_url));
            
        });

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });
