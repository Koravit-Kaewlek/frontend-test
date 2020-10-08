import axios from 'axios';
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
