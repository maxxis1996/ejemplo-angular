import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';

import { PaymentDatailService } from '../shared/payment-datail.service';
@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html'
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDatailService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deletePaymentDetail(PMId)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
