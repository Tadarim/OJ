import React, { useEffect, useState } from 'react'

import { ProblemsetWrapper } from './styled'

import Filter from './c-cpns/problemset-filter'
import ProblemsetMain from './c-cpns/problemset-main'
import { getAllProblemset, getRandProblem } from '../../services/modules/problemset'
import { searchProblem } from '../../services/modules/problemset'
import { useNavigate } from 'react-router-dom'

const Problemset = () => {

    const [problemsetList, setProblemsetList] = useState([])
    const [problemsetTotal, setProblemsetTotal] = useState()

    const [page, setPage] = useState(1)
    const pageChangeHandler = (newPage) => {
        setPage(newPage)
    }
    const navigate = useNavigate()

    //请求
    const fetchProblemsetList = async (page) => {
        const res = await getAllProblemset(page)
        setProblemsetList(res.data?.list)
        setProblemsetTotal(res.data?.total)
    }
    const fetchSearchResultList = async (key_word, page, type) => {
        const res = await searchProblem(key_word, page, type)
        setProblemsetList(res.data?.list)
        setProblemsetTotal(res.data?.total)
    }
    const fetchRandomProblem = async () => {
        const res = await getRandProblem()
        navigate(`/problems/${res.data?.id}`)
    }

    const searchHandler = (key_word, type) => {
        (key_word !== '全部题目') && (key_word !== '')
            ?
            fetchSearchResultList(key_word, page, type)
            :
            fetchProblemsetList(page)
    }

    useEffect(() => {
        fetchProblemsetList(page)
    }, [page])

    return (
        <ProblemsetWrapper>
            <Filter searchHandler={searchHandler} />
            <ProblemsetMain
                list={problemsetList}
                searchHandler={searchHandler}
                pageChangeHandler={pageChangeHandler}
                problemsetTotal={problemsetTotal}
                fetchRandomProblem={fetchRandomProblem}
            />
        </ProblemsetWrapper>
    )
}
export default Problemset