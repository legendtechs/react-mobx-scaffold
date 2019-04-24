import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Item from './Item';
import './style.less';
import { toJS } from 'mobx';

@inject('demoStore')
@observer
class List extends Component {
  componentDidMount() {
    this.props.demoStore.getList();
  }
  render() {
    const { demoStore: { list, activeItem } } = this.props;
    const curData = toJS(list);
    return <div className='list'>
      {
        curData.map(info => <Item key={info.key} info={info} isActive={toJS(activeItem) && toJS(activeItem).key === info.key}></Item>)
      }
    </div>
  }
}
export default List;