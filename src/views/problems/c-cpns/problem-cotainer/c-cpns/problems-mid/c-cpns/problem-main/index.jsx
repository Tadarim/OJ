import React, { memo } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import classNames from 'classnames'

import { MainWrapper } from './styled'

const ProblemMain = memo((props) => {

  const {problemInfo,codeTemplate,codeLang} = props

  const difficulty = new Map([
    [1, '简单'],
    [2, '中等'],
    [3, '困难'],
  ])

  let template = codeTemplate?.filter((item) => {
    return item.language === codeLang
  })

  return (
    <MainWrapper>
      <div className="problem-default">
        <div className="problem-title">
          <h4>
            <a href="/problems/minimum-cost-to-connect-two-groups-of-points/">
              {problemInfo?.title}
            </a>
          </h4>
          <div className="title-bottom">
            <span>难度</span>
            <span className={classNames({ 
              "easy-text": difficulty.get(problemInfo?.difficulty) === '简单', 
              "middle-text": difficulty.get(problemInfo?.difficulty) === '中等', 
              "hard-text": difficulty.get(problemInfo?.difficulty) === '困难' 
            })}>{difficulty.get(problemInfo?.difficulty)}</span>
          </div>
        </div>

        <div className="problem-desc">
          <div className="desc-content">
            <ReactMarkdown children={problemInfo?.show_content}></ReactMarkdown>
          </div>
        </div>
        
        <pre className="problem-codeTemplate">
            代码模板{'\n'}
            {template[0]?.template}
        </pre>
      </div>
    </MainWrapper>
  )
})

export default ProblemMain