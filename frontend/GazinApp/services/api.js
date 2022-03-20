import axios from "axios";

const instancia = axios.create({
    baseURL: 'http://192.168.100.12:8080/',
})

export default instancia;