import { Root } from '../utils/interfaces';

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

const apiClient = (endpoint: string) => {
  fetch(`${REACT_APP_API_URL}${endpoint}/?page_size=3&in_theme_id=246`, {
    headers: {
      Authorization: `key ${REACT_APP_API_KEY}` ?? '',
    },
  });
};

export const getMinifigsRequest = async (): Promise<Root> => {
  const randomPage = Math.floor(Math.random() * 121 + 1);
  const response = await fetch(
    `https://rebrickable.com/api/v3/lego/minifigs/?page_size=3&page=${randomPage}&in_theme_id=246&key=${process.env.REACT_APP_API_KEY}`
  ).then((data) => data.json());
  return response;
};
