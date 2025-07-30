const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

router.get(
  "/",
  wrapAsync(listingController.index)
);

router.get("/new",isLoggedIn, listingController.renderNewForm);

router.get(
  "/:id",
  wrapAsync(listingController.showListing)
);

router.post(
  "/",isLoggedIn,
  validateListing,upload.single("listing[image]"),
  wrapAsync(listingController.createListing)
);

// router.post(
//   "/",upload.single("listing[image]"),(req,res)=>{
//     res.send(req.file);
//   }
// );

router.get(
  "/:id/edit",isLoggedIn,isOwner,
  wrapAsync(listingController.renderEditForm)
);

router.put(
  "/:id",isLoggedIn,isOwner,upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
);

router.delete(
  "/:id",isLoggedIn,isOwner,
  wrapAsync(listingController.deleteListing)
);

module.exports = router;