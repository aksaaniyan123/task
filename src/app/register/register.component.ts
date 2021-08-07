import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name="";
  age="";
  email="";
 gender="";
courses="";
 
 
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  register(){
   

    alert("successfully registered")
    this.router.navigateByUrl("login")
  }

}

