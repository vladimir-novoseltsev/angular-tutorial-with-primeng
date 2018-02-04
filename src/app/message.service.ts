import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(message): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
