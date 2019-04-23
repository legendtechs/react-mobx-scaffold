import request from 'Utils/request';
import prefixName from './prefix';
import  apiConfig from './api';

export async function getUser() {
  const data = await request({
    url: `${prefixName}${apiConfig.user}`,
    method: 'get',
  })
  return data;
}