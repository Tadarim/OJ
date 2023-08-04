import XYRequest from '..'

const token = localStorage.getItem('OJToken')

export function getSolutionList(page, problem_id) {
    return XYRequest.get({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/solution/list',
        params: {
            page,
            page_size: 20,
            problem_id
        }
    })
}

export function searchSolution(key_word, page, problem_id, type) {
    return XYRequest.post({
        url: '/solution/search',
        data: {
            key_word,
            page_size: 10,
            page,
            problem_id: parseInt(problem_id),
            type: parseInt(type)
        }
    })
}

export function PublishSolution(content, title, tags, cover_url, problem_id) {
    return XYRequest.post({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/solution/add',
        data: {
            title,
            content,
            cover_url,
            tags,
            problem_id: parseInt(problem_id)
        }
    })
}


export function SolutionLike(operator_id, is_like) {
    return XYRequest.post({
        url: '/inter_action/like',
        data: {
            type: 3,
            operator_id,
            is_like //1 点赞 -1取消
        }
    })
}

export function getSolutionDetail(id) {
    return XYRequest.get({
        url: '/solution/get',
        params: {
            id
        }
    })
}