import React from 'react'
import { MainWrapper } from './styled'
import ContentDiscuss from './c-cpns/content-discuss'
import { getDate } from '../../../../utils/getDate'

const LeftMain = (props) => {

  const { discussList } = props
  
  return (
    <MainWrapper>
      {
        discussList?.map((item, index) =>
          <ContentDiscuss
            key={index}
            avatarSrc={item.avatar_url}
            titleLink='circle/discuss/YxuRDH/'
            title={item.title}
            contentLink='/circle/discuss/et28ow/'
            content={item.short_content}
            time={getDate(item.created_at)}
            tags={item.tags.split(' ')}
          >
          </ContentDiscuss>
        )
      }
    </MainWrapper>
  )
}

export default LeftMain