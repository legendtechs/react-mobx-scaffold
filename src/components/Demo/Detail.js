import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import './style.less';

@inject('demoStore')
@observer
class Detail extends Component {
  render() {
    return <div className='detail'>
      item的详情页面
    </div>
  }
}
export default Detail;