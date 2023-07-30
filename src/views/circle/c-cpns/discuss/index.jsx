import React, { memo, useEffect, useState } from 'react'
import { DiscussWrapper } from './styled'
import { Breadcrumb, Pagination } from 'antd'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import DiscussReply from '../discuss-reply'
import MdEditor from '../../../../components/mdEditor'
import { useParams } from 'react-router-dom'
import { getDate } from '../../../../utils/getDate'
import { getDiscussDetail } from '../../../../services/modules/discuss'
import { getCommentList } from '../../../../services/modules/comment'
import Paginations from '../../../../base-ui/pagination'

const Discuss = memo(() => {

  const { did } = useParams()
  console.log(did)

  const [showReplyEditor, setShowReplyEditor] = useState(false)
  const [commentsList, setCommentsList] = useState([])
  const [commentsTotal, setCommentsTotal] = useState([])
  const [detail, setDetail] = useState(
    {
      "entity": {
        "title": "那构区",
        "id": 1,
        "cover_url": "http://khguezi.tv/vmxbor",
        "created_at": 1690356358,
        "updated_at": 1690442777,
        "DeletedAt": null,
        "user_id": 89,
        "content_url": "http://localhost:9090/resource/discuss/1IAPvF34g",
        "short_content": "aute labore anim dolor exercitation",
        "likes_count": 10,
        "comment_count": 0,
        "tags": "Lorem occaecat Ut minim",
        "location": "未知"
      },
      "content": "sit",
      "avatar_url": "http://192.168.105.28:9090/resource/jpg/54qJXPC4R",
      "user_name": "ctTwNF3Vg"
    }
  )
  const [page, setPage] = useState(1)
  const pageChangeHandler = (page) => {
    setPage(page)
  }

  const replyHandler = () => {
    setShowReplyEditor(!showReplyEditor)
  }

  const fetchDiscussDetail = async () => {
    const res = await getDiscussDetail(did)
    setDetail(res?.data)
  }
  const fetchDiscussComments = async () => {
    const res = await getCommentList(1, did, page)
    setCommentsList(res.data?.list)
    setCommentsTotal(res.data?.total)
  }

  // useEffect(() => {
  //   fetchDiscussDetail()
  //   fetchDiscussComments()
  // }, [])

  return (
    <DiscussWrapper>
      {detail &&
        <div className="content-wrapper">
          <div className="main-wrapper">
            <div>
              <div className="detail-wrapper">
                <div className="breadcrumb">
                  <Breadcrumb
                    items={[
                      {
                        title: <a href="/circle">讨论</a>,
                      },
                      {
                        title: `${detail.entity.title}`,
                      },
                    ]}
                  />
                </div>
                <div className="discuss-content">
                  <div className="discuss-title">
                    <a href="/u/leetcode/">
                      <img src={detail?.avatar_url} alt='' />
                    </a>
                    <span className="css-jkstne-StyledTitle e2v1tt7">{detail.entity.title}</span>
                  </div>
                  <div className="discussInfo-container">
                    <a href="/u/leetcode/" >
                      <div className="usernameContainer">
                        <span fontSize="12px" className="css-17369th-NameWrap e123u7vb1">{detail.user_name}</span>
                      </div>
                    </a>
                    <span className="infoItem">发起于 {getDate(detail.entity.created_at)}</span>
                    <div className="dot"></div>
                    <span className="infoItem">来自{detail.entity.location}</span>
                  </div>
                  <div className="discussZoom-wrapper">
                    <div className="markdown-wrapper">
                      <div className="markdown-content">
                        <ReactMarkdown children={detail.content} />
                      </div>
                    </div>
                  </div>
                  <div className="discussAction-wrapper">
                    <div className="reactionWrapper">
                      <div className="reactionBtnInBarWrapper">
                        <div className="reactionUpvoteBtnWrapper">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" >
                            <path fillRule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clipRule="evenodd">
                            </path>
                          </svg>
                          <span className="reactionUpvoteBtnText">{detail.entity.likes_count}</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ "marginLeft": "auto" }}>
                      <button className="baseButton" onClick={replyHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                          <path fillRule="evenodd" d="M11 20a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1zM17.018 5c-.26 0-.51.104-.695.288L4.837 16.773l-.463 1.853 1.853-.463L17.712 6.677A.981.981 0 0017.018 5zm-2.11-1.126a2.983 2.983 0 014.219 4.217L7.444 19.773a1 1 0 01-.464.263l-3.738.934a1 1 0 01-1.213-1.212l.934-3.739a1 1 0 01.263-.464L14.91 3.874z" clipRule="evenodd">
                          </path>
                        </svg>
                        <span>回复讨论</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {
                showReplyEditor &&
                <div className="mdEditor-wrapper">
                  <MdEditor
                    mode='reply'
                    btnText='回复讨论'
                    cancelHandler={replyHandler}
                  >
                  </MdEditor>
                </div>
              }
              <div className="sorting-wrapper">
                <div className="answer-count">
                  共 {detail.entity.comment_count} 个回复
                </div>
              </div>
              <div className="zoom-wrapper">
                <div className="list-wrapper">
                  {
                    commentsList?.map((item,index) => 
                      <DiscussReply comment={item} key={index} />
                    )
                  }
                </div>
              </div>
              <div className="pagination-wrapper">
                <Paginations
                  total={commentsTotal}
                  pageChangeHandler={pageChangeHandler}
                />
              </div>
            </div>
          </div>
          <div className="aside-wrapper">
            <div className="card-wrapper">
              <div className="meta-wrapper">
                <div className="meta">
                  <div className="metaHeader">参与人数</div>
                  <span className="metaValue">{detail.entity.comment_count}</span>
                </div>
              </div>
              <div className="divider"></div>
              <div className="tags-header">相关标签</div>
              <div>
                {
                  detail.entity.tags.split(' ').map((item,index) => 
                  <span className="basicTag" key={index}>
                    <span>{item}</span>
                  </span>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      }
    </DiscussWrapper>
  )
})

export default Discuss