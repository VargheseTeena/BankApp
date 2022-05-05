import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  

  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  
  constructor(private router:Router,private db:DataService,private fb:FormBuilder) { }

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
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd

if(this.loginForm.valid){
  const result=this.db.login(acno,pswd)
  if(result)
  {
   alert("login successfully")
   
   this.router.navigateByUrl("dashboard")
  }
}
else{
  alert("invalid form")
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
