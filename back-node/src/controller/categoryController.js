import axios from 'axios';

import { URL_MELI } from '../../config/config.js'

const getCategoryInfo = async function (id) {
    if(id) {
        const url = `${URL_MELI}/categories/${id}`;
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
    } else {
        return {message: 'bad request, ingrese id de la categoria'}
    }
}

export { getCategoryInfo }