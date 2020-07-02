import client from './client';
import { LoginDto } from '../dto/auth';
// 로그인
export const login = ({ username, password }: LoginDto) => (
  client.post('/api/auth/login', { username, password})
);