import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Item from './Item';
import './style.less';

@inject('demoStore')
@observer
class List extends Component {
  render() {
    const data = [1,2,3,4,5,6,7,8,9,10];
    return <div>
      list pages
      {
        data.map(key => <Item key={key} info={key}>Item-${key}</Item>)
      }
    </div>
  }
}
export default List;