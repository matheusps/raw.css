import React from 'react'
import Logo from './Logo'

import '../raw.css'

function Layout({ children }){
  return (
    <div>
      <header className="sticky">
        <Logo size={64} />
        <h1>raw.css</h1>
        <nav>
          <a>Core</a>
          <a>Modifiers</a>
          <a>Patterns</a>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout