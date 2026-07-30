const express = require("express");
const router = express.Router();

const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/", createEvent);

// Update Event
router.put("/:id", updateEvent);

// Delete Event
router.delete("/:id", deleteEvent);

module.exports = router;