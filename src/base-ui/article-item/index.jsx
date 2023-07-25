import React, { memo } from 'react'
import { ItemWrapper } from './styled'

const ArticleItem = memo((props) => {

  return (
    <ItemWrapper>
      <div className="img-wrapper">
      <a href="/circle/discuss/eofkLk/">
        <img src="https://pic.leetcode.cn/1690038669-PKXvwe-image.png?x-oss-process=image/resize,w_400,limit_0/crop,h_240,g_center/format,webp" draggable="false" alt='' />
      </a>
      </div>

      <div className="content-container">
        <div className="main">
          <div className="header">
            <a href="/u/goodmellow/">
              <img src="https://assets.leetcode.cn/aliyun-lc-upload/users/winde_liu/avatar_1560820174.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp" alt="goodmellow的头像" />
            </a>
            <a className="title" href="/circle/discuss/PJKZYe/">招聘｜关于华为社招那些事</a>
          </div>
          <div className="contentWrapper">
            <div className="content-wrap">
              <div className="tags-wrapper">
                <div className="tags">
                  <span>招聘</span>
                </div>
                <div className="tags">
                  <span>华为</span>
                </div>
                <div className="tags">
                  <span>社招</span>
                </div>
              </div>
              <div className="desc-wrapper">
                <a href="/circle/discuss/PJKZYe/">
                  <div className="desc">
                    地点：武汉、西安华为研究所 时间：截止八月底。学历：普通一本即可(应该是我们部门才有的)如有意愿，可留言</div>
                </a>
              </div>
              <div className="bottom"></div>
            </div>
          </div>
        </div>
        <div className="toolbar-wrapper">
          <div className="toolbar">
            <div className="reaction-wrapper">
              <div className="reaction">
                <div className="reactionBtn">
                  <div className="upvoteBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                      <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                      </path>
                    </svg>
                    <span className="upvoteBtnText">5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="splitLine"></div>
            <div className="operationLink">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-kfex1q-Svg ea8ky5j0">
                <path fillRule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clipRule="evenodd">
                </path>
              </svg>1.8k
            </div>
            <button className="replyBtn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                </path>
              </svg>
              <span>47</span>
            </button>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})


export default ArticleItem