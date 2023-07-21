import React, { memo } from 'react'
import { BoxWrapper } from './styled'
import CommentsEditor from '../../../../../../components/comment-editor'

const CommentsBox = memo(() => {
    return (
        <BoxWrapper>
            <div className="top-part">
                <div className="comment-info">
                    <div className="comment-num">3782</div>条评论
                </div>
            </div>
            <CommentsEditor cancel={false}></CommentsEditor>
        </BoxWrapper>
    )
})

export default CommentsBox