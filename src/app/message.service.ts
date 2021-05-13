import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string [] = [];

  constructor() { }

  // Ajoute un message dans le tableau des messages
  add(message: string){
      this.messages.push(message);
  }
 
  clear()
  {
    this.messages = [];
  }
}
