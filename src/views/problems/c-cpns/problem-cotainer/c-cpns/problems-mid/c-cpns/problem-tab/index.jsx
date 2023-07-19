import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { TabWrapper } from './styled'

const ProblemTab = memo((props) => {

    const tabList = [
        {
          link: '',
          innerHtml: `
            <svg viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-6-4h8v2h-8v-2z">
              </path>
            </svg>题目描述
          `
        },
        {
          link: 'comments',
          innerHtml: `
            <svg viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M8.995 22a.955.955 0 01-.704-.282.955.955 0 01-.282-.704V18.01H3.972c-.564 0-1.033-.195-1.409-.586A1.99 1.99 0 012 15.99V3.97c0-.563.188-1.032.563-1.408C2.94 2.188 3.408 2 3.972 2h16.056c.564 0 1.033.188 1.409.563.375.376.563.845.563 1.409V15.99a1.99 1.99 0 01-.563 1.432c-.376.39-.845.586-1.409.586h-6.103l-3.709 3.71c-.22.187-.454.281-.704.281h-.517zm.986-6.01v3.1l3.099-3.1h6.948V3.973H3.972V15.99h6.01zm-3.99-9.013h12.018v2.018H5.991V6.977zm0 4.037h9.014v1.972H5.99v-1.972z">
              </path>
            </svg>评论 (247)
          `
        },
        {
          link: 'solution',
          innerHtml: `
            <svg viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M5.016 17.995c0 .282.093.517.28.705.188.187.423.297.704.328h12a1.14 1.14 0 00.703-.328.902.902 0 00.281-.658c0-.25-.062-.454-.187-.61l-5.813-9.094V3.972h-1.968v4.366l-5.813 9.094a.875.875 0 00-.187.563zM6 21c-.844 0-1.547-.282-2.11-.845-.562-.563-.859-1.283-.89-2.16 0-.594.172-1.126.516-1.596L9 7.822V5.99a.953.953 0 01-.703-.282.956.956 0 01-.281-.704V3.972c0-.564.187-1.033.562-1.409C8.953 2.188 9.422 2 9.984 2h4.032c.562 0 1.03.188 1.406.563.375.376.562.845.562 1.409v1.033a.956.956 0 01-.28.704.953.953 0 01-.704.282v1.83l5.484 8.578c.344.47.516 1.002.516 1.596-.031.877-.328 1.597-.89 2.16-.563.563-1.266.845-2.11.845H6z">
              </path>
            </svg>题解 (377)
          `
        },
        {
          link: 'submissions',
          innerHtml: `
            <svg viewBox="0 0 24 24">
              <path d="M11.99 2C17.52 2 22 6.48 22 12s-4.48 10-10.01 10C6.47 22 2 17.52 2 12S6.47 2 11.99 2zM12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm.5-13v5.25l4.5 2.67-.75 1.23L11 13V7z">
              </path>
            </svg>提交记录
          `
        },
    ]

    const {tabClickHandler,tabSelect} = props

    return (
        <TabWrapper>
            {
                tabList.map((item, index) =>
                    <div
                        key={index}
                        className={classNames("tab-item-container", { active: index === tabSelect })}
                        onClick={() => tabClickHandler(index)}
                    >
                        <Link to={item.link}>
                            <div className="tab-item" dangerouslySetInnerHTML={{ __html: item.innerHtml }}></div>
                        </Link>
                    </div>)
            }
        </TabWrapper>
    )
})

export default ProblemTab