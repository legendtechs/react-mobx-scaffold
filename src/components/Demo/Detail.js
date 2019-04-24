import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import './style.less';
import { Icon } from 'antd';

@withRouter
@inject('demoStore')
@observer
class Detail extends Component {
  onList =() => {
    this.props.history.go(-1);
  }

  render() {
    return <div className='detail'>
      <Icon type='left' onClick={this.onList} className='back'></Icon>
      <span className='desc'>详情页面</span>
    </div>
  }
}
export default Detail;