import axios from "axios";

const api = axios.create({
    baseURL: 'https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo'
});

export function getVagons() {
    return api.get('/').then(res => res.data);
}