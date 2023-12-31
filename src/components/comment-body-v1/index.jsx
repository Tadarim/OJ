import React, { memo, useState, useEffect } from 'react'
import { BodyWrapper } from './styled'

import { getDate } from '../../utils/getDate'
import CommentsEditor from '../comment-editor'
import { likeHandler } from '../../services/modules/like'
import classNames from 'classnames'
import { codeSubmit } from '../../services'
import { getReplyList, submitComment } from '../../services/modules/comment'
import CommentBodyV2 from '../comment-body-v2'
import Paginations from '../../base-ui/pagination'
import Upvote from '../upvote/upvote'

const CommentBodyV1 = memo(({ comment, id, type }) => {

    const [showEditor, setShowEditor] = useState(false)
    const [showReply, setShowReply] = useState(false)
    const [page, setPage] = useState(1)
    const pageChangeHandler = (page) => {
        setPage(page)
    }

    const commitHandler = () => {
        setShowEditor(true)
    }

    const cancelHandler = () => {
        setShowEditor(false)
    }
    const [ReplyList, setReplyList] = useState([])
    const [ReplyTotal, setReplyTotal] = useState(0)
    const fetchReplyList = async () => {
        const res = await getReplyList(type, comment.id, id, page)
        setReplyList(res.data?.list)
        setReplyTotal(res.data?.total)
    }
    const showReplyHandler = () => {
        setShowReply(!showReply)
        fetchReplyList()
    }


    const addReplyHandler = async (content) => {
        const res = await submitComment(content, id, type, comment.id, comment.id)
    }
    const replyHandler = (content) => {
        addReplyHandler(content)
        setShowEditor(false)
        setShowReply(false)
    }

    // const [selected, setSelected] = useState(-1)
    // const [text, setText] = useState("")
    // const upvoteAddHandler = (operator_id) => {
    //     setSelected(operator_id)
    //     setText(prevState => prevState + 1)
    // }
    // const upvoteSubHandler = () => {
    //     setSelected(-1)
    //     setText(prevState => prevState - 1)
    // }
    // const upvoteBtnHandler = (operator_id) => {
    //     let is_like;
    //     selected === operator_id ? upvoteSubHandler() : upvoteAddHandler(operator_id)
    //     selected === operator_id ? is_like = -1 : is_like = 1
    //     likeHandler(4, operator_id, is_like)
    // }

    // useEffect(() => {
    //     setText(comment.likes_count)
    //     if (comment.like_status) {
    //         setSelected(comment.id)
    //     } else {
    //         setSelected(-1)
    //     }
    // }, [comment.likes_count, comment.likes_status, comment.id])

    return (
        <BodyWrapper>
            <div className="comment-header">
                <div className="avatar-wrapper">
                    <a href={`/profile/${comment.user_id}`}>
                        <img src={comment.avatar_url} alt="susu-5" />
                    </a>
                    <div className="userName-wrapper">
                        <span>{comment.user_name}</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <span>{comment.location}</span>
                    <div className="dot"></div>
                    <span>{getDate(comment.created_at)}</span>
                </div>
            </div>
            <div className="comment-content">
                <p>{comment.content}</p>
            </div>

            {
                showEditor
                    ?
                    <CommentsEditor replyHandler={replyHandler} cancel={true} cancelHandler={cancelHandler} />
                    :
                    <div className="comment-toolbar">
                        <Upvote
                            likes_count={comment.likes_count} 
                            like_status={comment.like_status} 
                            type={4}
                            id={comment.id}
                        />
                        {/* <button type="button" className={classNames({ active: selected === comment.id })} onClick={() => { upvoteBtnHandler(comment.id) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                                </path>
                            </svg>
                            <span className="btnContent">{text}</span>
                        </button> */}
                        <button type="button" onClick={showReplyHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                                </path>showReplyHandler
                            </svg>
                            {showReply ? <span className='btnContent' >收起回复</span> : <span className='btnContent'>{comment.comment_count}</span>}

                        </button>
                        <button type="button" onClick={commitHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                <path fillRule="evenodd" d="M8.744 3.16c.943-.952 2.565-.285 2.565 1.055v3.097c7.233 1.409 10.457 6.821 11.597 12.128l-.978.21.98-.202c.233 1.136-1.248 1.788-1.928.849l-.01-.014c-2.292-3.082-5.364-4.999-9.66-5.254v3.53c0 1.339-1.623 2.007-2.566 1.055l-7.106-7.172a1.5 1.5 0 010-2.111l7.106-7.172zm10.955 12.924c-1.577-3.341-4.392-6.065-9.128-6.874a1.513 1.513 0 01-1.262-1.486V5.43l-5.901 5.957 5.901 5.956V14.5a1.49 1.49 0 011.528-1.493c3.595.098 6.507 1.205 8.862 3.077z" clipRule="evenodd">
                                </path>
                            </svg>
                            <span className="btnContent">回复</span>
                        </button>
                    </div>
            }
            {
                showReply
                &&
                <div className='comment-reply'>
                    <div className="reply-content">
                        {
                            ReplyList.map((item, index) =>
                                <CommentBodyV2 detail={item} key={index} id={id} type={type} rootId={comment.id} />
                            )
                        }

                    </div>
                    <Paginations
                        total={ReplyTotal}
                        pageChangeHandler={pageChangeHandler}
                    />
                    <div className="reply-bottom">
                        <button onClick={showReplyHandler} type="button">
                            <svg viewBox="0 0 24 24" width="1em" height="1em">
                                <path fillRule="evenodd" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z">
                                </path>
                            </svg>
                            <span className="btnContent">收起回复</span>
                        </button>

                    </div>
                </div>
            }

        </BodyWrapper>
    )
})

export default CommentBodyV1