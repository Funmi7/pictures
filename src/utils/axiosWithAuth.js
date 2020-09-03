import axios from 'axios';

export default function axioswithAuth() {
  const token = localStorage.getItem('token');

  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  return axiosInstance;
}