import { useLocation,useNavigate } from "react-router-dom";

const getCurrentRouterMap = (routers, path) => {
    for (let router of routers) {
        if (router.path == path) return router;
        if (router.child) {
            const childRouter = getCurrentRouterMap(router.child, path)
            if (childRouter) return childRouter;
        }
    }
    return routers[routers.length - 1]
}

export const RouterBeforeEach = ({children}) => {
    const location = useLocation();
    const navigator =useNavigate()
    useEffect(() => {
      let router = getCurrentRouterMap(routes, location.pathname)
      if(!isLogin && router.auth) {
        navigator('/login')
      }
    }, [location.pathname]);
    return children
  }
