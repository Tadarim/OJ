import { useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { changeShowLoginAction } from "../store/modules/login";

//递归查询对应的路由
function searchroutedetail(path, routes) {
    for (let item of routes) {
        console.log(item.path)
        if (item.path === path)
        {
            return item;
        } 
        if (item.children) {
            const childRouter = searchroutedetail(path, item.children);
            if(childRouter) return childRouter
        }    
        
    }
    return null;
}


//全局路由守卫
function Guard(location,routes,dispatch) {
    const { pathname } = location;
    
    //找到对应的路由信息，判断有没有权限控制
    const routedetail = searchroutedetail(pathname, routes);
    //没有找到路由，跳转404
    if (!routedetail) {
        // navigate('/')
    }
    //如果需要权限验证
    if (routedetail.auth) {
        // const token = localStorage.getItem("OJToken");
        // console.log(token)
        const token = null
        if (!token) {
            message.warning('请登录')
            dispatch(changeShowLoginAction())
        }
    }
    return true
}

export const RouterGurad = (routes) => {
    const dispatch = useDispatch()
    const location = useLocation();
    
    useEffect(() => {
        Guard(location, routes, dispatch);
    }, [location,  routes]);
    const Route = useRoutes(routes);

    return Route;
};

