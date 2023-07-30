import XYRequest from '..'

export function getDiscussList(page) {
    return XYRequest.get({
        url: '/discuss/list',
        params: {
            page,
            page_size: 10
        }
    })
}

export function getDiscussEveryList() {
    return XYRequest.get({
        url: '/discuss/every_list'
    })
}


