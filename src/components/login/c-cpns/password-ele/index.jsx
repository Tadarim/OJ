import React, { useState } from 'react'
import classNames from 'classnames'

import logo from '../../../../assets/svg/logo.svg'
import { PasswordWrapper } from './style'
import { IsTrueEmail } from '../../../../utils/checkEmail'

const PasswordEle = (props) => {

    const { modeChangeHandler, loginHandler } = props

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyPassword, setEmptyPassword] = useState(false)

    const passwordClickHandler = () => {
        email === "" && setEmptyEmail(true)
        email !== "" && !IsTrueEmail(email) && setErrorEmail(!errorEmail)

        password === "" && setEmptyPassword(true)

        loginHandler(email, password)
    }


    return (
        <PasswordWrapper>
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>
            <div className="title">账号密码登录</div>
            <div className="input-container">
                <label className="input">
                    <input type="text"
                        className={classNames({ error: emptyEmail || errorEmail })}
                        placeholder='邮箱'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setEmptyEmail(false)
                        }} />
                </label>
                {emptyEmail && <p className="errorMsg">请输入邮箱</p>}
                {errorEmail && <p className="errorMsg">请输入正确的邮箱</p>}
            </div>
            <div className="input-container">
                <label className="input">
                    <input type="text"
                        className={classNames({ error: emptyPassword })}
                        placeholder='输入密码'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setEmptyPassword(false)
                        }}
                    />
                </label>
                {emptyPassword && <p className="errorMsg">请输入密码</p>}
            </div>
            <button onClick={passwordClickHandler}>登录</button>
            <div className='change-container'>
                <span className='to-captcha change-option' onClick={modeChangeHandler}>验证码登录</span>
                <span className='change-option'>忘记密码</span>
            </div>
        </PasswordWrapper>
    )
}

export default PasswordEle