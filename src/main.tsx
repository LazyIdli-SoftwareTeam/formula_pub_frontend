import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import rootStore from './store/index.ts';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <SnackbarProvider autoHideDuration={2000}>
    <Provider store={rootStore} >
      <App />
    </Provider>
  </SnackbarProvider>
);
