/**
 * 获取图形验证码
 */
const fs = require('fs');
const {pw} = require('../../../utils');
const readFile = pw(fs.readFile);

module.exports = {
    async get(req, res, mock) {
        try {
            const image_base64 = await readFile(__dirname + '/image_base64.txt', 'utf-8');
            const thumb_base64 = await readFile(__dirname + '/thumb_base64.txt', 'utf-8');
            return res.send(
                {
                    "errno": 0,
                    "errmsg": "",
                    "data": {
                        image_base64,
                        thumb_base64,
                        captcha_key: "ba3409d8106c21fa7c3884e8678faa54"
                    },
                    "trace_id": "0a00080f6471d3860533ef0a1d3e23b0",
                    "stack": null
                }
            );
        }
        catch (e) {
            console.error(e);
            res.send(
                {
                    "errno": 0,
                    "errmsg": e.message
                }
            );
        }
    }
}