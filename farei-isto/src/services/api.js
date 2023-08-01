import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://just-it-de5a0ba7a62d.herokuapp.com'
})