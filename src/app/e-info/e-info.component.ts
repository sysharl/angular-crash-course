import { ChangeDetectorRef, Component } from '@angular/core';
import {User} from '../models/user.model';
import { DataService } from '../data.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-info',
  imports: [CommonModule, FormsModule],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers:[DataService]
})
export class EInfoComponent {

  infoList: User[]=[];
  
  getInfoList(){
    return this.infoList;
  }

  constructor(private userService: DataService, private cdr: ChangeDetectorRef){
  }

  ngOnInit(){
    this.infoList = this.userService.getUserList();
    this.cdr.detectChanges();
    console.log("load at start", this.infoList);
  }

  addNewUser(inputtedUser: NgForm){
    console.log(inputtedUser.value)
    const newUser: User = {
      id:this.infoList.length + 1,
      firstName: inputtedUser.value.firstName,
      email: inputtedUser.value.email
    }
    
    this.userService.addUser(newUser)
  }
}