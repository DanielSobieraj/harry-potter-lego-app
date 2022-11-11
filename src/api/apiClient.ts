const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

const apiClient = () => {
  fetch(`${REACT_APP_API_URL}minifigs/?page_size=3&in_theme_id=246`, {
    headers: {
      'X-API-KEY': REACT_APP_API_KEY ?? '',
    },
  });
};

export const getMinifigsRequest = async () => {
  const response = await apiClient();
  //   return response.json().results
};
