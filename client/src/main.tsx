import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './app/layout/App.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './features/Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
