import React from 'react'
import Navbar from 'components/Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="Layout_container">
      <Navbar />
      {children}
      <footer>This is the footer</footer>
      <style jsx>{`
        .Layout_container {
          background: blue;
        }
      `}</style>
    </div>
  )
}

export default Layout
