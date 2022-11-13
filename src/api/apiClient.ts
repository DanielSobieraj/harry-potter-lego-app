import { PartsRoot } from '../components/details-modal/DetailsModalProps';
import { MinifigResult, MinifigRoot } from '../utils/interfaces';

const { REACT_APP_API_KEY, REACT_APP_API_URL } = process.env;

const THEME_ID = 246;
const DEFAULT_PAGE_SIZE = 3;

export const getRandomMinifigsRequest = async (): Promise<MinifigRoot> => {
  const randomPage = Math.floor(Math.random() * (363 / DEFAULT_PAGE_SIZE) + 1);
  const response = await fetch(
    `${REACT_APP_API_URL}/?page_size=${DEFAULT_PAGE_SIZE}&page=${randomPage}&in_theme_id=${THEME_ID}`,
    {
      headers: {
        Authorization: `key ${REACT_APP_API_KEY}` ?? '',
      },
    }
  ).then((data) => data.json());
  return response;
};

export const getSpecificMinifigRequest = async (
  figureId?: string
): Promise<MinifigResult> => {
  const response = await fetch(`${REACT_APP_API_URL}/${figureId}`, {
    headers: {
      Authorization: `key ${REACT_APP_API_KEY}` ?? '',
    },
  })
    .then((data) => data.json())
    .catch((err) => err.json());
  return response;
};

export const getMinifigPartsDetailsRequest = async (
  figureId?: string
): Promise<PartsRoot> => {
  const response = await fetch(`${REACT_APP_API_URL}/${figureId}/parts`, {
    headers: {
      Authorization: `key ${REACT_APP_API_KEY}` ?? '',
    },
  }).then((data) => data.json());
  return response;
};
