import React, { useState } from 'react'

import { LeftWrapper } from './styled'
import Logo from '../../../../assets/svg/logo.svg'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const  tabList = [
    {
        link:'/home',
        desc:'学习'
    },
    {
        link:'/problemset/all',
        desc:'题库'
    },
    // {
    //     link:'/home',
    //     desc:'竞赛'
    // },
    {
        link:'/circle',
        desc:'讨论'
    },
    // {
    //     link:'/home',
    //     desc:'求职'
    // },
    // {
    //     link:'/home',
    //     desc:'商店'
    // },
] 

const HeaderLeft = () => {

    const [tabSelected,setTabSelected] = useState(false)

  return (
    <LeftWrapper> 
            <div className="logo bar-item">
                <a href="/">
                    <img src={Logo} alt="图标" />
                </a>
                
            </div>
            {
                tabList.map((item,index) => 
                    <div 
                        className={classNames("bar-item",{active:tabSelected === index})} 
                        key={index}
                        onClick={()=>{setTabSelected(index)}}
                    >
                        <Link to={item.link}>{item.desc}</Link>
                    </div>
                )
            }
    </LeftWrapper>
  )
}

export default HeaderLeft