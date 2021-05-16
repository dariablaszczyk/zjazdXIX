import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FightDataService } from 'src/app/fight-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;

  constructor(
    private router:Router,
    private flightDataService: FightDataService
  ) { }

  ngOnInit() {
    this.flightDataService.currentMessage.subscribe(message => this.message = message)
  }

  call1(){
    this.router.navigate(["/details"])
  }

}