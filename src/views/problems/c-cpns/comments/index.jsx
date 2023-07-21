import React, { memo } from 'react'
import { CommentsWrapper } from './styled'

import CommentsBox from './c-cpns/commet-box'
import CommentBodyV1 from '../../../../components/comment-body-v1'
import { Pagination } from 'antd'

const Comments = memo(() => {

    return (
        <CommentsWrapper>
            <div className="content-wrapper">
                <div className="content">
                    <CommentsBox></CommentsBox>
                    <CommentBodyV1></CommentBodyV1>
                </div>
            </div>
            <div className="pagination">
                <Pagination defaultCurrent={1} total={50}></Pagination>
            </div>
        </CommentsWrapper>
    )
})

export default Comments