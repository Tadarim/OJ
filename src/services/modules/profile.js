import XYRequest from '..'

const token = localStorage.getItem('OJToken') 

export function getProfileInfo(page,user_id){
    console.log(user_id)
    return XYRequest.get({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/userinfo/get',
        params: {
            page:parseInt(page),
            page_size: parseInt(10),
            user_id: user_id ? parseInt(user_id) : parseInt(0),
        }
    })
}

export function submitProfileInfo(user_name,gender,birthday,cur_location,introduce){
    return XYRequest.post({
        headers: {
            Authorization: token || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM'
        },
        url: '/userinfo/update',
        data: {
            user_name,
            gender,
            birthday,
            cur_location,
            introduce
        }
    })
}