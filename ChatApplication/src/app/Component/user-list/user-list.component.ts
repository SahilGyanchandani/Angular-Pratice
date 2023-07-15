import { Component, Output} from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

interface Msg{
  content:string;
  
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
 
  Users:any;
  Msg:Msg[]=[];
  selectedUserId: string = '';


  constructor(private userService:LoginServiceService){ 
      this.userService.onUserList().subscribe((data)=>{
        // console.warn("Data",data);
        this.Users=data;
      })
    }

  getUserConversation(user:any): void {
    this.userService.onMsgHistory(user.userID).subscribe((data: any[]
      
      )=>{
      console.log(data);
      this.Msg=data;
      // console.log(this.Msg);
      
      
      
      
    })
    
    
  }

}
