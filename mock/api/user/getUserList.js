/**
 * 暴露主页
 */

module.exports = {
    get(req, res, mock) {
        const data = [];
        for(let i = 0; i < 10; i ++) {
            data.push({
                "id": '@integer(0, 10)',
                "name": "John Doe",
                "email": "john.doe@example.com" 
            })
        }

        res.send({
            success: true,
            message: '这是用户列表接口',
            data: mock(data)
        });
    }
}