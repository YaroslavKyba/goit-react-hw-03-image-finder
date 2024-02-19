import axios from 'axios';

export const requestImageByQuery = async (searchTerm, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=40789881-740a9124b121bb9def1cb2b55&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
