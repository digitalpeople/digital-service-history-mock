const isEqualParam = (request, path, value) => (
  typeof path === 'string' && ('params' in request) ?
    request.params[path] === value :
    false
);

export default isEqualParam;
