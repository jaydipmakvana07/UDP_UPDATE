const router = require("express").Router();
const Conversation = require("../model/Conversation");

// Middleware function
const myMiddleware = (req, res, next) => {
  // Middleware logic here
  // Call next() to pass control to the next middleware in the chain
  next();
};

// New conv
router.post("/", myMiddleware, async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get conv of a user
router.get("/:userId", myMiddleware, async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", myMiddleware, async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
