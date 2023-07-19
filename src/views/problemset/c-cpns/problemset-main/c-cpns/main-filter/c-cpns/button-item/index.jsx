import React from 'react'
import { ButtonItemWrapper } from './styled'

const ButtonItem = (props) => {

    const {desc,clickHandler,index} = props

    return (
        <ButtonItemWrapper>
            <button onClick={()=>{clickHandler(index)}}>
                {desc}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clipRule="evenodd">
                    </path>
                </svg>
            </button>
        </ButtonItemWrapper>
    )
}

export default ButtonItem