import XYRequest from '..'

export function getProblemById(pid) {
    return XYRequest.get(
        {
            url:'/problem/get/one',
            params:{
                id:pid
            }
        }
    )
}

export function getCodeTemplate(id){
    return XYRequest.get(
        {
            url:"/code_template/",
            params:{
                id
            }
        }
    )
}