import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'

import { likeHandler } from '../../services/modules/like'
import { UpvoteWrapper } from './styled'


const Upvote = memo((props) => {

    const { likes_count, like_status, type, id, mode } = props

    const [selected, setSelected] = useState(-1)
    const [text, setText] = useState('')
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
        setText(likes_count)
        if (like_status) {
            setSelected(id)
        } else {
            setSelected(-1)
        }
        
    }, [likes_count, like_status, id])

    return (
        <UpvoteWrapper>
            {
                mode === 1
                    ?
                    <div className="reaction">
                        <div className="reactionBtn">
                            <div
                                className={classNames("upvoteBtn", { active: selected === id })}
                                onClick={() => upvoteBtnHandler(type, id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd"></path>
                                </svg>
                                <span className="upvoteBtnText">{text}</span>
                            </div>
                        </div>
                    </div>
                    :
                    <button type="button" className={classNames({ active: selected === id })} onClick={() => { upvoteBtnHandler(type,id) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                            <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                            </path>
                        </svg>
                        <span className="btnContent">{text}</span>
                    </button>
            }
        </UpvoteWrapper>
    )
})


export default Upvote