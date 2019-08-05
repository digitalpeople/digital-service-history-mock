import jwt from 'jsonwebtoken';
import jwtKey from '../../data/mock-jwt-key';

const createToken = content => jwt.sign(content, jwtKey, { expiresIn: '1h' });

export default createToken;
