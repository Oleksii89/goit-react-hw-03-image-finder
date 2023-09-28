const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '38828352-a415a8248b03313c93049703f';
export const getImages = (searchText, page = 1) => {
  fetch(
    `${BASE_URL}/?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    return console.log(response.json());
  });
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
