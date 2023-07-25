import React, { memo, useState } from 'react'
import { ReplyWrapper } from './styled'
import DiscussReplies from '../discuss-replies'

const DiscussReply = memo(() => {

    const [showReplyList, setShowReplyList] = useState(false)

    return (
        <ReplyWrapper>
            <div className="metaData">
                <div className="profileWrapper">
                    <img src="https://assets.leetcode.cn/aliyun-lc-upload/users/wulala/avatar_1568034474.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp" />
                    <a href="/u/wulala/">
                        <div className="usernameContainer">
                            <span>wulala</span>
                        </div>
                    </a>
                </div>
                <div className="infoWrapper">
                    <div className="publishDate">
                        <span>来自上海</span>
                        <div className="dot"></div>
                        <span>2023-07-07</span>
                    </div>
                </div>
            </div>
            <div className="markdownWrapper">
                <div className="replyMarkdownWrapper">
                    <p>每日一题打卡，学习计划打卡，打卡！打卡！打卡！有咩有人一起设定一样的每周任务，一起刷呀？</p>
                </div>
            </div>
            <div className="answerOperation">
                <div className="operationWrapper">
                    <div className="reactionV2Wrapper">
                        <div className="reactionWraper">
                            <div className="reactionBtnInBarWrapper">
                                <div className="reactionUpvoteBtnWrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                                        <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span className="css-d54up1-ReactionUpvoteBtnText-ReactionDiscussUpvoteBtnText e5ckeis9">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="splitLine"></div>
                    <button className="baseButtonComponent-OperationButton" onClick={()=> setShowReplyList(!showReplyList)}>
                        {
                            showReplyList
                                ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                                        <path fillRule="evenodd" d="M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span>收起 5</span>
                                </>
                                :
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" >
                                        <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span>回复 1</span>
                                </>
                        }
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                            <path fillRule="evenodd" d="M17.707 11.707a1 1 0 01-1.414 0L12 7.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 010 1.414zm-1.414 7L12 14.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span>收起 5</span> */}

                    </button>
                </div>
                <button className="addReplyButton">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                        <path fillRule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clipRule="evenodd">
                        </path>
                    </svg>
                    <span>添加回复</span>
                </button>
            </div>
            <div>
                {
                    showReplyList
                    &&
                    <DiscussReplies/>
                }
            </div>
        </ReplyWrapper>
    )
})

export default DiscussReply