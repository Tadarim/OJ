import XYRequest from "..";

export function test(file){
    return XYRequest.post(
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url:'/resource/add',
            data:{
                upload_slice:file
            }
        }
    )
}