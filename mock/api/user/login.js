/**
 * 暴露主页
 */

module.exports = {
    post(req, res, mock) {
        res.send(
            {
                data: {
                    "password": "zhangscxan",
                    "email": "2633065242@qq.com",
                    "email_code": "",
                    "login_type": 1,
                    "dots": "",
                    "key": "",
                    accessToken: "213812783sadasds"
                }
            }
        );
    },
    get(req, res, mock) {
        res.send(
            {
                "password": "zhangscxan",
                "email": "2633065242@qq.com",
                "email_code": "",
                "login_type": 1,
                "dots": "",
                "key": ""
            }
        );
    }
}