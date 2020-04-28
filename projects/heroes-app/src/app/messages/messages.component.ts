import { Component, OnInit } from '@angular/core';
import { MessageSvcService } from '../message-svc.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(
    public msgService : MessageSvcService
  ) { }

  ngOnInit(): void {
  }

}
