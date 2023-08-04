import React from 'react'
import { HotWrappr } from './styled'
import AsideCard from '../aside-Card'
import RankingItem from './c-cpns/ranking-item'

const Hot = (props) => {
  const { title, content } = props
  return (
    <HotWrappr>
      <AsideCard
        title={title}
      >
        {{
          main: content?.map((item, index) => {
            return (<RankingItem
              key={index}
              num={index + 1}
              avatar={item.avatar_url}
              link={`/circle/discuss/${item.id}`}
              desc={item.short_content}
              title={item.title}
            />)
          })
        }
        }
      </AsideCard>
    </HotWrappr>

  )
}

export default Hot