import React from 'react'
import { RightWrapper } from './styled'
import { changeShowLoginAction } from '../../../../store/modules/login'
import { useDispatch } from 'react-redux'

const HeaderRight = () => {
  
  const dispatch = useDispatch()

  const LoginClickHandler = () => {
      dispatch(changeShowLoginAction())
  }

  return (
    <RightWrapper>
      <div className="right-content">
        <div className="btns">
          <div className="btn" onClick={LoginClickHandler}>注册</div>
          <div className="btn middle">或</div>
          <div className="btn" onClick={LoginClickHandler}>登录</div>
        </div>
      </div>
    </RightWrapper>
  )
}

export default HeaderRight