import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Countdown from './Countdown.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Countdown />
  </StrictMode>
)
