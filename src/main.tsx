import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './docs/App'

import './lib/styles/_helpers.scss';
import './lib/styles/_reset.scss';
import './lib/components/components.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
  </StrictMode>,
)
