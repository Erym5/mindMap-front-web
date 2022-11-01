import request from '../utils/request'

export function login(params) {
  return request.post('/api/user/login', params);
}
