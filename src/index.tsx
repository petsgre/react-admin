import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './router/route';

ReactDOM.render(
  Routes,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
