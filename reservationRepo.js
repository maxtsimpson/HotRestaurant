const fs = require("fs");
const Reservation = require("./reservation");

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
        fs.writeFileSync("./reservations.json", JSON.stringify(this.reservations,undefined,2)), (err) => {
            if (err) throw err;
        })
    }

    retrieveReservations() {
        try {
            if (fs.existsSync("./reservations.json")) {
                let fileContents = io.readFromFile("./reservations.json");
                let json = JSON.parse(fileContents);
                let reservations = json.map(j => this.createReservationFromJSON(j))
                console.log({reservations})
            }            
        } catch (error) {
            return [];
        }
    }

    createReservationFromJSON(jsonObject){
        const {id,time, email, phoneNumber} = jsonObject
        return new Reservation (id,time, email, phoneNumber)
    }
}

module.exports = ReservationRepo;