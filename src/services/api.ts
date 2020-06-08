import axios from 'axios'

const apiDataBase = axios.create({
  baseURL: 'http://localhost:3001'
});

export default apiDataBase;
