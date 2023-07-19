import XYRequest from '..'

export function getAllProblemset(page_size = 10, page = 1) {
    return XYRequest.get(
        {
            url: '/problem/get',
            params: {
                page_size,
                page
            }
        }
    )
}