import React, { memo } from 'react'
import classNames from 'classnames'

import { ProblemWrapper } from './styled'


const Problem = memo((props) => {

  const { problem } = props

  return (
    <ProblemWrapper>
      <div className="main-item-title margin">
        <div className="title-container">
          <div className="title">
            <a href={`/problems/${problem.id}`}>
              {problem.title}
            </a>
          </div>
        </div>
      </div>
      <div className="main-item-solution margin">
        <div className="solution-container">
          <div className="solution">
            {problem.accessPercent}
          </div>
        </div>
      </div>
      <div className="main-item-difficulty margin">
        <div className="difficulty">
          <span className={classNames({ 
              "easy-text": problem.difficulty === '简单', 
              "middle-text": problem.difficulty === '中等', 
              "hard-text": problem.difficulty === '困难' 
            })}>
            {problem.difficulty}
          </span>
        </div>
      </div>
    </ProblemWrapper>
  )
})

export default Problem