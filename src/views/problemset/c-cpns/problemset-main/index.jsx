import React, { memo } from 'react'

import { MainWrapper } from './styled'
import MainFilter from './c-cpns/main-filter'
import ProblemList from '../../../../base-ui/problem-list'
import Paginations from '../../../../base-ui/pagination'

const ProblemsetMain = memo((props) => {

  const { list, searchHandler, pageChangeHandler, problemsetTotal, fetchRandomProblem } = props

  return (
    <MainWrapper>
      <MainFilter
        searchHandler={searchHandler}
        fetchRandomProblem={fetchRandomProblem}
      />
      <ProblemList
        list={list}
      />
      <Paginations
        pageChangeHandler={pageChangeHandler}
        total={problemsetTotal}
      />
    </MainWrapper>
  )
})

export default ProblemsetMain