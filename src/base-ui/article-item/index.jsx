import React, { memo } from 'react'
import { ItemWrapper } from './styled'

const ArticleItem = memo((props) => {

  const {article,linkHandler} = props

  return (
    <ItemWrapper>
      
      {
        article.cover_url
          &&
        <a href="">
          <img src={article.cover_url} alt="" />
        </a>
      }

      <div className="main">
        <div className="header">
          <a href="" className="avatar-wrapper">
            <img src={article.avatar_url} size="20" alt='' />
          </a>
          <h3 className="title-wrapper" onClick={()=>linkHandler()}>
            <a href="">
              <span className="title-text">{article.title}</span>
            </a>
          </h3>
        </div>
        <a href="">
          <div className="content">
            {article.short_content}
          </div>
        </a>
        <div className="toolbar-wrapper">
          <div className="toolbar">
            <div className="tool-wrapper">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="rgba(var(--dsw-base-grey-6-rgb), 1)">
                  <path fillRule="evenodd" d="M10.24 5.832a2.274 2.274 0 013.517 0l7.668 9.156c.65.777.706 1.774.379 2.557C21.475 18.33 20.71 19 19.667 19H4.333c-1.044 0-1.809-.67-2.137-1.455a2.478 2.478 0 01.378-2.556l7.667-9.157zM12 7a.29.29 0 00-.225.116l-7.666 9.157a.478.478 0 00-.067.5c.07.17.185.227.292.227h15.334c.106 0 .22-.057.292-.227a.478.478 0 00-.068-.5l-7.668-9.157A.29.29 0 0012 7z" clipRule="evenodd">
                  </path>
                </svg>
                <span>{article.likes_count}</span>
              </button>
            </div>
            <div className="tool-wrapper">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="rgba(var(--dsw-base-grey-6-rgb), 1)">
                  <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                  </path>
                </svg>
                <span>{article.comment_count}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})


export default ArticleItem