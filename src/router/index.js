import React from "react";
import { Navigate } from "react-router-dom";
import Problemset from '../views/problemset'
import PasswordReset from "../views/password-reset";
import Submission from "../views/problems/c-cpns/submission";
import Comments from "../views/problems/c-cpns/comments";
import Solution from "../views/problems/c-cpns/solution";

const Home = React.lazy(()=> import('../views/home'))
const ProblemsetMain = React.lazy(()=> import('../views/problemset/c-cpns/problemset-main'))
const Problems = React.lazy(()=> import('../views/problems'))

const routes = [
    {
        path:'/',
        element:<Navigate to={"/home"}></Navigate>
    },
    {
        path:'/home',
        element:<Home></Home>
    },
    {
        path:'/password/reset',
        element:<PasswordReset></PasswordReset>
    },
    {
        path:'/problemset',
        element:<Navigate to={"all"}></Navigate>
    },
    {
        path:'/problemset',
        element:<Problemset></Problemset>,
        children:[
            {
                path:'all',
                element:<ProblemsetMain></ProblemsetMain>
            },
            {
                path:'algorithms',
                element:<ProblemsetMain></ProblemsetMain>
            },
            {
                path:'database',
                element:<ProblemsetMain></ProblemsetMain>
            },
            {
                path:'javascript',
                element:<ProblemsetMain></ProblemsetMain>
            },
            {
                path:'shell',
                element:<ProblemsetMain></ProblemsetMain>
            },
            {
                path:'concurrency',
                element:<ProblemsetMain></ProblemsetMain>
            },
        ]
    },
    {
        path:'/problems',
        element: <Navigate to={"/problemset"}></Navigate>
    },
    {
        path:'/problems/:pid',
        element: <Problems></Problems>
    },
    {
        path:'/problems/:pid',
        element: <Problems></Problems>,
        children:[
            {
                path:'comments',
                element:<Comments></Comments>
            },
            {
                path:'solution',
                element:<Solution></Solution>
            },
            {
                path:'submissions',
                element:<Submission></Submission>
            },
        ]
    },
]

export default routes