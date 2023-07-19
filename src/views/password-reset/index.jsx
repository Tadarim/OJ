import React from 'react'
import {PasswordResetWrapper} from './style'

const PasswordReset = () => {
  return (
    <PasswordResetWrapper>
      <div className="container">
        <div className="reset-form">
          <div className="reset-base">
            <div className="form">
              <h3 className='form-heading'>重新设置密码</h3>'
              <hr />
              <p className='message'></p>
              
            </div>
          </div>
        </div>
      </div>
    </PasswordResetWrapper>
  )
}

export default PasswordReset