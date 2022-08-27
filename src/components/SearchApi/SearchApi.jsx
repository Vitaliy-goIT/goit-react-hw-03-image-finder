import axios from 'axios';

const BACE_URL = 'https://pixabay.com/api/?';

const KEY = '28284857-c4178a6b6af7e22cb7b0abd73';

export const GetImage = params => {
  return axios.get(`${BACE_URL}key=${KEY}&${params}`);
};
