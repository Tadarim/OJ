import XYRequest from '..'

export function getLoginInfoByCode(email,email_code){
    return XYRequest.post(
       { 
            url:"/user/login",
            data:{
                email,
                email_code,
                login_type:parseInt(2)
            }
        }
    )
}
export function getLoginInfoByPw(email,password){
    return XYRequest.post(
       { 
            url:"/user/login",
            data:{
                email,
                password,
                login_type:parseInt(1)
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

