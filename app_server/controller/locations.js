module.exports.homelist=function(req,res){
    res.render('index',{title:'Home'});
};
module.exports.locationInfo=function(req,res){
    res.render('index',{title:'Location info'});
};
module.exports.addReview=function(req,res){
    res.render('index',{title:'Add review'});
};