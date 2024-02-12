const cloudinary = require("../middleware/cloudinary");
const mongoose = require("mongoose");
const Restroom = mongoose.model('Restroom', new mongoose.Schema({}, { strict: false }), 'restrooms');
const User = require("../models/User");
const Comment = require("../models/Comment")

module.exports = {
  getHome: getHome = (req, res) => {
    res.render('home', { restrooms: [], searchPerformed: false }); // Pass an empty array for restrooms initially
  },
  getProfile: async (req, res) => {
    try {
      const posts = await User.find({ user: req.user.id });
      res.render("profile.ejs", { user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  findRestroom: async (req, res) => {
      let search = {};

      if (req.body.city) {
          search.City = req.body.city;
      }
      if (req.body.state) {
          search.CountrySubdivisionCode = req.body.state.toUpperCase();
      }
      if (req.body.zip) {
          const zipCodeStart = parseInt(req.body.zip + '0000', 10);
          const zipCodeEnd = parseInt(req.body.zip + '9999', 10);
          search.PostalCode = { $gte: zipCodeStart, $lte: zipCodeEnd };
      }
      if (req.body.country) {
          search.CountryCode = req.body.country.toUpperCase();
      }

      try {
        const restrooms = await Restroom.find(search);
        if (restrooms.length === 0) {
          req.flash('info', 'No restrooms found, please try your search again.');
          return res.redirect('back');
        }
        res.render("home.ejs", { restrooms: restrooms, searchPerformed: true }); 
      } catch (err) {
        console.log(err);
      }
    },
    getChoice: async (req, res) => {
      console.log("Accessing getChoice route with ID:", req.params.id);
      try {
        const restroom = await Restroom.findById(req.params.id); //request.parameter.id::: the 'id' string in the router (from the url).
        const comments = await Comment.find({restroom: req.params.id}); 
        res.render("restroom.ejs", { restroom: restroom, user: req.user, comments: comments }); // the post is 'post' in ejs, req.user is 'user' in ejs. u can then use the properties from the DB collection in EJS like post.title/ post.image/ user.id etc
      } catch (err) {
        console.log("Error in getChoice:", err);
        res.status(500).send("An error occurred");
      }
    },
    upvoteRestroom: async (req, res) => {
          try {
            await Restroom.findOneAndUpdate(
              { _id: req.params.id },
              {
                $inc: { Upvotes: 1 },
              }
            );
            console.log("Upvotes +1");
            res.redirect('back');
          } catch (err) {
            console.log(err);
          }
        },
    downvoteRestroom: async (req, res) => {
        try {
          await Restroom.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { Downvotes: 1 },
            }
          );
          console.log("Downvotes +1");
          res.redirect('back');
        } catch (err) {
          console.log(err);
        }
      },
  };

  // undoUpvote: async (req, res) => {
  //   try {
  //     await Restroom.findOneAndUpdate(
  //       { _id: req.params.id },
  //       {
  //         $inc: { Upvotes: -1 },
  //       }
  //     );
  //     console.log("Upvote Undone");
  //     res.redirect('back');
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };