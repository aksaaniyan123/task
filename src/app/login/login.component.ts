import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname="";
pswd="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


login(){
  var name=this.uname;
  var pass=this.pswd;
  if (name=="aksa" && pass=="1234")
  {
  
  alert("login successfull")

this.router.navigateByUrl("student")
}
else{
  alert("invalid account")
}
}
}