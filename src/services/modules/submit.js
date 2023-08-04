import XYRequest from "..";

const token = localStorage.getItem("OJToken")

export function codeSubmit(code, language, problem_id) {
    return XYRequest.post(
        {
            headers: {
                Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
            },
            url: '/submit/add',
            data: {
                problem_id: parseInt(problem_id),
                language,
                code
            }
        }
    )
}

export function getSubmitRecord(page, problem_id) {
    return XYRequest.get(
        {
            headers: {
                Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
            },
            url: '/submit/list',
            params: {
                page,
                page_size: 10,
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

export function uploadImage(file) {
    return XYRequest.post(
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url: '/resource/add',
            data: {
                upload_slice: file.get('quill-image')
            }
        }
    )
}