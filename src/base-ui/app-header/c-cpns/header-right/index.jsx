import React, { useEffect } from 'react'
import { RightWrapper } from './styled'
import { changeIsLoginAction, changeShowLoginAction } from '../../../../store/modules/login'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

const HeaderRight = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('OJToken')

  const { isLogin,userName,avatarUrl } = useSelector((state) => ({
    isLogin: state.login.isLogin,
    userName: state.login.userName,
    avatarUrl: state.login.avatarUrl
  }))

  const LoginClickHandler = () => {
    dispatch(changeShowLoginAction())
  }

  const [showPopper, setShowPopper] = useState(false)
  const loginOutHandler = () => {
    dispatch(changeIsLoginAction(false))
    localStorage.removeItem('OJToken')
  }

  useEffect(()=>{
    if(token){
      dispatch(changeIsLoginAction(true))
    }
  },[token])

  return (
    <RightWrapper>
      <div className="right-content">
        <div className="content-wrapper">
          {
            !isLogin
              ?
              <> 
                <div className="btn" onClick={LoginClickHandler}>注册</div>
                <div className="btn middle">或</div>
                <div className="btn" onClick={LoginClickHandler}>登录</div>
              </>
              :
              <div className="avatar-wrapper" onClick={() => { setShowPopper(!showPopper) }}>
                <span>
                    <img src={avatarUrl} size="20" alt='' /> 
                </span>
                {
                  showPopper &&
                  <div className="popper-container">
                    <div className="popper">
                      <div className="header-wrapper">
                        <a href="/profile">
                          <img src={avatarUrl} size="20" alt='' />
                        </a>
                        <div className="username-container">
                          <a href="/profile">{userName}</a>
                        </div>
                      </div>
                      <div className="main-wrapper">
                        <a href="/profile" className="item-wrapper">
                          <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="18" height="18" fill="currentColor">
                              <path fillRule="evenodd" d="M7.583 5.833a2.417 2.417 0 114.299 1.517A3.246 3.246 0 0113.25 10a.75.75 0 01-1.5 0 1.75 1.75 0 00-3.5 0 .75.75 0 01-1.5 0c0-1.094.54-2.061 1.368-2.65a2.407 2.407 0 01-.535-1.517zm3.334 0a.917.917 0 11-1.834 0 .917.917 0 011.834 0z" clipRule="evenodd"></path>
                              <path d="M6.75 12.917a.75.75 0 01.75-.75h5a.75.75 0 010 1.5h-5a.75.75 0 01-.75-.75zM7.5 14.667a.75.75 0 000 1.5h2.917a.75.75 0 000-1.5H7.5z"></path>
                              <path fillRule="evenodd" d="M5 .833a2.5 2.5 0 00-2.5 2.5v13.334a2.5 2.5 0 002.5 2.5h10a2.5 2.5 0 002.5-2.5V3.333a2.5 2.5 0 00-2.5-2.5H5zm-.833 2.5c0-.46.373-.833.833-.833h10c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833H5a.833.833 0 01-.833-.833V3.333z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="item-text">个人资料</div>
                        </a>
                        <a className="item-wrapper" onClick={loginOutHandler}>
                          <div className="item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                              <path fillRule="evenodd" d="M18.586 13h-8.083c-.523 0-.947-.448-.947-1s.424-1 .947-1h8.083l-2.738-2.737a1 1 0 011.415-1.415l4.444 4.445a1 1 0 010 1.414l-4.444 4.445a1 1 0 01-1.415-1.415L18.586 13zM9 5H6a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 010 2z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="item-text">退出</div>
                        </a>
                      </div>

                    </div>
                  </div>
                }

              </div>
          }


        </div>
      </div>
    </RightWrapper>
  )
}

export default HeaderRight