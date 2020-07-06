import client from './client';
import { LoginDto } from '../dto/auth';

// 로그인
export const login = ({ username, password }: LoginDto) => (
  client.post('/api/auth/login', { username, password})
);

// 로그인 체크
export const check = () => client.get('/api/auth/check');