import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  console.log(value);
  return cookies.set(name, value, { ...option });
};

export const removeCookie = (name) => {
  return cookies.remove(name);
};

export const getCookie = (name) => {
  return cookies.get(name);
};

console.log(getCookie('myToken'));
