const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  describe("getOfficeNumber", () => {
    it("should return the office number of a new Manager", () => {
      const getNumber = new getOfficeNumber();
      const officeNumber = "1";

      const newnumber = Manager.getNumber(officenumber);

      expect(newnumber).toEqual(`${officeNumber}`);
    });
  });

  describe("getRole", () => {
    it("should return the role as Manager", () => {
      const role = new getRole();
      const name = "Manager";

      const newRole = Manager.role(name);

      expect(newRole).toEqual(`${name}`);
    });
  });
});
