import React, { memo } from 'react'
import { BoxWrapper } from './styled'
import CommentsEditor from '../../../../../../components/comment-editor'

const CommentsBox = memo((props) => {

    const {total} = props

    return (
        <BoxWrapper>
            <div className="top-part">
                <div className="comment-info">
                    <div className="comment-num">{total}</div>条评论
                </div>
            </div>
            <CommentsEditor cancel={false}></CommentsEditor>
        </BoxWrapper>
    )
})

export default CommentsBox