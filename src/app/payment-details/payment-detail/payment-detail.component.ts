import { Component, OnInit } from '@angular/core';
import { PaymentDatailService } from '../shared/payment-datail.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html'
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDatailService) { }

  ngOnInit(): void {
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMId: 0,
      CardOwnernName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0){
      this.insertRecord(form);
      console.log("insertRecord");    
    }else{
      this.updateRecord(form);
      console.log("updateRecord");    
    }
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
}
