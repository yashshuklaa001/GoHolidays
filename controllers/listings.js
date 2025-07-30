const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geoCodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
  };

module.exports.renderNewForm = (req, res) => {
  res.render("listing/new");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews",populate:{
      path:"author"
    },
    }).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exist ");
        return res.redirect("/listings");
    }
    res.render("listing/show", { listing });
  };

  module.exports.createListing = async (req, res, next) => {
let response = await geoCodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send();

    let url = req.file.path;
    let filename = req.file.path;
      const newListing = new Listing(req.body.listing);
      newListing.owner=req.user._id;
      newListing.image={url,filename};
      newListing.geometry = response.body.features[0].geometry;
      let savedListing = await newListing.save();
      req.flash("success","New Listing Created!");
      res.redirect("/listings");
    };

    module.exports.renderEditForm = async (req, res) => {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if(!listing){
            req.flash("error","Listing you are trying to edit is deleted");
            return res.redirect("/listings");
        }
        let originalImageUrl=listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
        res.render("listing/edit", { listing,originalImageUrl });
      };
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
   let listing =  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
   if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.path;
    listing.image = {url,filename};
    await listing.save();
   }
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
  };

  module.exports.deleteListing = async (req, res) => {
      let { id } = req.params;
      let deleteListing = await Listing.findByIdAndDelete(id);
      console.log(deleteListing);
      req.flash("success","Listing Deleted!");
      res.redirect("/listings");
    };