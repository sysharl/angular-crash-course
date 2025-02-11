export class User {
    id: number;
    firstName: string;
    email: string;
  
    constructor(id: number = 0, firstName: string = "Unknown", email: string = "N/A") {
      this.id = id;
      this.firstName = firstName;
      this.email = email;
    }
  }
