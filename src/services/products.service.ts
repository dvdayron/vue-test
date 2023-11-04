import axios from 'axios'

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => resolve(response.data))
            .catch(error => reject(error))
    })
}
