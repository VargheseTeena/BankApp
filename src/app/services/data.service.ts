import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransactionComponent } from '../transaction/transaction.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any
  
  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Laisha",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,uname:"Vyom",password:1002,balance:4000,transaction:[]}
  }
  
  constructor(private http:HttpClient) {
    this.getDetails()
   }
  //to save data in local storage
  saveDetails()
  {
localStorage.setItem("database",JSON.stringify(this.database))
if(this.currentAcno)
{
  localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
}
if(this.currentUser)
{
  localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
}
  }
  //get details from local storage
  getDetails()
  {
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }

  }
  //register component will give uname,acno,password
  register(uname:any,acno:any,password:any)
  {
    let database=this.database
    if(acno in database)
    {
//already exist
return false
    }
    else{
      //add details into db
      database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]
      }
      console.log(database);
      this.saveDetails()
      return true
    }
  }
  login(acno:any,pswd:any)
  {
  
   let database=this.database
   if(acno in database)
   {
     if(pswd==database[acno]["password"]){
//already existing db 
this.currentUser=database[acno]["uname"]
this.currentAcno=acno
this.saveDetails()
return true
     }
     else{
       alert("invalid password")
       return false
     }

   }
   else{
     alert("User doesn't exist")
     return false
   }
  }
  // deposit
  deposit(acno:any,pswd:any,amt:any)
  {
    let database=this.database
    var amount=parseInt(amt)
    if(acno in database)
    {
if(pswd==database[acno]["password"]){
database[acno]["balance"]+=amount
database[acno]["transaction"].push({
  type:"Credit",
  amount:amount
})
this.saveDetails()
return database[acno]["balance"]
}
else{
  alert("incorrect password")
}
    }
    else{
      alert("user doesnt exist")
      return false
    }
  }
  // withdraw
  withdraw(acno:any,pswd:any,amt:any)
  {
    let database=this.database
    var amount=parseInt(amt)
    if(acno in database)
    {
if(pswd==database[acno]["password"]){
  if(database[acno]["balance"]>amount)
  {
    database[acno]["balance"]-=amount
    database[acno]["transaction"].push({
      type:"Debit",
      amount:amount
    })
    console.log(database);
    this.saveDetails()

    return database[acno]["balance"]
  }
  else{
    alert("insufficient balance")
    return false
  }

}
else{
  alert("incorrect password")
}
    }
    else{
      alert("user doesnt exist")
      return false
    }
  }
  transaction(acno:any)
{
return this.database[acno].transaction
}
}
//logic....array(push). ....login successfully() ..acno store....transaction dependency inject..

//transaction
