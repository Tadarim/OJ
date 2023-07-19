import React from 'react'
import { TopicWrapper } from './styled'


const Topic = (props) => {
  return (
    <TopicWrapper>
      <div className="topic">
        <div className="topic-title">
          <a className="title-link" href="/circle/discuss/rcyuKi/">{props.title}</a>
          <span className="title-tag">热议中</span>
        </div>
        <div className="topic-content">
          {props.content}
        </div>
        <div className="topic-footer">
          <span className="topic-footer-avatar"></span>
          <span className="topic-footer-popularity">
            <span className='popularity-number'>
              {props.num}
            </span> 用户正在围观</span>
          <span className="topic-footer-link">进入讨论
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0"><path fillRule="evenodd" d="M12.293 16.293L16.586 12l-4.293-4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414zM9.586 12L5.293 7.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L9.586 12z" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
    </TopicWrapper>
  )
}

export default Topic