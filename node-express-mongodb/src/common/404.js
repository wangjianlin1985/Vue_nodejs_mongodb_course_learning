
module.exports = (req, res, next) => {
    if(!req.route) {// 判断返回404
        return res.sendStatus(404);
    }
    next();
}
