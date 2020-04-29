const fs = require("fs");

class ReservationRepo {
    constructor() {
        this.reservations = this.retrieveReservations(); //this an array
        this.nextId = 0;
    }
    
    getNextId() {
        let id = this.nextId
        this.nextId++
        return id;
    }

    addReservation(reservation){
        this.reservations += reservation
        this.storeReservations();
    }

    storeReservations(){
        fs.writeFileSync("./reservations.json", JSON.stringify(this.reservations), (err) => {
            if (err) throw err;
        })
    }

    retrieveReservations() {
        try {
            if (fs.existsSync("./reservations.json")) {
                let fileContents = io.readFromFile("./reservations.json");
                let json = JSON.parse(fileContents);
                return json.map(this.createReservationFromJSON)
            }            
        } catch (error) {
            return [];
        }
    }

    createReservationFromJSON(){
        const {id,time} = jsonObject
    }
}

module.exports = ReservationRepo;