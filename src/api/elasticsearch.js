import request from '../utils/request'

export function findMapByText(params) {
  return request.get('/api/es/getByKeyword', { params: {keyword: params}})
}

export function saveAll() {
  return request.post('/api/es/importAll')
}

export function deleteAll() {
  return request.delete('/api/es/deleteAll')
}
