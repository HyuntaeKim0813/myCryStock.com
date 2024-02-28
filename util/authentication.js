function createUserSession(req, user, action){
    //user id | _id: user comming from database and _id |  
    //toString() is a built in utilitymethod that convert js object or value to get that value as a plain string.
    req.session.uid = user._id.toString();
    //save method come from express session | excute save and when it is updated to db it will save
    req.session.isAdmin = user.isAdmin;
    req.session.save(action);
}

function destroyUserAuthSession(req){
    // remove all values | when request work it will save automatically
    req.session.uid = null;
}

module.exports = {
    createUserSession: createUserSession,
    destroyUserAuthSession:destroyUserAuthSession
}