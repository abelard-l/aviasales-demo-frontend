import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';
import ru from 'react-intl/locale-data/ru';
import { IntlProvider, addLocaleData } from 'react-intl';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import messages from './messages';

ReactDOM.render(
  <IntlProvider locale="ru" messages={messages}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
