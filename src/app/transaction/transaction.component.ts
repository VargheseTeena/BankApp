import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any
  acno:any

  constructor(private db:DataService) {
    this.acno=this.db.currentAcno
this.transaction=this.db.transaction(this.acno)
console.log(this.transaction);

  }

  ngOnInit(): void {
  }

}
