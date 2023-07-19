import React from 'react'
import { SwipperWrapper } from './styled'
import { Carousel } from 'antd'

const Swipper = (props) => {

  const {swipperImg} = props

  return (
    <SwipperWrapper>
      <div className="swipper-container">
        <Carousel autoplay >
          {
            swipperImg.map((item,index) => {
              return (
                <div className="swipper-slide" key={index}>
                  <a href={item.link}>
                    <img src={item.src} alt="" />
                    </a>
                </div>
              )
            })
          }
          
        </Carousel>
      </div>
    </SwipperWrapper>
  )
}

export default Swipper