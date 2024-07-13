// import axios from 'axios';

// export const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '43144541-7bc3dc74e4831635c05dca2cc';

// export const getAPI = async (search, page) => {
//   const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(search)}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`;

//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error;
//   }
// };


// src/pixabay-api.js
import axios from 'axios';

const API_KEY = '43144541-7bc3dc74e4831635c05dca2cc';
const BASE_URL = 'https://pixabay.com/api/';

export const getAPI = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};
