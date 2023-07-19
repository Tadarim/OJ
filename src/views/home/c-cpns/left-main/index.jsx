import React from 'react'
import { MainWrapper } from './styled'
import ContentDiscuss from './c-cpns/content-discuss'

const LeftMain = () => {
  return (
    <MainWrapper>
        <ContentDiscuss
          avatarLink='/u/cger/'
          avatarSrc="https://assets.leetcode.cn/aliyun-lc-upload/users/cger/avatar_1641218018.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp"
          titleLink='circle/discuss/YxuRDH/'
          title='职言｜工作和租房的经验日常'
          contentLink='/circle/discuss/et28ow/'
          content='一起学习的🕹🕹🕹'
          time='1 小时前'
          tags={[
            {link:'/topic/cpp/',name:'C++'},
            {link:'/topic/java/',name:'Java'},
            {link:'/topic/python/',name:'Python'},
            {link:'/topic/xue-xi/',name:'学习'},
          ]}
        >

        </ContentDiscuss>
        <ContentDiscuss
          imgSrc="https://pic.leetcode.cn/1685680748-BUCjKF-chapter_complexity_analysis.jpg?x-oss-process=image/resize,w_400,limit_0/crop,h_240,g_center/format,webp" 
          imgLink='/circle/discuss/AVrTPF'
          avatarLink='/u/cger/'
          avatarSrc="https://assets.leetcode.cn/aliyun-lc-upload/users/cger/avatar_1641218018.png?x-oss-process=image%2Fresize%2Ch_44%2Cw_44%2Fformat%2Cwebp"
          titleLink='circle/discuss/YxuRDH/'
          title='职言｜工作和租房的经验日常'
          contentLink='/circle/discuss/et28ow/'
          content='一起学习的🕹🕹🕹'
          time='1 小时前'
          tags={[
            {link:'/topic/cpp/',name:'C++'},
            {link:'/topic/java/',name:'Java'},
            {link:'/topic/python/',name:'Python'},
            {link:'/topic/xue-xi/',name:'学习'},
          ]}
        >

        </ContentDiscuss>
    </MainWrapper>
  )
}

export default LeftMain