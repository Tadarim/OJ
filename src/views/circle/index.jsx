import React, { memo, useEffect, useState } from 'react'

import MdEditor from '../../components/mdEditor'
import Hot from '../../base-ui/Hot'
import { CircleWrapper } from './styled'
import classNames from 'classnames'
import ArticleItem from '../../base-ui/article-item'
import { PublishDiscuss, getDiscussEveryList, getDiscussList, searchDiscuss } from '../../services/modules/discuss'
import Paginations from '../../base-ui/pagination'

const tabList = [{ desc: '最热', key: 'hottest' }, { desc: '最新', key: 'newest' }]

const Circle = memo(() => {

    const [type,setType] = useState(1)
    const [tabSelected, setTabSelected] = useState(0)
    const [tagsEleList, setTagsEleList] = useState([])
    const [tagsList, setTagsList] = useState(['C', 'Golang', 'JavaScript'])
    const [showPublishEditor, setShowPublishEditor] = useState(false)
    const [discussList, setDiscussList] = useState([])
    const [discussEveryList, setDiscussEveryList] = useState([])
    const [discussTotal, setDiscussTotal] = useState()
    const [inputValue, setInputValue] = useState('')

    //页码
    const [page, setPage] = useState(1)
    const pageChangeHandler = (newPage) => {
        setPage(newPage)
    }

    //请求
    const fetchDiscussList = async (page,type) => {
        const res = await getDiscussList(page,type)
        setDiscussList(res.data?.list)
        setDiscussTotal(res.data?.total)
    }
    const fetchDiscussEveryList = async () => {
        const res = await getDiscussEveryList()
        setDiscussEveryList(res.data?.days_discuss)
    }
    const fetchSearchResultList = async (key_word, page, type) => {
        const res = await searchDiscuss(key_word, page, type)
        setDiscussList(res.data?.list)
        setDiscussTotal(res.data?.total)
    }
    const fetchPublishResult = async(title, content, tags, cover_url, short_content) => {
        const res = await PublishDiscuss(title, content, tags, cover_url, short_content)
        setShowPublishEditor(false)
        // fetchDiscussList()
      }
    
    const publishDiscussHandler = (title, content, tags, cover_url, short_content) =>{
        fetchPublishResult(title, content, tags, cover_url, short_content)
    }

    const tagsSearchHandler = (key_word) => {
        if (key_word.length) {
            fetchSearchResultList(key_word, page, 2)
        } else {
            fetchDiscussList(page)
        }
    }

    const tagsChangeHandler = (tag, list, func, fetch) => {
        const newList = [...list]
        newList.includes(tag)
            ?
            newList.splice(newList.findIndex(filterItem => filterItem === tag), 1)
            :
            newList.push(tag)
        func(newList)

        fetch && tagsSearchHandler(newList.join(' '))
    }

    const publishChangeHandler = () => {
        setShowPublishEditor(!showPublishEditor)
    }

    //input更改 键盘事件
    const inputChangeHandler = (e) => {
        setInputValue(e.target.value)
        if (e.target.value === '') {
            fetchDiscussList(page)
        }
    }
    const inputKeyBoardHandler = (event) => {
        if (event.keyCode === 13) {
            fetchSearchResultList(inputValue, page, 1)
        }
    }

    useEffect(() => {
        fetchDiscussList(page,type)
        fetchDiscussEveryList()
    }, [page,type])

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
                                        onClick={() => {
                                            setTabSelected(index) 
                                            if(index === 0){
                                                setType(1)
                                            }else{
                                                setType('')
                                            }
                                        }}
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
                                        <input
                                            placeholder="搜索"
                                            className="input"
                                            value={inputValue}
                                            onChange={inputChangeHandler}
                                            onKeyDown={inputKeyBoardHandler}
                                        />
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
                                    tagsEleList.map((item, index) =>
                                        <div
                                            className="tags-item active"
                                            key={index}
                                            onClick={() => {
                                                tagsChangeHandler(item, tagsList, setTagsList)
                                                tagsChangeHandler(item, tagsEleList, setTagsEleList, true)
                                            }}
                                        >{item}</div>
                                    )
                                }
                                {
                                    tagsList.map((item, index) =>
                                        <div
                                            className="tags-item"
                                            key={index}
                                            onClick={() => {
                                                tagsChangeHandler(item, tagsEleList, setTagsEleList, true)
                                                tagsChangeHandler(item, tagsList, setTagsList)
                                            }}
                                        >{item}</div>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    discussList?.map((item, index) =>
                                        <ArticleItem article={item} key={index}></ArticleItem>
                                    )
                                }
                            </div>
                            <Paginations
                                total={discussTotal}
                                pageChangeHandler={pageChangeHandler}
                            />
                        </div>

                    </div>
                    <div className="aside-wrapper">
                        <Hot
                            title='必读榜'
                            content={discussEveryList}
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
                            cancelHandler={publishChangeHandler}
                            publishHandler={publishDiscussHandler}
                        />
                    </div>
                }
            </div>
        </CircleWrapper>
    )
})

export default Circle