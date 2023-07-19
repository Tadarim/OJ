import React from 'react'
import { FilterListWrapper } from './styled'

const FilterList = (props) => {

    const { filterList } = props

    return (
        <FilterListWrapper>
            <div className='list'>
                {
                    filterList.map((item, index) =>
                        <div className="list-item" key={index}>
                            <div className="option-container">
                                <div className="option">
                                    {item}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </FilterListWrapper>
    )
}

export default FilterList