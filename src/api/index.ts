import axios from 'axios';

const CUDM_API_URL = import.meta.env.VITE_CUDM_API_URL as string;
export const CudmAPI = axios.create({
  baseURL: CUDM_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
