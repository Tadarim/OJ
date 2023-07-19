import React, {useState} from 'react'
import classNames from 'classnames'

import { FilterV1Wrapper } from './styled'


const FilterV1 = () => {

    const filterList = [
        {
            tag: '数组',
            num: 1569
        },
        {
            tag: '字符串',
            num: 692
        },
        {
            tag: '哈希表',
            num: 546
        },
        {
            tag: '动态规划',
            num: 508
        },
        {
            tag: '数学',
            num: 496
        },
        {
            tag: '排序',
            num: 359
        },
        {
            tag: '深度优先搜索',
            num: 331
        },
        {
            tag: '贪心',
            num: 321
        },
        {
            tag: '广度优先搜索',
            num: 265
        },
        {
            tag: '树',
            num: 263
        },
        {
            tag: '二分查找',
            num: 255
        },
        {
            tag: '矩阵',
            num: 230
        },
        {
            tag: '二叉树',
            num: 218
        },
        {
            tag: '双指针',
            num: 207
        },
        {
            tag: '位运算',
            num: 196
        },
        {
            tag: '栈',
            num: 167
        },
        {
            tag: '堆（优先队列）',
            num: 162
        },
        {
            tag: '设计',
            num: 151
        },
        {
            tag: '图',
            num: 150
        },
        {
            tag: '前缀和',
            num: 136
        },
        {
            tag: '模拟',
            num: 131
        },
        {
            tag: '回溯',
            num: 120
        },
        {
            tag: '计数',
            num: 109
        },
        {
            tag: '链表',
            num: 102
        },
        {
            tag: '滑动窗口',
            num: 97
        }
    ]
    
    
    const [isExpand,setIsExpand] = useState(false)

    const expandChangeHandler = () =>{
        setIsExpand(!isExpand)
    }

  return (
    <FilterV1Wrapper>

                <div className={classNames("filter-list-v1",{isExpand:isExpand})}>
                    { filterList.map((item,index) => {
                        return <div className="filter-item" key={index}>
                        <a className="item-link" href="/tag/array" >
                            <span className='item-tag'>{item.tag}</span>
                            <span className='item-num'>{item.num}</span>
                        </a>
                    </div>
                    })}
                    
                </div>
                <div className="more-btn-container">
                    <span className="btn-left">

                    </span>
                    {isExpand? <span className="btn" onClick={expandChangeHandler}>
                        <span className="desc">
                            收起
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                            <path fillRule="evenodd" d="M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z" clipRule="evenodd">
                            </path>
                        </svg>
                    </span>
                    :
                    <span className="btn" onClick={expandChangeHandler}>
                        <span className="desc">
                            展开
                        </span>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" >
                            <path fillRule="evenodd" d="M7.707 12.293L12 16.586l4.293-4.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414zM12 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 9.586z" clipRule="evenodd">
                            </path>
                        </svg>
                    </span>}
                </div>
    </FilterV1Wrapper>
  )
}

export default FilterV1