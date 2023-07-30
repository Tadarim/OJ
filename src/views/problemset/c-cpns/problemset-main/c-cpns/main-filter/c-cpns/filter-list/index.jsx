import React, { useState } from 'react'
import { FilterListWrapper } from './styled'
import classNames from 'classnames'

const FilterList = (props) => {

    const { filterList, itemClickHandler, listOpenClickHandler } = props

    const [selectedIndex,setSelectedIndex] = useState(-1)

    const selectHandler = (index,item) =>{
        if(selectedIndex !== index){
            setSelectedIndex(index)
            itemClickHandler(item);
        }else{
            setSelectedIndex(-1)
            itemClickHandler('');
            listOpenClickHandler(1)
        }
    }

    return (
        <FilterListWrapper>
            <div className='list'>
                {
                    filterList.map((item, index) =>
                        <div className={classNames("list-item",{active: index === selectedIndex})} key={index} onClick={() => { selectHandler(index,item) }}>
                            <div className="option-container">
                                <div className="option">
                                    {item}
                                </div>
                            </div>
                            <span className="selected-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                                    <path fillRule="evenodd" d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414L8.98 18.02a1 1 0 001.415 0L20.707 7.707a1 1 0 00-1.414-1.414l-9.605 9.605z" clipRule="evenodd">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    )
                }
            </div>
        </FilterListWrapper>
    )
}

export default FilterList