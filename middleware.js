const Listing = require("./models/listing");
const Review = require("./models/review");

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","you must be logged in First");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let{id} = req.params;
     let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
      req.flash("error","You are not the owner of this listing");
      return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAutor = async(req,res,next)=>{
    let{id,reviewId} = req.params;
     let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
      req.flash("error","You are not the author of this Review");
      return res.redirect(`/listings/${id}`);
    }
    next();
}