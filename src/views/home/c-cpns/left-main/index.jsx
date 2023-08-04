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
            coverLink={`/circle/discuss/${item.id}`}
            imgSrc={item.cover_url}
            key={index}
            avatarSrc={item.avatar_url}
            avatarLink={`/profile/${item.user_id}`}
            titleLink={`/circle/discuss/${item.id}`}
            title={item.title}
            contentLink={`/circle/discuss/${item.id}`}
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