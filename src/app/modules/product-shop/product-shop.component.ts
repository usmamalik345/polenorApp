import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.css']
})
export class ProductShopComponent {
    constructor(public activeModal: NgbActiveModal) {}


    close(result: boolean) {
      this.activeModal.close(result);
    }

}
