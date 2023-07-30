import React from 'react'
import { RankingItemWrapper } from './styled'
import classNames from 'classnames'

const RankingItem = (props) => {

  const { num,avatar,title,desc,isNew,link } = props

  return (
    <RankingItemWrapper>
        <div className={classNames('number',{light:num <= 3})}>
            {num}
        </div>
        <a href={link} className='contentContainer'>
            <div className="titleContainer">
                {avatar && <div className="avatarContainer">
                    <img className='avatar' src={avatar} alt="" />
                </div>}
                <div className="item-title">
                    {title}
                </div>
                {isNew && <img className='newTag' src="https://static.leetcode.cn/cn-mono-assets/production/assets/new.77389df8.png" alt="" />}
            </div>
            <div className="desc">
                {desc}
            </div>
        </a>
    </RankingItemWrapper>
  )
}

export default RankingItem