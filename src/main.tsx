import './css/fonts.css';
import './css/preflight.css';
import './css/main.css';

import * as React from 'react';
import ReactDOM from 'react-dom/client';

import { MyApp } from './my-app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
