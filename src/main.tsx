import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import rootStore from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
