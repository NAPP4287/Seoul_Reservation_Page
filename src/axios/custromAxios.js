import axios from 'axios';
import { getCookie } from './cookie';
import { getAccessToken } from '../redux/token/accessToken';
import { useSelector } from 'react-redux';

export const customAxios = axios.create({
  baseURL: `http://first.likealocal.co.kr:4500`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('myToken')}`,
  },
  withCredentials: true,
});
