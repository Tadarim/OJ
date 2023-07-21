import React, { memo } from 'react'
import { Pagination } from 'antd'

import { ReplyWrapper } from './styled'
import CommentBodyV2 from '../comment-body-v2'

const CommentsReply = memo((props) => {

    const {replyHandler} = props

    return (
        <ReplyWrapper>
            <div className="reply-content">
                <CommentBodyV2></CommentBodyV2>
            </div>
            <div className="reply-bottom">
                <button onClick={replyHandler} type="button">
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                        <path fillRule="evenodd" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z">
                        </path>
                    </svg>
                    <span className="btnContent">收起回复</span>
                </button>
                <Pagination defaultCurrent={1} total={50}></Pagination>
            </div>
        </ReplyWrapper>
    )
})

export default CommentsReply