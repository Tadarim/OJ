import React from 'react'
import ReactDOM  from 'react-dom'
import { BackdropWrapper } from './styled'

const backdropDOM = document.getElementById('backdrop')

const Backdrop = (props) => {

    const {children} = props

  return (
    ReactDOM.createPortal(
      <BackdropWrapper>
        {children}
      </BackdropWrapper>,
    backdropDOM 
    )
    
  )
}

export default Backdrop