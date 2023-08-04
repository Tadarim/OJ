import React, { memo, useEffect, useState } from 'react'
import { CommentsWrapper } from './styled'

import CommentsBox from './c-cpns/commet-box'
import CommentBodyV1 from '../../../../components/comment-body-v1'
import Paginations from '../../../../base-ui/pagination'
import { getCommentList, submitComment } from '../../../../services/modules/comment'
import { useParams } from 'react-router-dom'
import { message } from 'antd'

const Comments = memo(() => {

    const [commentsList, setCommentsList] = useState([])
    const [commentsTotal, setCommentsTotal] = useState()
    const { pid } = useParams()

    const [page, setPage] = useState(1)
    const pageChangeHandler = (page) => {
        setPage(page)
    }

    const fetchCommentsList = async (type, pid, page) => {
        const res = await getCommentList(type, pid, page)
        setCommentsList(res.data?.list)
        setCommentsTotal(res.data?.total)
    }

    const submitComments = async (value) => {
        const res = await submitComment(value, pid, 2)
        res.code === 0 ? message.success('评论成功') : message.error('评论失败')
        fetchCommentsList(2, pid, page)
    }

    const submitHandler = (value) => {
        submitComments(value)
    }

    useEffect(() => {
        fetchCommentsList(2, pid, page)
    }, [page, pid])

    return (
        <CommentsWrapper>
            <div className="content-wrapper">
                <div className="content">
                    <CommentsBox total={commentsTotal} callback={submitHandler} />
                    {
                        commentsList?.map((item, index) =>
                            <CommentBodyV1 id={pid} type={2} comment={item} key={index} />
                        )
                    }
                </div>
            </div>
            
            <Paginations
                total={commentsTotal}
                pageChangeHandler={pageChangeHandler}
            />
        </CommentsWrapper>
    )
})

export default Comments