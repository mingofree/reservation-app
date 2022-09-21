import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();
  focus?: boolean;
  focus1?: boolean;
  constructor() {}

  ngOnInit() {}
}
