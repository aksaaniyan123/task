import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sudent',
  templateUrl: './sudent.component.html',
  styleUrls: ['./sudent.component.css']
})
export class SudentComponent implements OnInit {
  flag=0;
  stdcode=""

  studentDetails: any = [
     { code:1000, name: "jerry", dept:"BCA",totalmarks:500 },
     { code:1001, name: "surya", dept:"BCA",totalmarks:900  },
     {code:1002,  name: "veera", dept:"BCA",totalmarks:700  },
    { code:1003, name: "maya", dept:"BCA", totalmarks:400 },
    { code:1004, name: "jaya", dept:"BCA", totalmarks:1400 }
   
  ]

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }


  view(code:any){
    this.flag=1;
    var scode:any=code;
    console.log(scode);
    this.stdcode=scode;
    
  
    

  }
}
