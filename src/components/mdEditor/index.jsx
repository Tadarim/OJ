import React, { memo, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import classNames from 'classnames'

import { EditorWrapper } from './styled'

const modules = {
  toolbar: {
    container: [
      [{ 'size': ['small', false, 'large', 'huge'] }], //字体设置
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }], //标题字号，不能设置单个字大小
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'], // a链接和图片的显示
      [{ 'align': [] }],
      [{
        'background': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
          'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
          'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
          'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
          'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
          'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
          'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
          'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
          'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
          'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
          'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
          'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
      }],
      [{
        'color': ['rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
          'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
          'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
          'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
          'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
          'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
          'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
          'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
          'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
          'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
          'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
          'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)']
      }],
      ['clean']
    ]
  }
}

const MdEditor = memo((props) => {

  const { mode, cancelHandler, btnText } = props

  const [value, setValue] = useState('')

  const changeHandler = (value) => {
    setValue(value)
  }

  const [title, setTitle] = useState("")

  const [topic, setTopic] = useState("求职面试")
  const [showTopicList, setShowTopicList] = useState(false)

  const topicClickHandler = () => {
    setShowTopicList(!showTopicList)
  }

  const topicChangeHandler = (ref) => {
    setTopic(ref.innerHTML)
  }

  const [tagsEleList, setTagsEleList] = useState([])
  const [showTagsList, setShowTagsList] = useState(false)
  const tagsClickHandler = () => {
    setShowTagsList(!showTagsList)
  }

  const tagsChangeHandler = (tag) => {
    console.log(tag)
    const newList = [...tagsEleList]
    newList.includes(tag)
      ?
      newList.splice(newList.findIndex(filterItem => filterItem === tag), 1)
      :
      newList.push(tag)
    setTagsEleList(newList)
  }

  const topicList = ['求职面试', '职场与内推', '意见反馈', '技术交流', '文章分享']
  const tagsList = ['C', 'Golang', 'JavaScript']

  return (
    <EditorWrapper>
      <div className="editor">
        <div className="header">
          <div className="title">
            {
              mode != 'reply' && 
              <input 
                placeholder="此处输入标题…" 
                value={title} 
                onChange={(e) => { setTitle(e.target.value) }} 
              />
            }
            <button className="cancelBtn" onClick={cancelHandler}>
              <span>取消</span>
            </button>
            <button className="publishBtn">
              <span>{btnText}</span>
            </button>
          </div>
          {
          mode != 'reply' &&
          <div className="tags">
            {
              mode ==='topic' &&
            <div className={classNames("selectorWrap", { active: showTopicList })}
              onClick={topicClickHandler}
            >
              <div className="icon">#</div>
              所属话题：{topic}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path fillRule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clipRule="evenodd">
                </path>
              </svg>
              {
                showTopicList &&
                <div className="topic-list-box">
                  {
                    topicList.map((item, index) =>
                      <div className="list-item"
                        key={index}
                        onClick={() => { topicChangeHandler(item) }}
                      >{item}</div>
                    )
                  }
                </div>}
            </div>}

            {
              tagsEleList.map((item, index) =>
                <span
                  className='tagsItem'
                  key={index}
                >
                  {item}
                  <svg viewBox="0 0 24 24" width="1em" height="1em" onClick={() => { tagsChangeHandler(item) }}>
                    <path fillRule="evenodd" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                    </path>
                  </svg>
                </span>
              )
            }

            <div className={classNames("selectorWrap", { active: showTagsList })} 
              onClick={tagsClickHandler}>
              <div className="icon">+</div>
              添加标签
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path fillRule="evenodd" d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z" clipRule="evenodd">
                </path>
              </svg>
              {
                showTagsList &&
                <div className="tags-list-box">
                  {
                    tagsList.map((item, index) =>
                      <div
                        className="list-item"
                        key={index}
                        onClick={() => { tagsChangeHandler(item) }}
                      >{item}</div>
                    )
                  }
                </div>}
            </div>
          </div>}
        </div>
        <div className="main">
          <ReactQuill
            value={value}
            theme="snow"
            onChange={changeHandler}
            modules={modules}
            className="ql-editor"
          />
        </div>
      </div>
    </EditorWrapper>
  )
})

export default MdEditor