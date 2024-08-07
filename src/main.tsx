import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './components/utils/PageVariables.ts'

/* ————————————————————————————————————————————— CSS ———————————————————————————————————————————— */

import './resources/css/browse.css'
import './resources/css/exp-movie.css'
import './resources/css/margin.css'
import './App.css'
import './resources/css/my-movies.css'
import './index.css'

// dummy commit for testing azure publishing

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
