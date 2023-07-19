import React, { memo } from 'react'
import { Pagination } from 'antd'

import { PaginationWrapper } from './styled'

const ProblemsetPagination = memo(() => {
    return (
        <PaginationWrapper>
            <div className="problemset-pagination">
                <Pagination defaultCurrent={1} total={500}></Pagination>
            </div>
        </PaginationWrapper>
    )
})

export default ProblemsetPagination