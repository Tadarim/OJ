import XYRequest from '..'

export function getLoginInfo(email,code,login_type){
    return XYRequest.post(
       { 
            url:"/user/login",
            data:{
                email,
                code,
                login_type
            }
        }
    )
}

export function getCaptcha(email){
    return XYRequest.get(
        {
            url:"/email/code/get",
            params:{
                email,
                code_type:2
            }
        }
    )
}