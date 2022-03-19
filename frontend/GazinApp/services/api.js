import axios from "axios";

const instancia = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export default instancia;