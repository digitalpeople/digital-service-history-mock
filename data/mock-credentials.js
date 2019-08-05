import { hash } from '../app/utils/hash';

const mockUsername = 'test';
const mockPassword = hash('12345');

export { mockUsername, mockPassword };
