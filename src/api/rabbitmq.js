import request from '../utils/request'

export function deletebychoices(params) {
  return request.post('/api/mind_map/deletebychoices', params)
}
