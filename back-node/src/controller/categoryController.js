import axios from 'axios';

const getCategoryInfo = async function (id) {
    if(id) {
        // try {
            const url = `https://api.mercadolibre.com/categories/${id}`;
            let data;

            await axios.get(url)
                .then(response => {
                    data = response.data
                })
                .catch(error => {
                    console.log("ERROR", error);
                });

            const categories = data.path_from_root.map((category) => category["name"])

            return categories 
        // } catch (e) {

        // }
    } else {
        return {message: 'bad request, ingrese id de la categoria'}
    }
}

export { getCategoryInfo }