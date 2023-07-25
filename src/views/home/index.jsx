import React, { useEffect } from 'react'
import { HomeWrapper } from './style'
import SearchBar from './c-cpns/SearchBar'
import Swipper from './c-cpns/Swipper'
import Hot from '../../base-ui/Hot'
import LeftMain from './c-cpns/left-main'
import LeftHeader from './c-cpns/left-header'
import { useDispatch } from 'react-redux'
import { fetchProblemsetAction } from '../../store/modules/problemset'
import MdEditor from '../../components/mdEditor'


const Home = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    console.log(1)
    dispatch(fetchProblemsetAction())
  }, [dispatch])

  const swipperData = [
    {
      link: "https://leetcode.cn/leetbook/detail/learning-algorithms-with-leetcode/",
      src: 'https://pic.leetcode.cn/1671095596-witXzZ-%E9%9B%B6%E8%B5%B7%E6%AD%A5%E5%AD%A6%E7%AE%97%E6%B3%95%20%E9%A2%98%E5%BA%93%E5%8F%B3%E4%BE%A7%E8%BD%AE%E6%92%AD.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      link: "https://leetcode.cn/leetbook/detail/recursion-and-divide-and-conquer/",
      src: 'https://pic.leetcode.cn/1684401557-pILmGc-output.lin%20(1).png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      link: "https://leetcode.cn/leetbook/detail/lc-class-queue-stack/",
      src: 'https://pic.leetcode.cn/1670468706-JolwnN-%E9%A2%98%E5%BA%93.png?x-oss-process=image%2Fformat%2Cwebp'
    },
    {
      link: "https://leetcode.cn/leetbook/detail/bit-manipulation-and-math/",
      src: 'https://pic.leetcode.cn/1684401754-PFcgqe-output.lin.jpg?x-oss-process=image%2Fformat%2Cwebp'
    },
  ]

  const hotDiscussContent = [
    {
      avatar: 'https://assets.leetcode.cn/aliyun-lc-upload/users/krean/avatar_1681219355.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp',
      link: "/circle/discuss/hnuZWf/",
      title: '分享｜一只Gopher跌跌撞撞的Coding之旅',
      desc: '今天早上，在等coffee的时候，接到了一通来自北京的电话，八位的，前面还带有一个括号，直觉告诉我这很可能是一个广告，按照以往我的习惯，我会直接挂掉。然而，阴差阳错的，我感觉等待的时候接一个电话，或许是孤独的解方。于是，我接起了。ta的开场白很客气：“你好，请问是**（我的名字）同学吗？”我突然意识到什么，心里浮起了',
      isNew: true
    },
    {
      avatar: 'https://assets.leetcode.cn/aliyun-lc-upload/default_avatar.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp',
      link: "/circle/discuss/dSrpPn/",
      desc: "前天遇到一家笔试题，问1-100之间缺少了一个数，如何快速找到这个数。我当时一想就用数学求和计算了一下。结果面试官讲这个不是他想要的，他想要二分法来找。这种题到底该怎么回答。",
      title: '求助｜笔试题分析',
      isNew: false
    },
  ]
  const hotAnswerContent = [
    {
      link: "/problems/apply-operations-to-an-array/solution/dui-shu-zu-zhi-xing-cao-zuo-by-leetcode-vz70b/",
      title: '对数组执行操作',
      desc: '对数组执行操作 · 力扣官方题解',
      isNew: false
    },
    {
      link: "/problems/sum-of-matrix-after-queries/solution/dao-xu-cao-zuo-jian-ji-xie-fa-pythonjava-7rqh/",
      desc: "查询后矩阵的和 · 灵茶山艾府",
      title: '倒序操作+简洁写法！（Python/Java/C++/Go）',
      isNew: true
    },
  ]

  return (
    <HomeWrapper>
      <div className="content-container">
        <div className="container">
          <div className="content-left">
            <LeftHeader />
            <LeftMain></LeftMain>
            <button className="loadMoreButton">
              <span>加载更多</span>
            </button>
          </div>
          <div className="content-right">
            <SearchBar />
            <Swipper swipperImg={swipperData} />
            <Hot
              title='热门讨论'
              content={hotDiscussContent}
            />
            <Hot
              title='热门题解'
              content={hotAnswerContent}
            />
          </div>
        </div>
      </div>
    </HomeWrapper>

  )
}

export default Home