import { api } from '../boot/axios.js' 

export async function getData(lang){
    return new Promise((resolve, reject) => {
    api.get('/language/' + lang)
    .then(response => {
        resolve(response.data[0]);
    })
    .catch( err => {
        reject(err);
    })
    });
}

export async function getLanguages(){
    return new Promise((resolve, reject) => {
    api.get('/languages/')
    .then(response => {
        resolve(response.data);
    })
    .catch( err => {
        reject(err);
    })
    });
}
