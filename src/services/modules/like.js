import XYRequest from '..'

const token = localStorage.getItem('OJToken') 

export function likeHandler(type, operator_id, is_like) {
    return XYRequest.post({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/inter_action/like',
        data: {
            type: parseInt(type),
            operator_id: parseInt(operator_id),
            is_like: parseInt(is_like)
        }
    })
}