import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductShopComponent } from '../product-shop/product-shop.component';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent {
  constructor(private modalService: NgbModal) {}
  showMainContent: boolean = false;  // Control display of main content

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    const modalRef = this.modalService.open(ProductShopComponent, { size: 'lg' });
    modalRef.result.then((result: boolean) => {
      this.showMainContent = true;  // Always show content after modal closure
      console.log('Modal closed with result:', result);
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }
}
