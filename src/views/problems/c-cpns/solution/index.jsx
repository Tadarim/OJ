import React, { memo, useState } from 'react'
import { SolutionWrapper } from './styled'
import { Pagination } from 'antd'


import ArticleItem from './c-cpns/articleItem'
import classNames from 'classnames'

const tagsList = ['不限', 'C', 'Golang', 'JavaScript']

const Solution = memo((props) => {

  const {useMd,modeChangeHandler} = props

  const [tagIndex, setTagIndex] = useState(0)

  return (
    <SolutionWrapper>
      <div className="search-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
          <path fillRule="evenodd" d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z" clipRule="evenodd">
          </path>
        </svg>
        <input placeholder="搜索题解" className="search" />
        { !useMd &&
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
            <div className="tags" key={index} onClick={() => { setTagIndex(index) }}>
              <span className={classNames('tags-content', { active: index === tagIndex })}>
                <span>{item}</span>
              </span>
            </div>
          )
        }

      </div>
      <div className="articleList">
        <ArticleItem></ArticleItem>
      </div>
      <div className="pagination">
        <Pagination defaultCurrent={1} total={80} />
      </div>
    </SolutionWrapper>
  )
})

export default Solution