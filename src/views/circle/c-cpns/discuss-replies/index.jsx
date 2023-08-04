import React, { memo, useState, useEffect } from 'react'
import { RepliesWrapper } from './styled'
import { getDate } from '../../../../utils/getDate'
import { likeHandler } from '../../../../services/modules/like'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import classNames from 'classnames'

const DiscussReplies = memo((props) => {

    const { detail, addReplyHandler } = props

    const [selected, setSelected] = useState(-1)
    const [text, setText] = useState("")
    const upvoteAddHandler = (operator_id) => {
      setSelected(operator_id)
      setText(prevState => prevState + 1)
    }
    const upvoteSubHandler = () => {
      setSelected(-1)
      setText(prevState => prevState - 1)
    }
    const upvoteBtnHandler = async (type, operator_id) => {
      let is_like;
      selected === operator_id ? upvoteSubHandler() : upvoteAddHandler(operator_id)
      selected === operator_id ? is_like = -1 : is_like = 1
      likeHandler(type, operator_id, is_like)
    }
   useEffect(() => {
      setText(detail.likes_count)
      if(detail.like_status){
        setSelected(detail.id)
      }else{
        setSelected(-1)
      }
    }, [detail.likes_count,detail.likes_status,detail.id])

    return (
        <RepliesWrapper>
            <div className="repliesContainer">
                <div className="replies-metaData">
                    <div className="replies-profileWrapper">
                        <a href={`/profile/${detail.user_id}`}>
                            <img src={detail.user.avatar_url} />
                            <div className="replies-usernameContainer">
                                <span className="replies-nameWrap">{detail.user.user_name}</span>
                            </div>
                        </a>
                    </div>
                    <div className="replies-infoWrapper">
                        <div className="replies-publishDate">
                            <span>来自{detail.location}</span>
                            <div className="dot"></div>
                            <span>{getDate(detail.created_at)}</span>
                        </div>
                    </div>
                </div>
                <div className="replies-markdownWrapper">
                    <div className="replies-answerMarkdownContent">
                        <ReactMarkdown children={detail.content} />
                    </div>
                </div>
                <div className="replies-detailOperation">
                    <div className="replies-operationWrapper">
                        <div className="replies-reactionV2Wrapper">
                            <div className="replies-reactionWraper">
                                <div className="replies-reactionBtnInBarWrapper">
                                    <div className={classNames("replies-reactionUpvoteBtnWrapper",{active : selected === detail.id})} onClick={()=>{upvoteBtnHandler(5,detail.id)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                                            <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd"></path>
                                        </svg>
                                        <span>{text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="replies-splitLine"></div>
                        <button className="replies-operationButton">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                                <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd"></path>
                            </svg>
                            <span>回复{detail.detail_count}</span>
                        </button>
                    </div>
                    <button className="replies-addReplyButton" onClick={() => { addReplyHandler({ userName: detail.user.user_name, replyedId: detail.id }) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                            <path fillRule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span>添加回复</span>
                    </button>
                </div>
            </div>
        </RepliesWrapper>
    )
})

export default DiscussReplies