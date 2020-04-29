// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page

module.exports = function htmlRoutes(app){

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  // Wild card
  app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
  })
}