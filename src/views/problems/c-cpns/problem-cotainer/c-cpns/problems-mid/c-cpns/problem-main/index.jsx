import React, { memo, useEffect, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import classNames from 'classnames'

import { MainWrapper } from './styled'
import { useParams } from 'react-router-dom'
import { fetchProblemAction } from '../../../../../../../../store/modules/problem'

const ProblemMain = memo(() => {

  const {pid} = useParams()
  const dispatch = useDispatch()

  const {problemInfo} = useSelector((state)=>(
    {
      problemInfo:state.problem.problemInfo
    }
  ),shallowEqual)


  // const difficulty = new Map([
  //   [1, '简单'],
  //   [2, '中等'],
  //   [3, '困难']
  // ])
  
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
              "easy-text": problemInfo?.difficulty === '简单', 
              "middle-text": problemInfo?.difficulty === '中等', 
              "hard-text": problemInfo?.difficulty === '困难' 
            })}>{problemInfo?.difficulty}</span>
          </div>
        </div>

        <div className="problem-desc">
          <div className="desc-content">
            <ReactMarkdown children={problemInfo?.show_content}></ReactMarkdown>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
})

export default ProblemMain