import type { ReactNode } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default App
