import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
acno:any
depositForm=this.fb.group({
  
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawForm=this.fb.group({
  
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

loginDate:any
  constructor(private db:DataService,private fb:FormBuilder,private router:Router) {
    this.user=this.db.currentUser
    this.loginDate=new Date()
   }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno"))
    {
alert("Please login")
this.router.navigateByUrl("")
    }
  }
deposit()
{
  var acno=this.depositForm.value.acno
  var pswd=this.depositForm.value.pswd
  var amount=this.depositForm.value.amount
 
 if(this.depositForm.valid)
 {
  const result= this.db.deposit(acno,pswd,amount)
  if(result)
{
  alert(amount+" successfully deposited...And new balance is: "+ result)
}
 }
 else{
   alert("invalid form")
 }

}
withdraw()
{
  var acno=this.withdrawForm.value.acno1
  var pswd=this.withdrawForm.value.pswd1
  var amount=this.withdrawForm.value.amount1
 if(this.withdrawForm.valid)
 {
  const result= this.db.withdraw(acno,pswd,amount)
  if(result)
  {
    alert(amount+" successfully debited...And new balance is: "+ result)
  }
 }
 else{
   alert("invalid form")
 }
  
}
deletefromparent()
{
  this.acno=JSON.parse(localStorage.getItem("currentAcno")||'')
}
//logot
logout()
{
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentAcno")
  this.router.navigateByUrl("")
}
oncancel()
{
  this.acno=""
}
ondelete(event:any)
{
  alert("delete account "+event)
}
}
