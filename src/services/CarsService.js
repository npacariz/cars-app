import axios from 'axios';

export default  class Cars {
    constructor() {
        axios.defaults.baseURL =  'http://localhost:3000/api/'
    }

    getAll() {
        return axios.get('cars')
    }

    add(newCar) {
        return axios.post('cars', newCar)
    }

    get(id) {
        return axios.get(`cars/${id}`)
    }

    edit(editCar) {
        return axios.put(`cars/${editCar.id}`, editCar)
    }
    
    delete(id) {
        return axios.delete(`cars/${id}`)
    }
}

export const cars =  new Cars;