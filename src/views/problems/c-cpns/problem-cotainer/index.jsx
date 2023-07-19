import React, { memo } from 'react'
import { ContainerWrapper } from './styled'
import ProblemsBottom from './c-cpns/problems-bottom'
import ProblemsMid from './c-cpns/problems-mid'

const ProblemContainer = memo((props) => {

  const {tabSelect,tabClickHandler,problemInfo,codeTemplate,codeLang,showResult} = props

  return (
    <ContainerWrapper>
        <div className="problem">
            <ProblemsMid  
              tabSelect={tabSelect} 
              tabClickHandler={tabClickHandler} 
              problemInfo={problemInfo} 
              codeTemplate={codeTemplate} 
              codeLang={codeLang}
              showResult={showResult}
            ></ProblemsMid>
            <ProblemsBottom></ProblemsBottom>
        </div>
    </ContainerWrapper>
  )
})

export default ProblemContainer