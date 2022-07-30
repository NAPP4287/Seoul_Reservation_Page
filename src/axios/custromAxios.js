import axios from 'axios';
import { getCookie } from './cookie';

export const customAxios = axios.create({
  baseURL: `http://first.likealocal.co.kr:4500`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('myToken')}`,
  },
});
