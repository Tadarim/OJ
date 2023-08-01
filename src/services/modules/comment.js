import XYRequest from ".."
import XXRequest from '../request/authRequest'

// 1讨论 2题目 3题解
export function getCommentList(type, operator_id, page) {
    return XYRequest.get({
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
    return XYRequest.post({
        url: '/comment/second/list',
        data: {
            type: parseInt(type),
            root_comment_id: parseInt(root_comment_id),
            operator_id,
            page,
            page_size: 10
        }
    })
}

export function submitComment( content, operator_id, reply_comment_id = null, root_comment_id = null,type) {
    return XXRequest.post({
        url: '/comment/add',
        data: {
            type: parseInt(type),
            content,
            operator_id: parseInt(operator_id),
            reply_comment_id,
            root_comment_id
        }
    })
}