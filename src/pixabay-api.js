import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38912022-909e19910279754e6bef7369e';

export async function getImage(q, page = 1) {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 12,
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error('Error fetching images from Pixabay API');
  }
}
