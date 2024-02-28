function checkAuthStatus(req,res,next){
    //After create acc, we are adding uid into session from util auth
    const uid = req.session.uid;
    if(!uid){
        return next();
    }

    //Put locals session uid info and isAuth to check wether user is authenticated or not
    res.locals.uid = uid;
    res.locals.isAuth = true;
    res.locals.isAdmin = req.session.isAdmin;
    next();
}

module.exports = checkAuthStatus;