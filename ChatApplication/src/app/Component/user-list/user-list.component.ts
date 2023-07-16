import { Component, Output } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

interface Message {
  content: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  Users: any;
  Msg: Message[] = []; // Initialize Msg as an empty array

  selectedUserId: string = '';

  constructor(private userService: LoginServiceService) {
    this.userService.onUserList().subscribe((data) => {
      this.Users = data;
    });
  }

  getUserConversation(user: any): void {
    this.userService.onMsgHistory(user.userID).subscribe((data: any) => {
      console.log('Data from API:', data);
      if (data && data.messages && Array.isArray(data.messages)) {
        this.Msg = data.messages; // Access the messages array and assign it to Msg
        console.log('Msg array:', this.Msg);
      } else {
        this.Msg = []; // If the data is not in the expected format, initialize as an empty array
      }
    });
  }
}
