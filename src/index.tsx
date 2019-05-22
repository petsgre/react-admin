import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import Routes from './router/route';
import '@/style/index';
// import registerServiceWorker from './registerServiceWorker';
// import '@/mock'

ReactDOM.render(
  Routes,
  document.getElementById('root') as HTMLElement
);

window.onerror = (e) => {
  console.log(e);
}