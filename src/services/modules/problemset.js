import XYRequest from '..'

export function getAllProblemset(page) {
    return XYRequest.get(
        {
            url: '/problem/get',
            params: {
                page_size: 10,
                page
            }
        }
    )
}

export function searchProblem(key_word, page, type) {
    return XYRequest.post({
        url: '/problem/search',
        data: {
            key_word,
            page,
            page_size: 10,
            type: parseInt(type)
        }
    })
}


export function getRandProblem() {
    return XYRequest.get(
        {
            url: '/problem/get/rand'
        }
    )
}