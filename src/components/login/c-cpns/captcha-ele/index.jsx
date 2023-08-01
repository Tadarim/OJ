import React,{useState} from 'react'
import classNames from 'classnames'

import logo from '../../../../assets/svg/logo.svg'
import { CaptchaWrapper } from './styled'
import { IsTrueEmail } from '../../../../utils/checkEmail'
import { getCaptcha } from '../../../../services'

const CaptchaEle = (props) => {

    const {modeChangeHandler,loginHandler} = props

    const [email, setEmail] = useState('')
    const [captcha, setCaptcha] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyCaptcha, setEmptyCaptcha] = useState(false)

    const captchaClickHandler = () => {

        email === "" && setEmptyEmail(true)
        email !== "" && !IsTrueEmail(email) && setErrorEmail(!errorEmail)

        captcha === '' && setEmptyCaptcha(true)

        loginHandler(email,captcha)
    }

    const getCaptchaHandler = () =>{
        getCaptcha(email).then((res) => {
            console.log(res)
        })
    }


    return (
        <CaptchaWrapper>
                <div className="logo-container">
                    <img src={logo} alt="" />
                </div>
                <div className="input-container email">
                    <label className="input">
                        <input type="text"
                            className={classNames({ error: emptyEmail || errorEmail })}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmptyEmail(false)
                            }}
                            placeholder='邮箱' />
                    </label>
                    {emptyEmail && <p className="errorMsg">请输入邮箱</p>}
                    {errorEmail && <p className="errorMsg">请输入正确的邮箱</p>}
                </div>
                <div className="input-container captcha">
                    <label className="input">
                        <input type="text"
                            value={captcha}
                            className={classNames({ error: emptyCaptcha })}
                            onChange={(e) => {
                                setCaptcha(e.target.value)
                                setEmptyCaptcha(false)
                            }}
                            placeholder='验证码' />
                        {!IsTrueEmail(email) && <span className={'captchaBtn disabled'} onClick={getCaptchaHandler} >获取验证码</span>}
                        {IsTrueEmail(email) && <span className={'captchaBtn'} onClick={getCaptchaHandler}>获取验证码</span>}

                    </label>
                    {emptyCaptcha && <p className="errorMsg">请输入验证码</p>}
                </div>
                <div className="input-container"></div>
                <button onClick={captchaClickHandler}>登录 / 注册</button>
                <div className='change-container'>
                    <div className="to-password" onClick={modeChangeHandler}>
                        账号密码登录
                    </div>
                </div>
        </CaptchaWrapper>
    )
}

export default CaptchaEle