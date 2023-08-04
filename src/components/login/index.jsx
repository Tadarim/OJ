import React, { useState } from 'react'
import { LoginWrapper } from './styled'
import { useDispatch, useSelector } from 'react-redux'
import PasswordEle from './c-cpns/password-ele'
import CaptchaEle from './c-cpns/captcha-ele'
import { getLoginInfoByCode, getLoginInfoByPw } from '../../services'
import { changeAvatarUrlAction, changeIsLoginAction, changeShowLoginAction, changeUserNameAction } from '../../store/modules/login'
import { message } from 'antd'


const Login = (props) => {

    const { showBtnClick } = props

    //登陆方式切换
    const [isCaptcha, setIsCaptcha] = useState(true)

    const dispatch = useDispatch()

    const modeChangeHandler = () => {
        setIsCaptcha(!isCaptcha)
    }

    const loginHandler = async (email, code) => {
        let res;
        isCaptcha
            ?
            res = await getLoginInfoByCode(email, code)
            :
            res = await getLoginInfoByPw(email, code)
        if (res.data?.token) {
            dispatch(changeIsLoginAction())
            dispatch(changeUserNameAction(res.data.user_name))
            dispatch(changeAvatarUrlAction(res.data.avatar_url))
            localStorage.removeItem('OJToken')
            message.success('登陆成功！')
            localStorage.setItem('OJToken', res.data?.token)
        } else {
            message.warning('用户名或密码错误！')
        }
        dispatch(changeShowLoginAction())
    }

    const loginClickHandler = (email, code) => {
        loginHandler(email, code)
    }

    return (
        <LoginWrapper>
            <div className="content-container">
                <div className="main-container">
                    {
                        isCaptcha
                            ? <CaptchaEle
                                modeChangeHandler={modeChangeHandler}
                                loginHandler={loginClickHandler}
                            />
                            : <PasswordEle
                                modeChangeHandler={modeChangeHandler}
                                loginHandler={loginClickHandler}
                            />
                    }
                </div>
                <div className="closeIcon" onClick={showBtnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                        <path fillRule="evenodd" d="M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z" clipRule="evenodd">'
                        </path>
                    </svg>
                </div>
            </div>
        </LoginWrapper>

    )
}

export default Login