import axios from 'axios';

const path = 'https://localhost:7074/';

const instance = axios.create({
  baseURL: path,
  headers: {}
});

export default instance;
