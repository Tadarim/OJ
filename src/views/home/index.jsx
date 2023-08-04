import React, { useEffect, useState } from 'react'

import { HomeWrapper } from './style'
import SearchBar from './c-cpns/SearchBar'
import Swipper from './c-cpns/Swipper'
import Hot from '../../base-ui/Hot'
import LeftMain from './c-cpns/left-main'
import LeftHeader from './c-cpns/left-header'
import { getDiscussEveryList, getDiscussList } from '../../services/modules/home'


const Home = () => {

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

  const [discussList, setDiscussList] = useState([])
  const [discussEveryList, setDiscussEveryList] = useState([])
  const [page, setPage] = useState(1)

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const fetchDiscussList = async (page) => {
    const res = await getDiscussList(page)
    setDiscussList((prevList) => [...prevList,...res.data?.list])
  }
  const fetchDiscussEveryList = async (page) => {
    const res = await getDiscussEveryList()
    setDiscussEveryList(res.data?.days_discuss)
  }

  useEffect(() => {
    fetchDiscussList(page)
    fetchDiscussEveryList()
  }, [page])

  return (
    <HomeWrapper>
      <div className="content-container">
        <div className="container">
          <div className="content-left">
            <LeftHeader />
            <LeftMain discussList={discussList}></LeftMain>
            <button className="loadMoreButton" onClick={loadMoreHandler}>
              <span>加载更多</span>
            </button>
          </div>
          <div className="content-right">
            <SearchBar />
            <Swipper swipperImg={swipperData} />
            <Hot
              title='热门讨论'
              content={discussEveryList}
            />
          </div>
        </div>
      </div>
    </HomeWrapper>

  )
}

export default Home