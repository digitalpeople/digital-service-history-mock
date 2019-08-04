import { hashPassword } from '../app/utils/password';

const mockUsername = 'test';
const mockPassword = hashPassword('12345');

export { mockUsername, mockPassword };
