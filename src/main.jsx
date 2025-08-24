import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InputField } from './InputField'
import { Section } from './Section'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App></App>
  </StrictMode>,
)
