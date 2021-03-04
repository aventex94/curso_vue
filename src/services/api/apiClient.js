import httpClient from '../httpCliente'

let http = httpClient({
    baseURL: process.env.VUE_APP_BASEURL
})

http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;



export default http