import XYRequest from '..'

//默认最新 1为最热
export function getDiscussList(page,type) {
    return XYRequest.get({
        url:'/discuss/list',
        params:{
            page,
            page_size:10,
            type
        }
    })
}

export function getDiscussEveryList() {
    return XYRequest.get({
        url:'/discuss/every_list'
    })
}

export function getDiscussDetail(did){
    return XYRequest.get({
        url:'/discuss/get',
        params:{
            did
        }
    })
}

// export function getCommentList(page,type,operator_id) {
//     return XYRequest.get({
//         url:'/comment/list',
//         params:{
//             page,
//             page_size:10,
//             type,
//             operator_id
//         }
//     })
// }

export function searchDiscuss(key_word,page,type){
    return XYRequest.post({
        url:'/discuss/search',
        data:{
            key_word,
            page,
            page_size:10,
            type: parseInt(type)
        }
    })
}

// export function getReplyList(type,root_comment_id,operator_id,page) {
//     return XYRequest.post({
//         url:'/comment/second/list',
//         data:{
//             type,
//             root_comment_id,
//             operator_id,
//             page,
//             page_size:10
//         }
//     })
// }


export function PublishDiscuss(title,content,tags,cover_url,short_content){
    return XYRequest.post({
        url:'/discuss/add',
        data:{
            title,
            content,
            tags,
            cover_url,
            short_content
        }
    })
}

// export function DiscussLike(operator_id,is_like){
//     return XYRequest.post({
//         url:'/inter_action/like',
//         data:{
//             type:1, 
//             operator_id,
//             is_like //1 点赞 -1取消
//         }
//     })
// }

