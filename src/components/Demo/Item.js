import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { Button } from 'antd'
import './style.less';
import { toJS } from 'mobx';

@inject('demoStore')
@observer
class Item extends Component {
  onSetActive = () => {
    const { isActive, info, demoStore: { setActive } } =this.props
    if (isActive) {
      return
    }
    setActive(info);
  }
  onDoubleClick = () => {
    console.log('onDoubleClick');
  }
  onBlur = () => {
    console.log('onBlur');
  }
  onDel = () => {
    const { info, demoStore: { delItem } } = this.props;
    delItem(info);
  }
  onEdit =() => {
    const { info, demoStore: { setActive }} = this.props;
    setActive(info);
  }
  onInputChange = e => {
    const { info, demoStore: { updateItem }} = this.props;
    const data = {
      ...info,
      label: e.target.value
    };
    updateItem(data);
  }
  componentWillReact() {
    console.log('componentWillReact ', this.props);
  }
  render() {
    const { info, isActive, demoStore: { activeItem } } = this.props;
    return (<div className='item' onClick={this.onSetActive}>
      <span className='cont'>
        {isActive? <input value={info.label} onChange={this.onInputChange}></input> : info.label}
      </span>
      <span className='btns'>
        <Button onClick={this.onDel} className='mb10'>删除</Button>
        <Button onClick={this.onEdit}>编辑</Button>
      </span>
    </div>)
  }
}
export default Item;