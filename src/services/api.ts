import axios from 'axios';

const apiDataBase = axios.create({
  baseURL: 'http://localhost:3333/api',
});

export default apiDataBase;
