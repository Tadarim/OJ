import XYRequest from '..'
import XXRequest from '../request/authRequest'

//默认最新 1为最热
export function getDiscussList(page, type) {
    return XYRequest.get({
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

export function getDiscussDetail(did) {
    return XYRequest.get({
        url: '/discuss/get',
        params: {
            did
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

export function PublishDiscuss(title, content, tags, cover_url, short_content) {
    return XXRequest.post({
        url: '/discuss/add',
        data: {
            title,
            content,
            tags,
            cover_url,
            short_content
        }
    })
}


