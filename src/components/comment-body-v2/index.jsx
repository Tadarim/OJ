import React, { memo } from 'react'
import { BodyWrapper } from './styled'
import { useState } from 'react'

import CommentsEditor from '../comment-editor'

const CommentBodyV2 = memo((props) => {

    const commitHandler = () => {
        setShowEditor(true)
    }

    const cancelHandler = () => {
        setShowEditor(false)
    }


    const [showEditor, setShowEditor] = useState(false)

    return (
        <BodyWrapper>
            <div className="comment-header">
                <div className="avatar-wrapper">
                    <a href={"/u/susu-5/"}>
                        <img src="https://assets.leetcode.cn/aliyun-lc-upload/default_avatar.png" alt="susu-5" class="css-17cu2v5-CommentAvatar e19tnut63" />
                    </a>
                    <div className="userName-wrapper">
                        <span>susu</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <span>未知归属地</span>
                    <div className="dot"></div>
                    <span>2019-03-12</span>
                </div>
            </div>
            <div className="comment-content">
                <p>根据上一题的提示，很快写出来和答案一样的代码，哈哈 开心  大家给个赞好么ლ(′◉❥◉｀ლ)</p>
            </div>

            {showEditor ? <CommentsEditor cancel={true} cancelHandler={cancelHandler} ></CommentsEditor> :
                <div className="comment-toolbar">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                            <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span className="btnContent">852</span>
                    </button>
                    <button type="button" onClick={commitHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                            <path fillRule="evenodd" d="M8.744 3.16c.943-.952 2.565-.285 2.565 1.055v3.097c7.233 1.409 10.457 6.821 11.597 12.128l-.978.21.98-.202c.233 1.136-1.248 1.788-1.928.849l-.01-.014c-2.292-3.082-5.364-4.999-9.66-5.254v3.53c0 1.339-1.623 2.007-2.566 1.055l-7.106-7.172a1.5 1.5 0 010-2.111l7.106-7.172zm10.955 12.924c-1.577-3.341-4.392-6.065-9.128-6.874a1.513 1.513 0 01-1.262-1.486V5.43l-5.901 5.957 5.901 5.956V14.5a1.49 1.49 0 011.528-1.493c3.595.098 6.507 1.205 8.862 3.077z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span className="btnContent">回复</span>
                    </button>
                </div>}
        </BodyWrapper>
    )
})


export default CommentBodyV2