import React from 'react'
import Navbar from '../organisms/navbar/Navbar'

const AuthLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="auth-container">
      <Navbar />
      <section className="form-content">
        {children}
      </section>
    </div>
  )
}

export default AuthLayout