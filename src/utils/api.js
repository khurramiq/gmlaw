import axios from 'axios';
// export const fbaseUrl = "http://localhost:3000";
export const fbaseUrl = 'https://lmss.netlify.app';
export const baseUrl = 'http://localhost:5000';
// export const baseUrl = "https://customer-repo.herokuapp.com";
export default axios.create({
  baseURL: `${baseUrl}/api`,
});
