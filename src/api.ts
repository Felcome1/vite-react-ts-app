import axios from "axios";
import type { iVagon } from "./types";

const api = axios.create({
    baseURL: 'https://rwl.artport.pro/commercialAgent/hs/CarrWorkApp/VagonInfo'
});

export function getVagons() {
    return api.get('/').then(res => res.data);
}

export function uploadImage(image: File, VagonNumber: iVagon["VagonNumber"]) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('meta', JSON.stringify({ VagonNumber }));
    axios.post("upload_image", formData, {headers: {'Content-Type': 'multipart/form-data'}})
}
