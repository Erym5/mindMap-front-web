import request from '../utils/request'

export function uploadImg(file) {
  return request.post('/image/upload', file, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  }
);
}
