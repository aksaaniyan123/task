import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
@Input() item:string | null | undefined;
@Output() onCancel=new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  
  studentDetails: any = [
    { code:1000,name:"jerry", English:25,Java:30,Vb:33,cobol:44},
    { code:1001, name:"surya",English:35,Java:10,Vb:13,cobol:24 },
    {code:1002,name:"veera", English:30,Java:24,Vb:23,cobol:32  },
   { code:1003,name:"maya", English:21,Java:28,Vb:33,cobol:34 },
   { code:1004, name:"jaya",English:25,Java:40,Vb:33,cobol:44 }
  
 ]
}
