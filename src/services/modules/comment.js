import XYRequest from ".."

// 1讨论 2题目 3题解
export function getCommentList(type,operator_id,page) {
    return XYRequest.get({
        url:'/comment/list',
        params:{
            type,
            operator_id,
            page,
            page_size:10
        }
    })
}

export function getReplyList(type,root_comment_id,operator_id,page) {
    return XYRequest.post({
        url:'/comment/second/list',
        data:{
            type,
            root_comment_id,
            operator_id,
            page,
            page_size:10
        }
    })
}