import Axios from 'axios';
import { notification } from 'antd';

Axios.interceptors.response.use(response => {
  const status = response.status;
  const { code, content, message: messInfo } = response.data;
  if (!code) {
    return response.data;
  }
  // 错误了
  if (status >= 400 && status < 500) {
    notification.open({
      message: 'Notification Title',
      description: '参数错误或接口地址不存在！',
      icon: <Icon type="error" style={{ color: '#108ee9' }} />,
    });
    throw new Error('参数错误或接口地址不存在！')
  } else if (status >= 500) {
    notification.open({
      message: 'Notification Title',
      description: '服务器发生错误！',
      icon: <Icon type="error" style={{ color: '#108ee9' }} />,
    });
    throw new Error('服务器发生错误！')
  }
  return content;
}, error => {
  return Promise.reject(error)
})

export default async function request (options) {
  const newOptions = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
    ...options
  };
  return Axios(newOptions);
}
