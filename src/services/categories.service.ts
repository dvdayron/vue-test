import axios from 'axios'

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((response) => resolve(response.data))
            .catch(error => reject(error))
    })
}
