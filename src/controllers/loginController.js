

exports.loginController = (req, res) => {
    if (req.body?.username == 'Ramandip' && req.body.password == 'xyz123') {
        res.send({
            message: "login succesfully!",
            status: 200,
            token: "logintoken",
            customerId: 1
        })
    }
    else {
        res.send({
            message: "please enter valid credentials",
            status: 404,
        })
    };

}
