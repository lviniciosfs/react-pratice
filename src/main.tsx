import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserCard from './UserCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserCard name={'a'} email={'email'} role={'user'}/>
  </StrictMode>,
)
