import React, { memo, useEffect, useId, useRef, useState } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-jsx';// jsx模式的包
import 'ace-builds/src-noconflict/theme-iplastic';// 主题样式
import 'ace-builds/src-noconflict/ext-language_tools'; // 代码联想
import classNames from 'classnames';

import { CodeAreaWrapper } from './styled'
import { changeCodeLangAction } from '../../../../store/modules/problem';
import { useDispatch, useSelector } from 'react-redux';

import 'react-quill/dist/quill.snow.css';
import { codeSubmit } from '../../../../services/modules/submit';
import { useNavigate, useParams } from 'react-router-dom';


const CodeArea = memo(({submitHandler}) => {

    const { pid } = useParams()
    const navigate = useNavigate()

    const { codeTemplate, userId } = useSelector((state) => ({
        codeTemplate: state.problem.codeTemplate,
        userId: state.login.userId
    }))

    const [codeLang, setCodeLang] = useState('C')
    let [template] = codeTemplate?.filter((item) => {
        return item.language === codeLang
    })
    const [doc, setDoc] = useState(template?.template);

    const [showList, setShowList] = useState(false)
    const langList = ['C', 'Golang', 'JavaScript']
    const dispatch = useDispatch()
    const langItemClickHandler = (lang) => {
        dispatch(changeCodeLangAction(lang))
        setCodeLang(lang)
        setShowList(false)
    }
    const langSelectHandler = () => {
        setShowList(!showList)
    }

    // const submitHandler = async (userId, pid, language, doc) => {
    //     const res = await codeSubmit(userId, pid, language, doc)
    //     navigate(`/problems/${pid}/submissions`,{state:{res:res}})
    // }

    useEffect(() => {
        setDoc(template?.template)
    }, [template?.template])

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
                                            onClick={() => { langItemClickHandler(item) }}
                                        >{item}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="codemirror-container">

                            <AceEditor
                                mode='jsx'
                                theme="iplastic"
                                name="app_code_editor"
                                fontSize={14}
                                showPrintMargin
                                height="100%"
                                width="100%"
                                showGutter
                                onChange={value => {
                                    setDoc(value); // 输出代码编辑器内值改变后的值
                                }}
                                value={doc}
                                wrapEnabled
                                highlightActiveLine  //突出活动线
                                enableSnippets  //启用代码段
                                setOptions={{
                                    enableBasicAutocompletion: true,   //启用基本自动完成功能
                                    enableLiveAutocompletion: true,   //启用实时自动完成功能 （比如：智能代码提示）
                                    enableSnippets: true,  //启用代码段
                                    showLineNumbers: true,
                                    tabSize: 2,
                                }}
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="code-area-bottom-container">
                <div className="submit-container">
                    <button className="submit" onClick={() => { submitHandler(pid, codeLang, doc) }}>
                        <span>提交</span>
                    </button>
                </div>
            </div>
        </CodeAreaWrapper>
    )
})

export default CodeArea