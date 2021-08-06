import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sudent',
  templateUrl: './sudent.component.html',
  styleUrls: ['./sudent.component.css']
})
export class SudentComponent implements OnInit {
  flag=0;
  stdcode="";
  html_data:any=[];
  

  studentDetails: any = [
     { code:1000, name: "jerry", dept:"BCA",totalmarks:500 },
     { code:1001, name: "surya", dept:"BCA",totalmarks:900  },
     {code:1002,  name: "veera", dept:"BCA",totalmarks:700  },
    { code:1003, name: "maya", dept:"BCA", totalmarks:400 },
    { code:1004, name: "jaya", dept:"BCA", totalmarks:300 }
   
  ]

  constructor(private router: Router,private dataservice:DataserviceService) { }

  ngOnInit(): void {
  }


  view(code:any){
    this.flag=1;
    var scode:any=code;
    console.log(scode);
    this.stdcode=scode;
    
  }
  showdata(){
    this.dataservice.showdata()
    .subscribe((result:any)=>{
      
      this.html_data=result.response['#result-set-1'];
      console.log(result);
      
    })
  }
 
}
