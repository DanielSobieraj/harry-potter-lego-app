import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/container/Container';
import './index.css';
import Router from './utils/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Container>
      <Router />
    </Container>
  </BrowserRouter>
);
