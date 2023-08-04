import { matchRoutes, useLocation, useNavigate, useParams, useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { changeShowLoginAction } from "../store/modules/login";

//递归查询对应的路由
function searchroutedetail(path, routes) {
    if (matchRoutes(routes, path)) return matchRoutes(routes, path)
    return false
}


//全局路由守卫
function Guard(location, routes, dispatch, navigate) {
    const { pathname } = location;
    //找到对应的路由信息，判断有没有权限控制
    const routedetail = searchroutedetail(pathname, routes);
    // 没有找到路由，跳转404
    if (!routedetail) {
        navigate('/404')
    }
    //如果需要权限验证
    if (routedetail.some((item) => item.route.auth)) {
        const token = localStorage.getItem("OJToken");
        if (!token) {
            message.warning('请登录操作')
            dispatch(changeShowLoginAction())
        }
    }
}

export const RouterGurad = (routes) => {
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        Guard(location, routes, dispatch, navigate);
    }, [location, routes]);
    const Route = useRoutes(routes);

    return Route;
};

