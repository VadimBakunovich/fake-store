import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import './index.css';

const mode = import.meta.env.MODE;

const AppStrict = (
  <StrictMode>
    <App />
  </StrictMode>
);

const MyApp = mode === 'development' ? <App /> : AppStrict;

createRoot(document.getElementById('root')!).render(MyApp);
