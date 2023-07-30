import React, { memo } from 'react'
import { MidWrapper } from './styled'
import ProblemTab from './c-cpns/problem-tab'
import { Outlet } from 'react-router-dom'


const ProblemsMid = memo((props) => {

  const { tabSelect, tabClickHandler } = props

  return (
    <MidWrapper>
      <ProblemTab tabClickHandler={tabClickHandler} tabSelect={tabSelect}></ProblemTab>
      <Outlet />
    </MidWrapper>
  )
})

export default ProblemsMid