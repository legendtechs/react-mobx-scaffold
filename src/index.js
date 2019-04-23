import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import routes from './routes';
import stores from './store';
import './root.less';

ReactDOM.render(<Provider {...stores}>
  { routes }
</Provider>, document.querySelector('#app'));

if (module.hot) {
  module.hot.accept();
}
