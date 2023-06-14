
import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
@Injectable()
export class BotComponent implements AfterViewChecked {
  @ViewChild('conversationContainer') conversationContainer!: ElementRef;

  messages: Message[] = [];

  constructor(private router: Router) {}

  conversation = new Subject<Message[]>();

  messageMap: { [key: string]: string } = {
    'hi': 'Hi, how can I help you today?',
    'hii':'Hi, how can I help you today?',
    'who are you': 'My name is LegalGen Bot',
    'what is your role': 'Just guide for the user',
    'defaultmsg': "I'm sorry, I couldn't comprehend that. Please rephrase your question.",
  };

  onSubmit(form: NgForm) {
    const userMessage = new Message('user', form.value.message);
    this.messages.push(userMessage);
    this.conversation.next(this.messages);
    form.resetForm();
    setTimeout(() => {
      const botMessage = new Message(
        'bot',
        this.getBotMessage(userMessage.content.toLowerCase())
      );
      this.messages.push(botMessage);
      this.conversation.next(this.messages);
    }, 750);
  }


  getBotMessage(question: string) {
    let answer = this.messageMap[question];
    return answer || this.messageMap['defaultmsg'];
  }

  redirect() {
    this.router.navigate(['/bot']);
  }

  addSearchQuery() {
    const loginMessage = new Message('bot', 'First, you need to log in.');
    const researchBookMessage = new Message('bot', 'After logging in, you can create a research book.');
    const searchQueryMessage = new Message('bot', 'Once you have created a research book, you can search your queries.');

   setTimeout(() => {
    this.messages.push(loginMessage)
    this.conversation.next(this.messages);
   },750);
   
    setTimeout(() => {
      this.messages.push( researchBookMessage);
    this.conversation.next(this.messages);
    }, 1300);

    setTimeout(() =>{
      this.messages.push(searchQueryMessage);
      this.conversation.next(this.messages);
    },1700)
  }

  addResearchBook() {
    const loginMessage = new Message('bot', 'First, you need to log in.');
    const researchBookMessage = new Message('bot', 'You can create a research book after logging in.');
  
    setTimeout(() => {
      this.messages.push(loginMessage);
      this.conversation.next(this.messages)
    }, 750);
    
    setTimeout(() => {
      this.messages.push(researchBookMessage);
      this.conversation.next(this.messages);
    }, 1300);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    if (this.conversationContainer) {
      try {
        this.conversationContainer.nativeElement.scrollTop = this.conversationContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.error(err);
      }
    }
  }


}


