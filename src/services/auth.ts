import axios from 'axios';
import { API_BASE } from './config';

export interface LoginAPIReq {
    email: string;
    password: string;
}

export const login = (data: LoginAPIReq) => {
    const url = `${API_BASE}/api/v1/login`;
    return axios.post(url, data);
};