import React, { memo, useEffect, useState } from 'react'
import { SearchWrapper } from './styled'
import ProblemList from '../../base-ui/problem-list'
import Paginations from '../../base-ui/pagination'
import { getSearchList } from '../../services/modules/search'
import { useSearchParams } from 'react-router-dom'
import classNames from 'classnames'

const tabList = [
        {
            text:'题目',
            keyword:'problem',
            svg:'M20.995 4.824A3 3 0 0018 2H6l-.176.005A3 3 0 003 5v14l.005.176A3 3 0 006 22h12l.176-.005A3 3 0 0021 19V5l-.005-.176zM6 4h12l.117.007A1 1 0 0119 5v14l-.007.117A1 1 0 0118 20H6l-.117-.007A1 1 0 015 19V5l.007-.117A1 1 0 016 4zm5.718 9.304a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 14.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 15a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 16h2l.117-.007A1 1 0 0017 15zm-5.282-7.696a1 1 0 01.063 1.321l-.085.093-2.062 2a1 1 0 01-1.3.08l-.093-.08-.937-.91A1 1 0 018.6 8.292l.095.082.241.234 1.367-1.325a1 1 0 011.414.022zM17 9a1 1 0 00-1-1h-2l-.117.007A1 1 0 0014 10h2l.117-.007A1 1 0 0017 9z'
        },
        {
            text:'讨论',
            keyword:'discuss',
            svg:'M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z'
        },
    ]

const Search = memo(() => {

    const [problemList,setProblemList] = useState([])  
    const [problemTotal,setProblemTotal] = useState() 

    const [params] = useSearchParams()
    const [tab,setTab] = useState(0)  
    const [value,setValue] = useState(params.getAll('keyword')[0])  
    const [mode,setMode] = useState('problem')  

    const tabChangeHandler = (index,mode) =>{
        setTab(index)
        setMode(mode)
    }

    
    const [page,setPage] = useState(1)
    const pageChangeHandler = (newPage) => {
        setPage(newPage)
    }
    
    const inputKeyboardHandler = (event) =>{
        if (event.keyCode === 13) {
            getSearchList(mode,value,page).then(res => 
                {
                    setProblemList(res.data?.list)
                    setProblemTotal(res.data?.total)
                }
            )
        }
    }


    useEffect(()=>{
        getSearchList(mode,value,page).then(res => 
            {
                setProblemList(res.data?.list)
                setProblemTotal(res.data?.total)
            }
        )
    },[page,mode])

    return (
        <SearchWrapper>
            <div className="search-header-wrapper">
                <div className="search-input-wrapper">
                    <div className="search-input">
                        <div className="search-icon-wrapper">
                            <span className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.163 5a6.163 6.163 0 100 12.326 6.163 6.163 0 000-12.326zM3 11.163a8.163 8.163 0 1114.599 5.021l3.108 3.109a1 1 0 01-1.414 1.414l-3.108-3.108A8.163 8.163 0 013 11.163z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </div>
                        <input 
                            placeholder="请输入搜索内容" 
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}}
                            onKeyDown={inputKeyboardHandler}
                        />
                    </div>
                </div>
                <div className="search-tab-wrapper">
                    <div role="tablist" aria-orientation="horizontal">
                        {
                            tabList.map((item,index) => {
                                return <button key={index} className={classNames({active: tab === index})} role="tab" type="button" aria-selected="true"  data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:ra:" onClick={() => {tabChangeHandler(index,item.keyword)}}>
                                    <div className="item-wrapper">
                                        <div className="line"></div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                                <path fillRule="evenodd" d={item.svg} clipRule="evenodd"></path>
                                            </svg>
                                            <span>{item.text}</span>
                                    </div>
                                </button>
                                
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='problemList-wrapper' >
                <ProblemList list={problemList} />
            </div>   
            <Paginations
                pageChangeHandler={pageChangeHandler}
                total={problemTotal}
            />
        </SearchWrapper>
    )
})


export default Search
