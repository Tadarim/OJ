import React, { memo, useState } from 'react'
import { DiscussWrapper } from './styled'
import { Breadcrumb, Pagination } from 'antd'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import DiscussReply from '../discuss-reply'
import MdEditor from '../../../../components/mdEditor'

const Discuss = memo((props) => {

  const [showReplyEditor,setShowReplyEditor] = useState(false)

  const replyHandler = () =>{
    setShowReplyEditor(!showReplyEditor)
  }

  return (
    <DiscussWrapper>
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
                      title: <a href="">求职面试</a>,
                    },
                    {
                      title: 'An Application',
                    },
                  ]}
                />
              </div>
              <div className="discuss-content">
                <div className="discuss-title">
                  <a href="/u/leetcode/">
                    <img src="https://assets.leetcode.cn/aliyun-lc-upload/uploaded_files/2021/03/73c9f099-abbe-4d94-853f-f8abffd459cd/leetcode.png" alt='' />
                  </a>
                  <span className="css-jkstne-StyledTitle e2v1tt7">新功能体验｜让 “学习” 更有 “计划”</span>
                </div>
                <div className="discussInfo-container">
                  <a href="/u/leetcode/" >
                    <div className="usernameContainer">
                      <span fontSize="12px" className="css-17369th-NameWrap e123u7vb1">LeetCode</span>
                    </div>
                  </a>
                  <span className="infoItem">发起于 2023-07-07</span>
                  <div className="dot"></div>
                  <span className="infoItem">最近编辑于 2023-07-08</span>
                  <div className="dot"></div>
                  <span className="infoItem">来自上海</span>
                </div>
                <div className="discussZoom-wrapper">
                  <div className="markdown-wrapper">
                    <div className="markdown-content">
                      <p align="center">
                        <img src="https://pic.leetcode.cn/1688729332-CxvSsC-Study%20Plane%20-%20Banner.png" alt="Study Plan 学习计划" />
                      </p>
                      <p><br /></p>
                      <p>想要更好规划学习进度？<br />
                        想要更合理的面试备战时间安排？<br />
                        来看看学习计划为你准备了哪些 <strong>新功能</strong>！</p>
                      <hr />
                      <h1 id="周榜单">
                        <a className="header-anchor" href="#周榜单" ></a>
                        周榜单
                      </h1>
                      <p>刷题缺少动力？没有推背感？<br />
                        来看看力扣新增的刷题周榜单吧！<br />
                        每周 AC 学习计划内题目数的 TOP10 将荣登「周榜单」👏🏻<br />
                        榜单按本周完成题目数计算排名，数据每小时更新！</p>
                      <p align="center">
                        <img src="https://pic.leetcode.cn/1688727347-vxRaDp-2023-07-07_185504.png" alt="排行 - 周榜" width="260" />
                      </p>
                      <p>除此之外，Plus 会员还可抢先体验 <strong>刷题日程计划</strong> 功能 ↓↓↓</p>
                      <hr />
                      <h1 id="周任务计划">
                        <a className="header-anchor" href="#周任务计划" ></a>
                        周任务计划
                      </h1>
                      <p>加入学习计划，自定义专属你的「周任务」，可以帮助你规划出更符合自己时间线的刷题计划。<br />
                        你可以自由选择每周刷题日与刷题数量 📅
                      </p>
                      <p align="center">
                        <img src="https://pic.leetcode.cn/1688625436-lnKgGZ-01.gif" alt="设置学习计划 - 演示动画" width="600" />
                      </p>
                      <hr />
                      <h1 id="任务日历">
                        <a className="header-anchor" href="#任务日历" ></a>
                        任务日历
                      </h1>
                      <p>完成周任务计划设置，「任务日历」会标记你的刷题日和任务完成情况，<br />
                        杜绝一切「撂爪就忘」行为 🙅🏻‍♀️
                      </p>
                      <p align="center">
                        <img src="https://pic.leetcode.cn/1688727226-SuhKgv-2023-07-07_185255.png" alt="我的计划" width="260" />
                      </p>
                      <p>立即加入
                        <a href="https://leetcode.cn/studyplan/" >学习计划</a>
                        开始打卡吧～
                      </p>
                      <p>
                        <a href="https://leetcode.cn/premium/?promoChannel=vip_priority" style={{ "color": "orange", "fontWeight": "bold" }} >成为「力扣 Plus 会员」即刻尊享新功能优先体验权益，感受刷题新体验！》</a>
                      </p>
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
                        <span className="reactionUpvoteBtnText">10</span>
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
            </div>}
            <div className="sorting-wrapper">
              <div className="answer-count">
                共 20 个回复
              </div>
              <button>
                <span>最热</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className="css-1rhb60f-Svg ea8ky5j0">
                  <path fillRule="evenodd" d="M9 4a1 1 0 012 0v15a2 2 0 01-3.414 1.414l-3.293-3.293a1 1 0 111.414-1.414L9 19V4zm6 16a1 1 0 11-2 0V5a2 2 0 013.414-1.414l3.293 3.293a1 1 0 01-1.414 1.414L15 5v15z" clipRule="evenodd">
                  </path>
                </svg>
              </button>
            </div>
            <div className="zoom-wrapper">
              <div className="list-wrapper">
                <DiscussReply></DiscussReply>
              </div>
            </div>
            <div className="pagination-wrapper">
              <Pagination defaultCurrent={1} total={50}></Pagination>
            </div>
          </div>
        </div>
        <div className="aside-wrapper">
          <div className="card-wrapper">
            <div className="meta-wrapper">
              <div class="meta">
                <div class="metaHeader">收藏次数</div>
                <span class="metaValue">7</span>
              </div>
              <div class="meta">
                <div class="metaHeader">参与人数</div>
                <span class="metaValue">20</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="tags-header">相关标签</div>
            <div>
              <span className="basicTag">
                <span>置顶</span>
              </span>
              <span className="basicTag">
                <span>官方</span>
              </span>
              <span className="basicTag">
                <span>推荐</span>
              </span>
              <span className="basicTag">
                <span>力扣 LeetCode</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </DiscussWrapper>
  )
})

export default Discuss