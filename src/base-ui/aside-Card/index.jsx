import React from 'react'
import { AsideCardWrapper } from './styled'

const AsideCard = (props) => {

    const {children,title} = props


  return (
    <AsideCardWrapper>
        <div className="title">
            <h1>{title}</h1>
            {children.titleRight && <div className="title-right">
                {children.titleRight}
            </div>}
        </div>
        {
            children.main   
        }
    </AsideCardWrapper>
  )
}

export default AsideCard