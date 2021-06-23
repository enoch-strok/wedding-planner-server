const GuestController = require("../controllers/guest");

module.exports = (app) => {
    app.post("/guest/add", GuestController.add);
    app.post("/guest/editGuest", GuestController.editGuest);
    app.get("/guest/all", GuestController.showAllGuests);
    app.delete('/guest/delete/:id', GuestController.deleteGuest);
}