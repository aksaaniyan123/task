
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  studentmarkDetails = [
        { code:1000,name:"jerry", English:100,Java:100,Vb:100,cobol:200},
        { code:1001, name:"surya",English:200,Java:200,Vb:200,cobol:300 },
        {code:1002,name:"veera", English:300,Java:100,Vb:200,cobol:100 },
       { code:1003,name:"maya", English:400,Java:100,Vb:100,cobol:100 },
       { code:1004, name:"jaya",English:100,Java:300,Vb:100,cobol:100 }
      
     ]


  constructor(private http:HttpClient ){ }

  showdata(){
    let data={
      "xIdentifier": "52324e6a6458424462476c6c626e5251636d394965574a796157513d",
      "requestParameter": {
        "Clientid": 1290119560,
        "DpClientid": "",
        "dpid": ""
      }
    
  
    }
    return this.http.post (environment.URL,data)
  }
}

