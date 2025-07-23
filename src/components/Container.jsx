import React from 'react'

const Container = ({children}) => {
  return (
    <div
      className="
      max-w-[2520px]
      mx-auto 
      xl:px-25
      lg:px-20 
      md:px-18 
      sm:px-8 px-6"
    >
      {children}
    </div>
  )
}

export default Container