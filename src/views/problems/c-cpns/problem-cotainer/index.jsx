import React, { memo } from 'react'
import { ContainerWrapper } from './styled'
import ProblemsBottom from './c-cpns/problems-bottom'
import ProblemsMid from './c-cpns/problems-mid'

const ProblemContainer = memo((props) => {

  const { tabSelect, tabClickHandler, pid, fetchRandomProblem } = props

  return (
    <ContainerWrapper>
      <div className="problem">
        <ProblemsMid
          tabSelect={tabSelect}
          tabClickHandler={tabClickHandler}
        />
        <ProblemsBottom
          pid={pid}
          fetchRandomProblem={fetchRandomProblem}
        />
      </div>
    </ContainerWrapper>
  )
})

export default ProblemContainer