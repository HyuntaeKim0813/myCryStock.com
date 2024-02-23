const User = require('../models/user.model')
const authUtil = require('../util/authentication')
const validation = require('../util/vaidation')

function getSignup(req,res){
    res.render('customer/auth/signup')
}

async function signup(req,res,next){
    const enteredData = {
        email: req.body.email,
        password: req.body.password,
        fullname: req.body.fullname,
        street: req.body.street,
        postal: req.body.postal,
        city: req.body.city,
    };
    
    const user = new User(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postal,
        req.body.city,
    );
    
    if(
        !validation.userDetailsAreValid(
        req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.postal,
        req.body.city,)
        || !validation.emailIsConfirmed(req.body.email, req.body['confirm-email'])
        ) {
        res.redirect('/signup');
        return;
    }

    try {
        await user.signup();    
    }catch(error){
        next(error);
        return;
    }

    res.redirect('/login')
}

function getLogin(req,res){
    res.render('customer/auth/login')
}

async function login(req,res,next){
    //find the user for the address
    //When we find, we should match the password
    const user = new User(req.body.email, req.body.password);

    //closer way outside block declared variable can use in inside block.
    let existingUser
    try{
        existingUser = await user.getUserWithSameEmail();
    }catch(error){
        next(error);
        return;
    }

    if(!existingUser){
        res,redirect('/login');
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if(!passwordIsCorrect){
        res,redirect('/login');
        return;
    }

    authUtil.createUserSession(req, existingUser, function(){
        res.redirect('/');
    })
}

function logout(req,res){
    authUtil.destroyUserAuthSession(req);
    res.redirect('/');
}

module.exports = {
    getSignup:getSignup,
    getLogin:getLogin,
    signup:signup,
    login:login,
    logout:logout,
}