import React, { memo } from 'react'
import { EditorWrapper } from './styled'

const CommentsEditor = memo((props) => {

    const {cancel,cancelHandler} = props

    return (
        <EditorWrapper>
            <div className="editor">
                <textarea className='textarea'></textarea>
                <div className="tool-bar">
                    <button className='comment'>
                        <span>评论</span>
                    </button>
                    {
                        cancel &&
                        <button className="cancel" type="button" onClick={cancelHandler}>
                            <span>取消</span>
                        </button>
                    }
                </div>
            </div>
        </EditorWrapper>
    )
})

export default CommentsEditor