import React, { memo } from 'react'
import { BoxWrapper } from './styled'
import CommentsEditor from '../../../../../../components/comment-editor'

const CommentsBox = memo(({total,callback}) => {

    return (
        <BoxWrapper>
            <div className="top-part">
                <div className="comment-info">
                    <div className="comment-num">{total}</div>条评论
                </div>
            </div>
            <CommentsEditor cancel={false} callback={callback} />
        </BoxWrapper>
    )
})

export default CommentsBox