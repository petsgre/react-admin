import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
// import registerServiceWorker from './registerServiceWorker';
import Routes from './router/route';
import '@/style/index';
// import '@/mock'

ReactDOM.render(
  Routes,
  document.getElementById('root') as HTMLElement
);
