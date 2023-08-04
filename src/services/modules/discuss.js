import XYRequest from '..'

const token = localStorage.getItem("OJToken")
//默认最新 1为最热
export function getDiscussList(page, type) {
    return XYRequest.get({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/discuss/list',
        params: {
            page,
            page_size: 10,
            type
        }
    })
}

export function getDiscussEveryList() {
    return XYRequest.get({
        url: '/discuss/every_list'
    })
}

export function getDiscussDetail(id) {
    return XYRequest.get({
        url: '/discuss/get',
        params: {
            id
        }
    })
}


export function searchDiscuss(key_word, page, type) {
    return XYRequest.post({
        url: '/discuss/search',
        data: {
            key_word,
            page,
            page_size: 10,
            type: parseInt(type)
        }
    })
}

export function PublishDiscuss(content, title, tags, cover_url) {
    return XYRequest.post({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/discuss/add',
        data: {
            title,
            content,
            tags,
            cover_url
        }
    })
}


