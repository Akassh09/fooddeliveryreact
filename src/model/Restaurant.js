import Address from "./Address";
import Item from "./Item";

class Restaurant {
  restaurantId = "";
  restaurantName = "";
  managerName = "";
  contactNumber = "";
  resPincode = "";
  address = new Address();
  itemList = [new Item()];
  /*
    constructor(employeeId,employeeName,employeeSalary,department){

        this.employeeId=employeeId;
        this.employeeName=employeeName;
        this.employeeSalary=employeeSalary;
        this.department=department;
    }*/
}

export default Restaurant;
