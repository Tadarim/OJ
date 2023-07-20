module.exports = { 
    post(req, res) {
        try {
            res.send({
                "errno": 0,
                "errmsg": "string",
                "data": {},
                "trace_id": "string",
                "stack": "string"
            });
        }
        catch {
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