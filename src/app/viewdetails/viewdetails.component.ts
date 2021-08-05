import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {
  id:any;
/*@Input() item:string | null | undefined;
@Output() onCancel=new EventEmitter;*/
  constructor(private _Activatedroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id")
  }
  
  studentDetails: any = [
    { code:1000,name:"jerry", English:100,Java:100,Vb:100,cobol:200},
    { code:1001, name:"surya",English:200,Java:200,Vb:200,cobol:300 },
    {code:1002,name:"veera", English:300,Java:100,Vb:200,cobol:100 },
   { code:1003,name:"maya", English:400,Java:100,Vb:100,cobol:100 },
   { code:1004, name:"jaya",English:100,Java:300,Vb:100,cobol:100 }
  
 ]
 goback(){
  this.router.navigateByUrl("student")
 }
}


