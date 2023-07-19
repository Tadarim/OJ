import React  from 'react'
import { useRoutes } from 'react-router-dom'

import AppHeader from './components/app-header'
import routes from './router/index'
import Backdrop from './base-ui/backdrop'
import Login from './components/login'
import { useDispatch, useSelector } from 'react-redux'
import { changeShowLoginAction } from './store/modules/login'

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
        {useRoutes(routes)}

      {showLogin && <Backdrop>
        <Login 
        showBtnClick
          ={showChangeHandler}></Login>
      </Backdrop>}
    </div>
  )
}

export default App