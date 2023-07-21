import React from 'react'

import { HeaderWrapper } from './styled'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right'

const AppHeader = () => {
  return (
    <HeaderWrapper>
      <div className="top">
        <HeaderLeft></HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
    </HeaderWrapper>
  )
}

export default AppHeader