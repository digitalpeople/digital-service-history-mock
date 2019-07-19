import getJson from '../../utils/get-json';

export const getCarsHandler = (request, response) => {
  const path = 'data/cars.json';
  getJson(path, response);
};

export const getCarsByIdHandler = (request, response) => {
  const path = 'data/cars-by-id.json';
  getJson(path, response);
};
