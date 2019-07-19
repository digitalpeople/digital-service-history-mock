import fs from 'fs';
import responseHandler from './response-handler';

const getJson = (path, response) => {
  response.append('Content-Type', 'application/json');
  fs.readFile(`${path}`, responseHandler(response));
};

export default getJson;
