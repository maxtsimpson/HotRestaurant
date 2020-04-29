const reservationRepo = require ('./reservationRepo.js');

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
function addApiRoutes (app) {

    // Get waitlist data
    app.get("/api/waitlist", function(req, res) {
        return res.json(waitlistData);
    });

    // Get table data
    app.get("/api/tables", function(req, res) {
    return res.json(tableData);
    });

    // Create New Reservation
    app.post("/api/tables", function(req, res) {
        let reservation = reservationRepo.addReservation(req.body);
        res.json(reservation);
    });

}

module.exports = addApiRoutes;

