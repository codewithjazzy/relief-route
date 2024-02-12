const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comment.create({
        comment: req.body.comment,
        restroom: req.params.id,
        user: req.user.id
      });
      console.log("Comment has been added!");
      res.redirect("/restrooms/getChoice/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      // Find the comment to obtain the restroom ID before deletion
      const comment = await Comment.findById(req.params.id);
  
      // Proceed only if the comment exists
      if (comment) {
        // Store the restroom ID for redirection
        const restroomId = comment.restroom;
  
        // Delete the comment
        await Comment.findByIdAndDelete(req.params.id);
        console.log("Deleted Comment");
  
        // Always redirect back to the same restroom page
        res.redirect(`/restrooms/getChoice/${restroomId}`);
      } else {
        console.log("Comment not found");
        // Redirect back to the referring page if the comment doesn't exist
        res.redirect('back');
      }
    } catch (err) {
      console.error("Failed to delete comment:", err);
      // In case of an error, redirect back to the referring page
      res.redirect('back');
    }
  }
};