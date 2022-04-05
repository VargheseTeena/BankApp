import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  database:any={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
    1001:{acno:1001,uname:"Laisha",password:1001,balance:3000},
    1002:{acno:1002,uname:"Vyom",password:1002,balance:4000}
  }
  
  constructor() { }
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
        balance:0
      }
      console.log(database);
      
      return true
    }
  }
}
