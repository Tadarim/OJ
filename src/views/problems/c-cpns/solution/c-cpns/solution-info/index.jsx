import React, { memo, useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { InfoWrapper } from './styled'
import CommentsBox from '../../../comments/c-cpns/commet-box'
import Paginations from '../../../../../../base-ui/pagination'
import CommentBodyV1 from '../../../../../../components/comment-body-v1'
import { getSolutionDetail } from '../../../../../../services/modules/solution'
import { getCommentList, submitComment } from '../../../../../../services/modules/comment'
import { useNavigate, useParams } from 'react-router-dom'
import { getDate } from '../../../../../../utils/getDate'
import { message } from 'antd'


const SolutionInfo = memo(() => {

    const { sid, pid } = useParams()
    const navigate = useNavigate()

    const [commentsList, setCommentsList] = useState([])
    const [commentsTotal, setCommentsTotal] = useState([])
    const [detail, setDetail] = useState(
        {
            "entity": {
                "title": "那构区",
                "id": 1,
                "cover_url": "http://khguezi.tv/vmxbor",
                "created_at": 1690356358,
                "updated_at": 1690442777,
                "DeletedAt": null,
                "user_id": 89,
                "content_url": "http://localhost:9090/resource/discuss/1IAPvF34g",
                "short_content": "aute labore anim dolor exercitation",
                "likes_count": 10,
                "comment_count": 0,
                "tags": "Lorem occaecat Ut minim",
                "location": "未知"
            },
            "content": "sit",
            "avatar_url": "http://192.168.105.28:9090/resource/jpg/54qJXPC4R",
            "user_name": "ctTwNF3Vg"
        }
    )
    const [page, setPage] = useState(1)
    const pageChangeHandler = (page) => {
        setPage(page)
    }

    const fetchSolutionDetail = async () => {
        const res = await getSolutionDetail(sid)
        setDetail(res?.data)
    }
    const fetchSolutionComments = async () => {
        const res = await getCommentList(3, sid, page)
        setCommentsList(res.data?.list)
        setCommentsTotal(res.data?.total)
    }
    const publishSolutionComments = async (content,operator_id=sid ,type=3) => {
        const res = await submitComment(content, operator_id, type)
        res.code === 0 ? message.success('评论成功') : message.error('评论失败')
        fetchSolutionComments()
    }

    const publishCommentsHandler = (content) => {
        publishSolutionComments(content)
    }

    const linkToSolution = () => {
        navigate(`/problems/${pid}/solution`)
    }


    useEffect(() => {
        fetchSolutionDetail()
        fetchSolutionComments()
    }, [])


    return (
        <InfoWrapper>
            <div className="info">
                <div className="operations-wrapper">
                    <button className="closeButton" onClick={linkToSolution}>
                        <span>关闭</span>
                    </button>
                </div>
                {detail &&
                    <div className="main-wrapper">
                        <div className="main">
                            <div className='main-content-wrapper'>
                                <div className="header-wrapper">
                                    <div className="title-wrapper">
                                        <a href={`/profile/${detail.entity.user_id}`}>
                                            <span className="avatar-wrapper">
                                                <img src={detail?.avatar_url} size="19" />
                                            </span>
                                        </a>
                                        <h1 className="title">{detail.entity.title}</h1>
                                    </div>
                                    <div className="infos-wrapper">
                                        <a href="">
                                            <div className="username-container">
                                                <span className="name-wrap">{detail.user_name}</span>
                                            </div>
                                        </a>
                                        <div className="dot"></div>
                                        <span className="publish-item">发布于 {getDate(detail.entity.created_at)}</span>
                                        <div className="dot"></div>
                                        <span className="publish-item">{detail.entity.location}</span>
                                        {
                                            detail.entity.tags.split(' ').map((item, index) =>
                                                <span className="tag" key={index}>
                                                    <span>{item}</span>
                                                </span>
                                            )
                                        }

                                    </div>
                                </div>
                                <div className="content-wrapper">
                                    <ReactMarkdown children={detail.content} />
                                </div>
                            </div>
                            <div className="discuss-wrapper">
                                <CommentsBox total={commentsTotal}  callback={publishCommentsHandler}></CommentsBox>
                                {
                                    commentsList?.map((item, index) =>
                                        <CommentBodyV1 comment={item} id={sid} type={3} key={index} />
                                    )
                                }
                                <Paginations
                                    total={commentsTotal}
                                    pageChangeHandler={pageChangeHandler}
                                />
                            </div>
                        </div>
                    </div>}
            </div>
        </InfoWrapper>
    )
})


export default SolutionInfo