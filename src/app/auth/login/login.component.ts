import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  focus0: boolean = false;
  focus1: boolean = false;
  constructor() {}

  ngOnInit() {}

  setFocus0(value: boolean) {
    this.focus0 = value;
  }
  setFocus1(value: boolean) {
    this.focus1 = value;
  }
}
