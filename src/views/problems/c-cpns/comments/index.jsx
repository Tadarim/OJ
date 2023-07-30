import React, { memo, useEffect, useState } from 'react'
import { CommentsWrapper } from './styled'

import CommentsBox from './c-cpns/commet-box'
import CommentBodyV1 from '../../../../components/comment-body-v1'
import Paginations from '../../../../base-ui/pagination'
import { getCommentList } from '../../../../services/modules/comment'

const Comments = memo(() => {

    const [commentsList,setCommentsList] = useState([])
    const [commentsTotal,setCommentsTotal] = useState()

    const [page,setPage] = useState(1)
    const pageChangeHandler = (page) =>{
        setPage(page)
    }

    useEffect(()=>{
        getCommentList(2,1,page).then(res => {
            console.log(res)
            setCommentsList(res.data?.list)
            setCommentsTotal(res.data?.total)
        })
    },[page])

    return (
        <CommentsWrapper>
            <div className="content-wrapper">
                <div className="content">
                    <CommentsBox total={commentsTotal}></CommentsBox>
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