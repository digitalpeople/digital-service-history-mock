import bcrypt from 'bcrypt';

const hashPassword = password => bcrypt.hash(password, 10);
const comparePassword = (actual, expected) => bcrypt.compare(actual, expected);

export { hashPassword, comparePassword };
