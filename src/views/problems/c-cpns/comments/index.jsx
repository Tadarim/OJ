import React, { memo, useEffect, useState } from 'react'
import { CommentsWrapper } from './styled'

import CommentsBox from './c-cpns/commet-box'
import CommentBodyV1 from '../../../../components/comment-body-v1'
import Paginations from '../../../../base-ui/pagination'
import { getCommentList, submitComment } from '../../../../services/modules/comment'
import { useParams } from 'react-router-dom'

const Comments = memo(() => {

    const [commentsList,setCommentsList] = useState([])
    const [commentsTotal,setCommentsTotal] = useState()
    const {pid} = useParams()

    const [page,setPage] = useState(1)
    const pageChangeHandler = (page) =>{
        setPage(page)
    }

    const submitComments = async(value) => {
       const res = await submitComment() 
    }


    useEffect(()=>{
        getCommentList(2,pid,page).then(res => {
            setCommentsList(res.data?.list)
            setCommentsTotal(res.data?.total)
        })
    },[page,pid])

    return (
        <CommentsWrapper>
            <div className="content-wrapper">
                <div className="content">
                    <CommentsBox total={commentsTotal} callback={submitComments} />
                    {
                        commentsList?.map((item,index) =>
                            <CommentBodyV1 comment={item} key={index} />
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