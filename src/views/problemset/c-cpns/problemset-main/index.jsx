import React, { memo } from 'react'

import { MainWrapper } from './styled'
import MainFilter from './c-cpns/main-filter'
import ProblemsetPagination from './c-cpns/problemset-pagination'
import ProblemList from './c-cpns/problem-list'

const ProblemsetMain = memo(() => {
  return (
    <MainWrapper>
        <MainFilter></MainFilter>
        <ProblemList></ProblemList>
        <ProblemsetPagination></ProblemsetPagination>
    </MainWrapper>
  )
})

export default ProblemsetMain