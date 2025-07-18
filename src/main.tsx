import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PerformanceOptimizer from './components/PerformanceOptimizer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PerformanceOptimizer>
      <App />
    </PerformanceOptimizer>
  </React.StrictMode>,
)
