import React, { memo, useEffect, useRef, useState } from 'react'
import { ItemWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import { changeDiscussListAction, changeIsLikeAction } from '../../store/modules/like'
import classNames from 'classnames'
import { likeHandler } from '../../services/modules/like'
import Upvote from '../../components/upvote/upvote'

const ArticleItem = memo((props) => {

  const { article, linkHandler, type, link } = props

  // const [selected, setSelected] = useState(-1)
  // const [text, setText] = useState("")
  // const upvoteAddHandler = (operator_id) => {
  //   setSelected(operator_id)
  //   setText(prevState => prevState + 1)
  // }
  // const upvoteSubHandler = () => {
  //   setSelected(-1)
  //   setText(prevState => prevState - 1)
  // }
  // const upvoteBtnHandler = async (type, operator_id) => {
  //   let is_like;
  //   selected === operator_id ? upvoteSubHandler() : upvoteAddHandler(operator_id)
  //   selected === operator_id ? is_like = -1 : is_like = 1
  //   likeHandler(type, operator_id, is_like)
  // }
  // useEffect(() => {
  //   setText(article.likes_count)
  //   if (article.like_status) {
  //     setSelected(article.id)
  //   } else {
  //     setSelected(-1)
  //   }
  // }, [article.likes_count, article.likes_status, article.id])

  return (
    <ItemWrapper>
      {
        article.cover_url
        &&
        <a href={link + `${article.id}`} className='img-wrapper'>
          <img src={article.cover_url} alt="" />
        </a>
      }
      <div className="content-container">
        <div className="main">
          <div className="header">
            <a href={`/profile/${article.user_id}`} className="avatar-wrapper">
              <img src={article.avatar_url} size="20" alt='' />
            </a>
            <h3 className="title-wrapper" onClick={() => linkHandler(article.id)}>
              <a href={link + `${article.id}`}>
                <span className="title-text">{article.title}</span>
              </a>
            </h3>
          </div>
          <a href={link + `${article.id}`} className='contentWrapper'>
            <div className="content-wrap">
              <div className="desc-wrapper">
                {article.short_content}
              </div>
            </div>
          </a>
        </div>
        <div className="toolbar-wrapper">
          <div className='toolbar'>
            <Upvote
              likes_count={article.likes_count} 
              like_status={article.like_status} 
              type={type} 
              id={article.id} 
              mode={1}  
            />
            {/* <div className="reaction-wrapper" >
              <div className="reaction">
                <div className="reactionBtn">
                  <div className={classNames("upvoteBtn", { active: selected === article.id })} onClick={() => upvoteBtnHandler(type, article.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                      <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd"></path>
                    </svg>
                    <span className="upvoteBtnText">{text}</span>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="splitLine"></div>
            <button className='replyBtn' onClick={() => linkHandler(article.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="rgba(var(--dsw-base-grey-6-rgb), 1)">
                <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                </path>
              </svg>
              <span>{article.comment_count}</span>
            </button>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})


export default ArticleItem