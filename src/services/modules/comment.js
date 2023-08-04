import XYRequest from ".."

const token = localStorage.getItem("OJToken")
// 1讨论 2题目 3题解

export function getCommentList(type, operator_id, page) {
    return XYRequest.get({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/comment/list',
        params: {
            type: parseInt(type),
            operator_id: parseInt(operator_id),
            page,
            page_size: 10
        }
    })
}

export function getReplyList(type, root_comment_id, operator_id, page) {
    return XYRequest.get({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/comment/second/list',
        params: {
            type: parseInt(type),
            root_comment_id: parseInt(root_comment_id),
            operator_id:parseInt(operator_id),
            page:parseInt(page),
            page_size: 10
        }
    })
}

export function submitComment(content, operator_id, type, reply_comment_id, root_comment_id) {
    return XYRequest.post({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/comment/add',
        data: {
            type: parseInt(type),
            content,
            operator_id: parseInt(operator_id),
            reply_comment_id: parseInt(reply_comment_id),
            root_comment_id: parseInt(root_comment_id)
        }
    })
}