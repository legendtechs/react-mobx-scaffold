import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { Input, Button, notification, message } from 'antd';
import { toJS } from 'mobx';

@inject('demoStore')
@observer
class AddTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    };
  }
  onAdd = () => {
    const { demoStore: { addItem, list }} = this.props;
    const { label } = this.state;
    if (!label) {
      message.warn('请输入内容')
      return;
    }
    addItem({
      data: {
        key: toJS(list).length + 1,
        label
      },
      onSucc: () => {
        this.setState({
          label: ''
        })
      }
    });
  }
  onChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }
  render() {
    return (<div className='add'>
      <Input value={this.state.label} onChange={this.onChange} className='input-fix'></Input>
      <Button onClick={this.onAdd} className='btn'>新增</Button>
    </div>)
  }
}
export default AddTpl;