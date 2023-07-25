import XYRequest from '..'

export function getDiscussList(page) {
    return XYRequest.get({
        url:'/discuss/list',
        params:{
            page,
            page_size:20
        }
    })
}

export function getDiscussEveryList() {
    return XYRequest.get({
        url:'/discuss/every_list'
    })
}

export function getReplyList(page) {
    return XYRequest.get({
        url:'/comment/list',
        params:{
            page,
            page_size:10
        }
    })
}

export function getRepliesList(page) {
    return XYRequest.get({
        url:'/comment/second/list',
        params:{
            page,
            page_size:10
        }
    })
}

export function searchDiscuss(){
    return XYRequest.post({
        url:'/discuss/search',
        data:{

        }
    })
}

export function PublishDiscuss(){
    return XYRequest.post({
        url:'/discuss/add',
        data:{

        }
    })
}

export function DeleteDiscuss(){
    return XYRequest.post({
        url:'/discuss/remove',
        data:{

        }
    })
}

