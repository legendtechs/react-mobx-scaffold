import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import './style.less';

@inject('demoStore')
@observer
class Item extends Component {
  render() {
    const { info, demoStore } = this.props;
    console.log('demoStore ', demoStore)
    return (<div>
      { info } 单个的元素内部信息
    </div>)
  }
}
export default Item;