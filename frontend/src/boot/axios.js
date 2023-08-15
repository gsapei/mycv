import axios from 'axios'

const api = axios.create({ 
    baseURL: 'http://localhost:8901',
  });

export { api };