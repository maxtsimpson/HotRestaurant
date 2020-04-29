const Reservation = require("../reservation");

test("Can instantiate Reservation instance", () => {
  const r = new Reservation(1,"7:30","test@test.com","0812345678");
  expect(typeof(r)).toBe("object");
});