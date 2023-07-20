module.exports = {
    async get(req, res, mock) {
        // 必须 try catch，只有在这能捕获错误
        try {
            res.send({
                success: true,
                message: 'ok'
            });
        } catch (error) {
            console.log(error);
        }
    }
}