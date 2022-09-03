import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '28284857-c4178a6b6af7e22cb7b0abd73';

export async function fetchApi(searchQuery, page) {
  try {
    const responceArray = await axios.get(
      `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return responceArray.data.hits;
  } catch (error) {
    console.log(error);
  }
}
