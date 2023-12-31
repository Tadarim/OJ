import React, { useEffect, useState } from 'react'
import { MainFilterWrapper } from './styled'
import classNames from 'classnames'
import TagsList from './c-cpns/tagsList'
import ButtonItem from './c-cpns/button-item'
import FilterList from './c-cpns/filter-list'

const MainFilter = (props) => {

    const { searchHandler, fetchRandomProblem } = props

    const [listOpen, setListOpen] = useState(false)
    const [allOpen, setAllOpen] = useState(false)
    const filterList = ['简单', '中等', '困难']
    const [value, setValue] = useState('')
    const [tagsEleList, setTagsEleList] = useState([])

    const allOpenClickHandler = () => {
        setAllOpen(!allOpen)
    }
    const listOpenClickHandler = (index) => {
        listOpen === index ? setListOpen(false) : setListOpen(index)
    }

    const inputKeyBoardHandler = (event) => {
        if (event.keyCode === 13) {
            searchHandler(value)
        }
    }
    const inputChangeHandler = (e) => {
        setValue(e.target.value)
        if (e.target.value === '') {
            searchHandler('')
        }
    }

    const tagsChangeHandler = (tag) => {
        const newList = [...tagsEleList]
        newList.includes(tag)
            ?
            newList.splice(newList.findIndex(filterItem => filterItem === tag), 1)
            :
            newList.push(tag)
        setTagsEleList(newList)
    }

    const difficultyChangeHandler = (difficulty) => {
        if (difficulty !== '') {
            searchHandler(difficulty, 3)
        } else {
            searchHandler('')
        }
    }

    useEffect(() => {
        searchHandler(tagsEleList.join(' '), 2)
    }, [tagsEleList])


    return (
        <MainFilterWrapper>
            <div className="main-filter">
                <div className={classNames("item-container", { active: listOpen === 1 })}>
                    <ButtonItem
                        desc='难度'
                        index={1}
                        clickHandler={listOpenClickHandler}
                    />
                    <FilterList
                        itemClickHandler={difficultyChangeHandler}
                        filterList={filterList}
                        listOpenClickHandler={listOpenClickHandler}
                    />
                </div>
                <div className={classNames("item-container", { active: listOpen === 2 })}>
                    <ButtonItem
                        desc='标签'
                        index={2}
                        clickHandler={listOpenClickHandler}
                    />
                    <div className="tags-list-container">
                        <div className='tags-list'>
                            <TagsList
                                allOpen={allOpen}
                                tagsChangeHandler={tagsChangeHandler}
                            />
                            <div className="btns-container">
                                <div className="left-btn" onClick={allOpenClickHandler}>
                                    {allOpen ? "收起全部" : "展开全部"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search" >
                        <div className="svg">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                <path fillRule="evenodd" d="M5.527 5.527a7.5 7.5 0 0111.268 9.852l3.581 3.583a1 1 0 01-1.414 1.415l-3.582-3.583A7.501 7.501 0 015.527 5.527zm1.414 1.414a5.5 5.5 0 107.779 7.779A5.5 5.5 0 006.94 6.94z" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder='搜索题目、编号或内容'
                            value={value}
                            onChange={inputChangeHandler}
                            onKeyDown={inputKeyBoardHandler}
                        />
                    </div>
                    <div className="btn" onClick={fetchRandomProblem}>
                        <span className='svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                <path fillRule="evenodd" d="M18.48 17.5h-2.204a5 5 0 01-4.31-2.466l-.625-1.061-.624 1.061a5 5 0 01-4.31 2.466H2.661a1 1 0 110-2h3.746a3 3 0 002.586-1.48L10.181 12 8.993 9.98A3 3 0 006.407 8.5H2.661a1 1 0 110-2h3.746a5 5 0 014.31 2.466l.624 1.061.624-1.061a5 5 0 014.31-2.466h2.205V4.315a.5.5 0 01.874-.332l2.536 2.853a1 1 0 010 1.328l-2.536 2.853a.5.5 0 01-.874-.332V8.5h-2.204a3 3 0 00-2.587 1.48L12.501 12l1.188 2.02a3 3 0 002.587 1.48h2.204v-2.185a.5.5 0 01.874-.332l2.83 3.185a.5.5 0 010 .664l-2.83 3.185a.5.5 0 01-.874-.332V17.5z" clipRule="evenodd">
                                </path>
                            </svg>
                        </span>
                        <span className='desc'>随机一题</span>
                    </div>
                </div>
            </div>
            {
                tagsEleList.length > 0 &&
                <div className="search-tags-wrapper">
                    <div className="search-tags-item-wrapper" >
                        {
                            tagsEleList.map((item, index) =>
                                <span className="search-tags-item" key={index} >
                                    <span className="item-text-wrapper">
                                        <span className="item-text">{item}</span>
                                    </span>
                                </span>
                            )
                        }
                    </div>
                </div>
            }
        </MainFilterWrapper>
    )
}

export default MainFilter