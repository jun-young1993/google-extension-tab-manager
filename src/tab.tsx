import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TabManager from "./pages/TabManager";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <TabManager />
    </StrictMode>,
)
