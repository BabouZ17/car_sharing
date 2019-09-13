import axios from 'axios';

export const BASE_BACKEND_URL = (process.env.NODE_ENV === 'production') ? process.env.VUE_APP_BACK_END_URL : '';
export const client = axios.create({
    baseURL: BASE_BACKEND_URL,
});