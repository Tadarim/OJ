import React, { memo, useState } from 'react'

import MdEditor from '../../components/mdEditor'
import Hot from '../../base-ui/Hot'
import { CircleWrapper } from './styled'
import classNames from 'classnames'
import ArticleItem from '../../base-ui/article-item'
import { Pagination } from 'antd'

const hotDiscussContent = [
    {
        avatar: 'https://assets.leetcode.cn/aliyun-lc-upload/users/krean/avatar_1681219355.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp',
        link: "/circle/discuss/hnuZWf/",
        title: '分享｜一只Gopher跌跌撞撞的Coding之旅',
        desc: '今天早上，在等coffee的时候，接到了一通来自北京的电话，八位的，前面还带有一个括号，直觉告诉我这很可能是一个广告，按照以往我的习惯，我会直接挂掉。然而，阴差阳错的，我感觉等待的时候接一个电话，或许是孤独的解方。于是，我接起了。ta的开场白很客气：“你好，请问是**（我的名字）同学吗？”我突然意识到什么，心里浮起了',
        isNew: true
    },
    {
        avatar: 'https://assets.leetcode.cn/aliyun-lc-upload/default_avatar.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp',
        link: "/circle/discuss/dSrpPn/",
        desc: "前天遇到一家笔试题，问1-100之间缺少了一个数，如何快速找到这个数。我当时一想就用数学求和计算了一下。结果面试官讲这个不是他想要的，他想要二分法来找。这种题到底该怎么回答。",
        title: '求助｜笔试题分析',
        isNew: false
    },
]

const tabList = [
    {
        desc: '最热',
        key: 'hottest'
    },
    {
        desc: '最新',
        key: 'newest'
    },
]

const tagsRef = []
const tagsEleRef = []

const Circle = memo(() => {

    const [tabSelected, setTabSelected] = useState(0)
    const [tagsEleList, setTagsEleList] = useState([])
    const [tagsList, setTagsList] = useState(['C', 'Golang', 'JavaScript'])

    const [inputValue, setInputValue] = useState('')

    const tagsChangeHandler = (tag,list,func) => {
        
        const newList = [...list]
        newList.includes(tag)
        ?
        newList.splice(newList.findIndex(filterItem => filterItem === tag), 1)
        :
        newList.push(tag)
        func(newList)
    }

    const [showPublishEditor,setShowPublishEditor] = useState(false)

    const publishChangeHandler = () =>{
        setShowPublishEditor(!showPublishEditor)
    }

    return (
        <CircleWrapper>
            <div className="content-wrapper">
                <div className="content">
                    <div className="main-wrapper">
                        <div className="tab-header">
                            {
                                tabList.map((item, index) =>
                                    <div className={classNames("tab-item", { active: tabSelected === index })}
                                        key={item.key}
                                        onClick={() => { setTabSelected(index) }}
                                    >
                                        {item.desc}
                                    </div>
                                )
                            }
                        </div>
                        <div className="desc-wrapper">
                            <div className="search-wrapper">
                                <div className="searchInput-wrapper">
                                    <label className="input-container">
                                        <input placeholder="搜索" className="input" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z" clipRule="evenodd">
                                            </path>
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            <button className="button" onClick={publishChangeHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                    <path fillRule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clipRule="evenodd">
                                    </path>
                                </svg>
                                <span>发起讨论</span>
                            </button>
                            <div className="tags-container">
                                {
                                    tagsEleList.map((item,index) =>
                                        <div
                                            className="tags-item active"
                                            key={index}
                                            ref={(r) => { if (r){ 
                                                tagsEleRef[index] = r} }}
                                            onClick={() => { 
                                                tagsChangeHandler(tagsEleRef[index].innerHTML,tagsList,setTagsList) 
                                                console.log(tagsEleRef.innerHTML)
                                                tagsChangeHandler(tagsEleRef[index].innerHTML,tagsEleList,setTagsEleList) 
                                            }}
                                        >{item}</div>
                                    )
                                }
                                {
                                    tagsList.map((item, index) =>
                                        <div
                                            className="tags-item"
                                            key={index}
                                            ref={(r) => { if (r) tagsRef.push(r) }}
                                            onClick={() => { 
                                                tagsChangeHandler(tagsRef[index].innerHTML,tagsEleList,setTagsEleList) 
                                                tagsChangeHandler(tagsRef[index].innerHTML,tagsList,setTagsList) 
                                            }}
                                        >{item}</div>
                                    )
                                }
                            </div>
                            <div>
                                <ArticleItem></ArticleItem>
                            </div>
                            <div className="pagination">
                                <Pagination defaultCurrent={1} total={50}></Pagination>
                            </div>
                        </div>

                    </div>
                    <div className="aside-wrapper">
                        <Hot
                            title='热门讨论'
                            content={hotDiscussContent}
                        />
                    </div>
                    
                </div>
                {
                showPublishEditor
                &&
                <div className="mdEditorWrapper">
                    <MdEditor
                        mode='topic'
                        btnText='发起讨论'
                        cancelHandler = {publishChangeHandler}
                    />
                </div>
                }
            </div>
        </CircleWrapper>
    )
})

export default Circle