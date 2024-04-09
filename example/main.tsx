import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './Counter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Counter />
    <Counter />
    <Counter />
  </React.StrictMode>,
);
