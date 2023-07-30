import XYRequest from "..";

export function codeSubmit(problem_id,language,code){
    return XYRequest.post(
        {
            url:'/resources/add',
            data:{
                created_by:1,
                problem_id:parseInt(problem_id),
                language,
                code:code
            }
        }
    )
}

export function getSubmitList(){
    return XYRequest.get(
        {
            url:'/submit/list'
        }
    )
}

export function getSubmitRecord(){
    return XYRequest.get(
        {
            url:'/submit/get/one'
        }
    )
}