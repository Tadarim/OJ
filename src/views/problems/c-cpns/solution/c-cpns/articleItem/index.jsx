import React, { memo } from 'react'
import { ItemWrapper } from './styled'

const ArticleItem = memo((props) => {

  return (
    <ItemWrapper>

      {
        <a href="/problems/remove-element/solution/python-shuang-zhi-zhen-da-fa-hao-a-quan-guo-zui-ca/">
          <img src="https://pic.leetcode-cn.com/1601627177-IDAMsu-image.png" alt="" />
        </a>
      }

      <div className="main">
        <div className="header">
          <a href="/u/leetcode-solution/" className="avatar-wrapper">
            <img src="https://assets.leetcode.cn/aliyun-lc-upload/users/leetcode-solution/avatar_1582018938.png?x-oss-process=image%2Fresize%2Ch_40%2Cw_40%2Fformat%2Cwebp" size="20" className="css-13g9qu9-AvatarComponent e1ajzf6f0" alt='' />
          </a>
          <h3 className="title-wrapper">
            <a href="/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode-solution-svxi/">
              <span className="title-text">移除元素</span>
            </a>
          </h3>
        </div>
        <a href="/problems/remove-element/solution/yi-chu-yuan-su-by-leetcode-solution-svxi/">
          <div className="content">
            {"方法一：双指针 思路及算法 由于题目要求删除数组中等于 $\textit{val}$ 的元素，因此输出数组的长度一定小于等于输入数组的长度，我们可以把输出的数组直接写在输入数组上。可以使用双指针：右指针 $\textit{right}$ 指向当前将要处理的元素，左指针 $\textit{left}$ 指向下一个将要赋值"}
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
                <span>245</span>
              </button>
            </div>
            <div className="tool-wrapper">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="rgba(var(--dsw-base-grey-6-rgb), 1)">
                  <path fillRule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clipRule="evenodd">
                  </path>
                </svg>
                <span>278.9k</span>
              </button>
            </div>
            <div className="tool-wrapper">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" color="rgba(var(--dsw-base-grey-6-rgb), 1)">
                  <path fillRule="evenodd" d="M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z" clipRule="evenodd">
                  </path>
                </svg>
                <span>292</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})


export default ArticleItem