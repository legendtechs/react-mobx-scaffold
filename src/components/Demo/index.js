import React, { Component } from 'react'
import List from './List';
import Header from '../common/Header';

import { observer, inject } from 'mobx-react';
import './style.less';

@inject('demoStore')
@observer
class Demo extends Component {
  render() {
    return <div className='wrapper'>
      <Header></Header>
      <List></List>
    </div>
  }
}
export default Demo;