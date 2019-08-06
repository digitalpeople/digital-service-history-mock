import bcrypt from 'bcrypt';

const hash = password => bcrypt.hash(password, 10);
const compare = (actual, expected) => bcrypt.compare(actual, expected);

export { hash, compare };
