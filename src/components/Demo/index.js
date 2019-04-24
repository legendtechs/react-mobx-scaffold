import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import List from './List';
import Header from '../common/Header';
import AddTpl from './Add';
import './style.less';

@inject('demoStore')
@observer
class Demo extends Component {
  render() {
    return <div className='demoBox'>
      <Header></Header>
      <AddTpl></AddTpl>
      <List></List>
    </div>
  }
}
export default Demo;