import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

interface Message{
  content: string;
  timestamp: Date;
}


@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent {
  @Input() userID!:string;
  chatHistory:Message[] = [];
  Msg:any;

  constructor(private http:HttpClient,private chatService:LoginServiceService){
    // this.chatService.onMsgHistory().subscribe((data) =>{
    //   console.warn("data",data);
    //   this.Msg=data;
    //})
  }

  // ngOnInit(): void {
  //   this.getConversationHistory();
  // }

  // getConversationHistory(): void {
    // this.http.get<any>(`https://localhost:7277/api/Message?userId=${this.userId}&count=20&sort=asc`)
    //   .subscribe(
    //     (response: Message[]) => {
    //       this.chatHistory = response;
    //     },
    //     (error) => {
    //       console.error('Error fetching conversation history', error);
    //     }
    //   );

    


      // this.userService.onUserList().subscribe((data)=>{
      //   // console.warn("Data",data);
      //   this.Users=data;

      
  

  
}



// `https://localhost:7277/api/Message?userId=${this.userId}&count=20&sort=asc`