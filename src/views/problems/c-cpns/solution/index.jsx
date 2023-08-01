import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { SolutionWrapper } from './styled'
import Paginations from '../../../../base-ui/pagination'
import ArticleItem from '../../../../base-ui/article-item'
import { getSolutionList, searchSolution } from '../../../../services/modules/solution'
import { changeUseMdAction } from '../../../../store/modules/problem'


const tagsList = ['不限', 'C', 'Golang', 'JavaScript']

const Solution = memo(() => {

  const { pid } = useParams()

  const { useMd } = useSelector(state => ({
    useMd: state.problem.useMd
  }))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modeChangeHandler = () => {
    dispatch(changeUseMdAction(!useMd))
  }

  const [tagIndex, setTagIndex] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [solutionList, setSolutionList] = useState([])
  const [solutionTotal, setSolutionTotal] = useState()

  const [page, setPage] = useState(1)
  const pageChangeHandler = (page) => {
    setPage(page)
  }

  const fetchSolutionList = async (page, pid) => {
    const res = await getSolutionList(page, pid)
    setSolutionList(res.data?.list)
    setSolutionTotal(res.data?.total)
  }
  const fetchSolutionSearchResult = async (key_word, page, pid, type) => {
    const res = await searchSolution(key_word, page, pid, type)
    setSolutionList(res.data?.list)
    setSolutionTotal(res.data?.total)
  }

  const tagChangeHandler = (index, key_word) => {
    setTagIndex(index)
    if (key_word !== '不限') {
      fetchSolutionSearchResult(key_word, page, pid, 2)
    } else {
      fetchSolutionList(page, pid)
    }
  }

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value)
    if (e.target.value === '') {
      fetchSolutionList(page, pid)
    }
  }
  const inputKeyBoardHandler = (event) => {
    if (event.keyCode === 13) {
      fetchSolutionSearchResult(inputValue, page, pid, 1)
    }
  }

  const linkToDetailHandler = (sid) => {
    navigate(`${sid}`)
  }

  useEffect(() => {
    fetchSolutionList(page, pid)
  }, [page, pid])

  return (
    <>
      <SolutionWrapper>
        <div className="search-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path fillRule="evenodd" d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z" clipRule="evenodd">
            </path>
          </svg>
          <input
            placeholder="搜索题解"
            className="search"
            onKeyDown={inputKeyBoardHandler}
            onChange={inputChangeHandler}
          />
          {!useMd &&
            <button onClick={modeChangeHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path fillRule="evenodd" d="M13 11h7a1 1 0 110 2h-7v7a1 1 0 11-2 0v-7H4a1 1 0 110-2h7V4a1 1 0 112 0v7z" clipRule="evenodd">
                </path>
              </svg>
              <span>写题解</span>
            </button>}
        </div>
        <div className="tags-wrapper">
          {
            tagsList.map((item, index) =>
              <div className="tags" key={index} onClick={() => { tagChangeHandler(index, item) }}>
                <span className={classNames('tags-content', { active: index === tagIndex })}>
                  <span>{item}</span>
                </span>
              </div>
            )
          }

        </div>
        <div className="articleList">
          {
            solutionList?.map((item, index) =>
              <ArticleItem
                key={index}
                article={item}
                linkHandler={linkToDetailHandler}
              />
            )
          }
        </div>
        <Paginations
          pageChangeHandler={pageChangeHandler}
          total={solutionTotal}
        />

      </SolutionWrapper>
    </>
  )
})

export default Solution