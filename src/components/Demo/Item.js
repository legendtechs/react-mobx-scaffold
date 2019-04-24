import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Button, Icon } from 'antd'
import './style.less';
import { toJS } from 'mobx';

@withRouter
@inject('demoStore')
@observer
class Item extends Component {
  componentWillReact() {
    console.log('componentWillReact ', this.props);
  }
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
  toDetail = e => {
    console.log('props ', this.props)
    this.props.history.push('/detail');
  }
  render() {
    const { info, isActive, demoStore: { activeItem } } = this.props;
    return (<div className='item' onClick={this.onSetActive}>
      <span className='cont'>
        {isActive? <input value={info.label} onChange={this.onInputChange}></input> : info.label}
      </span>
      <span className='btns'>
        <Button onClick={this.onDel} className='ml10'>删除</Button>
        <Button onClick={this.onEdit} className='ml10'>编辑</Button>
        <Icon type="right" onClick={this.toDetail} className='ml10'/>
      </span>
    </div>)
  }
}
export default Item;