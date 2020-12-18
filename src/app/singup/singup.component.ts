import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  deta= {
    firstname:"",
    lastname:"",
    college:"",
    mobilenumber:"",
    email:"",
    rollnumber:"",
    examination:"",
    city:"",
    username:"",
    reusername:"",
    password:"",
    confirmpassword:"",
  }

  constructor() { }

  ngOnInit(): void {
  }
  handleForm(): void {
    console.log(this.deta)
  }

}
