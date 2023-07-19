import React, { memo, useRef, useEffect, useState } from 'react'
import { basicSetup } from 'codemirror';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { espresso } from 'thememirror';
import classNames from 'classnames';

import { CodeAreaWrapper } from './styled'
import { changeCodeLangAction } from '../../../../store/modules/problem';
import { useDispatch } from 'react-redux';

const javaScriptLang = javascript();

const CodeArea = memo((props) => {

    const { codeTemplate, codeLang, submitHandler } = props

    let template = codeTemplate?.filter((item) => {
        return item.language === codeLang
    })

    // 初始化CodeMirror编辑器
    const editorRef = useRef(null);
    const [doc, setDock] = useState(template[0]?.template);

    const state = EditorState.create({
        doc,
        extensions: [
            basicSetup,
            javaScriptLang,
            espresso,
            EditorView.updateListener.of((v) => {
                if (v.docChanged) {
                    setDock(v.state.doc.toString());
                }
            }),
        ],
    });

    const [showList, setShowList] = useState(false)
    const refs = []
    const langList = ['C', 'Golang', 'JavaScript']
    const dispatch = useDispatch()
    const langItemClickHandler = (ref) => {
        dispatch(changeCodeLangAction(ref.innerHTML))
        setShowList(false)
    }
    const langSelectHandler = () => {
        setShowList(!showList)
    }

    useEffect(() => {
        const editor = new EditorView({
            state,
            parent: editorRef.current,
        });

        return () => {
            editor.destroy(); // 注意：此后此处要随组件销毁
        };
    }, []);


    return (
        <CodeAreaWrapper>
            <div className="code-area">
                <div className="code-area-main-container">
                    <div className="code-area-main">
                        <div className="main-header">
                            <div className="lang-select">
                                <button onClick={langSelectHandler}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M12 11a1 1 0 011 1v4a1 1 0 11-2 0v-4a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2zm0 14C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                    <span>{codeLang}</span>
                                    <svg className={classNames({ isActive: showList })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "auto" }} >
                                        <path fillRule="evenodd" d="M16.293 9.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 13.586l4.293-4.293z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                                <div className={classNames("lang-list", { isActive: showList })}>
                                    {langList.map((item, index) => {
                                        return <div 
                                            key={index} 
                                            ref={(r) => { if (r) refs.push(r) }} 
                                            onClick={() => { langItemClickHandler(refs[index]) }}
                                        >{item}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="codemirror-container">
                            <div ref={editorRef}></div>
                        </div>
                    </div>
                </div>
                <div className="code-area-bottom-container">
                    <div className="submit-container">
                        <button className="submit" onClick={() => { submitHandler(codeLang, doc) }}>
                            <span>提交</span>
                        </button>
                    </div>
                </div>
            </div>
        </CodeAreaWrapper>
    )
})

export default CodeArea