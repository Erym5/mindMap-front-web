import request from '../utils/request'

export function mindMapCreate(id) {
  return request.get('/api/mind_map/' + id);
}

export function mindMapSave(params) {
  return request.post('/api/mind_map/save', params);
}

export function updateMap(params) {
  return request.post('/api/mind_map/update', params);
}

export function getMap(mapId) {
  return request.get('/api/mind_map/get/' + mapId);
}

export function getMaps() {
  return request.get('/api/mind_map/getAll');
}

export function deleteMapById(id) {
  return request.delete('/api/mind_map/delete', {params: {mapId: id}});
}
