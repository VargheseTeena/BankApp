import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //database
  aim="Your Perfect Banking Parter"
  accnum="Account Number please"
  acno=""
  pswd=""
  
  constructor(private router:Router,private db:DataService) { }

  ngOnInit(): void {
  }
//   acnoChange(event:any)
//   {
// this.acno=event.target.value;
// console.log(this.acno);

//   }
//   pswdChange(event:any)
//   {
// this.pswd=event.target.value;
// console.log(this.pswd);


  // }
  login()
  {
    var acno=this.acno
    var pswd=this.pswd
   let database=this.db.database
   if(acno in database)
   {
     if(pswd==database[acno]["password"]){
alert("login successfully")
this.router.navigateByUrl("dashboard")
     }
     else{
       alert("invalid password")
     }

   }
   else{
     alert("User doesn't exist")
   }
  }
// login(a:any,p:any)
//   {
//     console.log(a.value);
    
//     var acno=a.value
//     var pswd=p.value
//    let database=this.database
//    if(acno in database)
//    {
//      if(pswd==database[acno]["password"]){
// alert("login successfully")
//      }
//      else{
//        alert("invalid password")
//      }

//    }
//    else{
//      alert("User doesn't exist")
//    }
//   }

}
