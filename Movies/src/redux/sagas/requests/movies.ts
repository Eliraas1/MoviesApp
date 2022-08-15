import axios from 'axios';

export function requestGetData({method = 'GET', url}) {
  const res = axios.request({
    method: method,
    url: url,
  });

  return res;
}
