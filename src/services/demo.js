import request from 'Utils/request';
import prefixName from './prefix';
import  apiConfig from './api';

export async function getList() {
  const data = await request({
    url: `${prefixName}${apiConfig.demo}`,
    method: 'get',
  });
  return data;
}

export async function getDetail() {
  const data = await request({
    url: `${prefixName}${apiConfig.detail}`,
    method: 'get',
  })
  return data;
}