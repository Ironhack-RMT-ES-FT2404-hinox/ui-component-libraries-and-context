import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// Siempre poner la linea de estilos de bootstrap antes de las nuestras
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { ThemeWrapper } from './context/theme.context.jsx';
// envolviendo mi App en el ThemeWrapper, le da acceso a los estados que existen en él.

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </BrowserRouter>
)
