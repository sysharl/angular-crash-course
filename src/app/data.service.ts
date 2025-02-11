import { Injectable } from '@angular/core';
import {User} from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  infoList:User[]=[
      { id: 1, firstName: "Alice", email: "alice@example.com" },
      { id: 2, firstName: "Bob", email: "bob@example.com" },
      { id: 3, firstName: "Charlie", email: "charlie@example.com" },
      { id: 4, firstName: "David", email: "david@example.com" },
      { id: 5, firstName: "Emma", email: "emma@example.com" }
  ];

  getId():number[]{
    return this.infoList.map(user => user.id);
  }

  getEmailFromList():string[]{
    return this.infoList.map(user => user.email);
  }

  getFirstNameFromList():string[]{
    return this.infoList.map(user => user.firstName);
  }

  getUserList():User[]{
    return this.infoList;
  }

  addUser(newUser:User){
    if(!newUser.id){
      newUser.id= this.infoList[-1].id + 1
    }
    this.infoList.push(newUser);
  }
  constructor() { }
}
