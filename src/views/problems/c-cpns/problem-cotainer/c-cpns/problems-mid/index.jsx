import React, { memo } from 'react'
import { MidWrapper } from './styled'
import ProblemTab from './c-cpns/problem-tab'
import ProblemMain from './c-cpns/problem-main'
import { Outlet } from 'react-router-dom'
import Submission from '../../../submission'

const ProblemsMid = memo((props) => {

  const {tabSelect,tabClickHandler,problemInfo,codeTemplate,codeLang,showResult} = props

  return (
    <MidWrapper>
      <ProblemTab tabClickHandler={tabClickHandler} tabSelect={tabSelect}></ProblemTab>
      {tabSelect === 3 && <Submission showResult={showResult} ></Submission>}
      {tabSelect === 0 && <ProblemMain problemInfo={problemInfo} codeTemplate={codeTemplate} codeLang={codeLang} ></ProblemMain>}
      {(tabSelect === 1 || tabSelect === 2)  && <Outlet></Outlet>} 
    </MidWrapper>
  )
})

export default ProblemsMid