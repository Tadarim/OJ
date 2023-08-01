import XYRequest from "..";
import XXRequest from '../request/authRequest'

export function codeSubmit( problem_id, language, code) {
    return XXRequest.post(
        {
            url: '/submit/add',
            data: {
                problem_id: parseInt(problem_id),
                language,
                code
            }
        }
    )
}

export function getSubmitRecord(page,problem_id) {
    return XXRequest.get(
        {
            url: '/submit/list',
            params:{
                page,
                page_size:10,
                problem_id
            }
        }
    )
}

export function getSubmitList() {
    return XYRequest.get(
        {
            url: '/submit/list'
        }
    )
}

export function uploadImage(file){
    console.log(file.get('quill-image'))
    return XYRequest.post(
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url:'/resource/add',
            data:{
                upload_slice:file.get('quill-image')
            }
        }
    )
}