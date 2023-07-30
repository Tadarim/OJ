export function changeDifficulty(difficulty){
    switch (difficulty){
        case 1 :
            return '简单'
        case 2 :
            return "中等"
        default :
            return '困难'
    }
}