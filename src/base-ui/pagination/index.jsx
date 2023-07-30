import React, {useState} from 'react'
import { Pagination } from 'antd'

import { PaginationWrapper } from './style'

const Paginations = (props) => {

    const { total, pageChangeHandler } = props

    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        setCurrent(page)
        pageChangeHandler(page)
    };

    return (
        <PaginationWrapper>
            <Pagination
                defaultCurrent={1}
                current={current}
                onChange={onChange}
                total={total}
                showSizeChanger={false}
            />
        </PaginationWrapper>
    )
}


export default Paginations