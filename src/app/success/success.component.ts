import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  username: string;

  constructor() { 
    this.username = '';  // Initialize username to empty string
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';  // Retrieve username from localStorage
  }
}
