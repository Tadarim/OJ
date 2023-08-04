import React  from 'react'
import { useRoutes } from 'react-router-dom'

import AppHeader from './base-ui/app-header'
import routes from './router/index'
import Backdrop from './base-ui/backdrop'
import Login from './components/login'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowLoginAction } from './store/modules/login'
import { RouterGurad } from './router/RouterGurad'

const App = () => {

  const dispatch = useDispatch()

  const  {showLogin} = useSelector((state) => ({
    showLogin: state.login.showLogin
  }))
 
  const showChangeHandler = () => {
    dispatch(changeShowLoginAction())
  }

  return (
    <div className='app'>
      <AppHeader></AppHeader>
        {RouterGurad(routes)}
      {showLogin && <Backdrop>
        <Login 
        showBtnClick
          ={showChangeHandler}></Login>
      </Backdrop>}
    </div>
  )
}

export default App