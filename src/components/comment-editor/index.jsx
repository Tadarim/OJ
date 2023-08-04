import React, { memo, useState } from 'react'
import { EditorWrapper } from './styled'

const CommentsEditor = memo((props) => {

    const { cancel, cancelHandler, callback, replyHandler } = props

    const [value, setValue] = useState("")

    return (
        <EditorWrapper>
            <div className="editor">
                <textarea
                    className='textarea'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }}
                />
                <div className="tool-bar">
                    <button className='comment' 
                        onClick={() => { 
                        callback && callback(value) 
                        replyHandler && replyHandler(value)
                        setValue('')
                    }}>
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