import XYRequest from '..'
import XXRequest from '../request/authRequest'

export function getSolutionList(page, problem_id) {
    return XYRequest.get({
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

export function PublishSolution(title, content, cover_url, tags, short_content, problem_id) {
    return XXRequest.post({
        url: '/solution/add',
        data: {
            title,
            content,
            cover_url,
            tags,
            short_content,
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