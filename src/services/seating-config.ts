import axios from 'axios';
import { API_BASE } from './config';

export const getSeatingConfig = () => {
    const url = `${API_BASE}/api/v1/config/seating`;
    return axios.get(url);
};

export const updateSeatingConfig = (data: any) => {
    const url = `${API_BASE}/api/v1/config/seating`;
    return axios.post(url, data);
};