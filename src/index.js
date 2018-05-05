import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

import { injectGlobal } from 'styled-components';

import globalStyles from './theme/global-styles';

injectGlobal`
  ${globalStyles}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
