const reservationRepo = require("../reservationRepo");
const Reservation = require("../reservation");

const reservation = new Reservation(1, "7:30", "test@test.com", "0812345678");
const reservation2 = new Reservation(2, "9:30", "polly@test.com", "0812378678");


test("Can instantiate Reservation instance", () => {
    const repo = new reservationRepo();
    expect(typeof (repo)).toBe("object");
});


test("Can add Reservation", () => {
    const repo = new reservationRepo();
    repo.addReservation(reservation);
    expect();
});

test("Can store Reservations", () => {
    const repo = new reservationRepo();
    repo.addReservation(reservation);
    repo.addReservation(reservation2);
    repo.storeReservations();
    expect();
});

test("Can retrieve Reservation", () => {
    const repo = new reservationRepo();
    reservations = repo.retrieveReservations();
    console.log({reservations})
    expect(typeof (reservations)).toBe("array");
});