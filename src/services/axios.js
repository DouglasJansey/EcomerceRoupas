import axios from 'axios';

export default axios.create({
  baseURL: 'https://database-ecomerce.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

