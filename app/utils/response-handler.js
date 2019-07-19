const responseHandler = response => (error, data) => {
  if (error) {
    response.sendStatus(404);
    return;
  }

  response.send(data);
};

export default responseHandler;
