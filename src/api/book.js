import request from '../utils/request'
import axios from "axios";


export function findBookByText(params) {
  return request.get('/api/book/search', { params: {keyword: params}})
}
