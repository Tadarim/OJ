import XYRequest from "..";

export function getSearchList(mode,key_word,page){
    return XYRequest.post({
        url:`/${mode}/search`,
        data:{
            key_word,
            page,
            page_size:10
        }
    })
}