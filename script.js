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

        var item_containers = document.querySelectorAll('.item-container');

        var movie_count = 10;
        var series_count = 10;
        
        data.forEach(item => {

            const [item_date, item_type, item_name, item_image_url] = item;

            if (item_type == 'Movie') {

                if (movie_count > 0) {

                    item_containers[0].appendChild(create_item(item_image_url));

                    movie_count = movie_count - 1

                }

            }

            if (item_type == 'Series') {

                if (series_count > 0) {

                    item_containers[1].appendChild(create_item(item_image_url));

                    series_count = series_count - 1

                }

            }
            
        });

    })

    .catch(error => {

        console.error(`Error : ${error}`);

    });
