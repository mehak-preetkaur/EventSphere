const Event = require("../models/Event");

// GET all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST new event
const createEvent = async (req, res) => {

    console.log("POST /api/events called");
    console.log(req.body);

    try {
        const event = await Event.create(req.body);

        res.status(201).json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
// Update Event
const updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Event
const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id);

        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};