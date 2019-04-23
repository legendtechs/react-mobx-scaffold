import React, { Component } from 'react';

import './app.less';

class App extends Component {
  render () {
    return <div className='container'>
      <header className='head'>App 头部</header>
      <div className='body'>
        {
          this.props.children
        }
      </div>
      <footer className='foot'>App底部</footer>
    </div>;
  }
}
export default App;
