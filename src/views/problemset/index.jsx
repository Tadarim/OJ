import React, { useEffect } from 'react'

import { ProblemsetWrapper } from './styled'

import FilterV1 from './c-cpns/problemset-filter-v1'
import FilterV2 from './c-cpns/problemset-filter-v2'
import ProblemsetMain from './c-cpns/problemset-main'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchProblemsetAction } from '../../store/modules/problemset'

const Problemset = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProblemsetAction())
    }, [dispatch])

    const { problemsetList } = useSelector((state) => (
        {
            problemsetList: state.problemset.problemsetList
        }
    ), shallowEqual)

    return (
        <ProblemsetWrapper>
            <FilterV1></FilterV1>
            <FilterV2></FilterV2>
            <ProblemsetMain problemsetList={problemsetList}></ProblemsetMain>
        </ProblemsetWrapper>
    )
}
export default Problemset