import React from 'react'

const HomeLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div className="home-container">
        {children}
    </div>
  )
}

export default HomeLayout