import React from 'react'
import { HotWrappr } from './styled'
import AsideCard from '../../../../base-ui/aside-Card'
import RankingItem from '../../../../base-ui/ranking-item'

const Hot = (props) => {
  const {title,content} = props
  return (
    <HotWrappr>
        <AsideCard 
          title={title}
        >
         { { main :content.map((item,index) => {
            return(<RankingItem
                key={index}
                num={index+1}
                avatar={item.avatar}
                link={item.link}
                desc={item.desc}
                title={item.title}
                isNew={item.isNew}
            />)
          })}
          }
        </AsideCard>
    </HotWrappr>
    
  )
}

export default Hot