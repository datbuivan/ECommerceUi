import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { NavigationService } from '../services/navigation.service';
import { Cart, Payment } from '../models/models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  userCart: Cart = {
    id: 0,
    user: this.utilityService.getUser(),
    cartItems: [],
    ordered: false,
    ordereOn: '',
  }

  usersPaymentInfo: Payment ={
    id: 0,
    // user: this.utilityService.getUser(),
    userId: this.utilityService.getUser().id,
    paymentMethodId: 0,
    // paymentMethod:{
    //   id: 0,
    //   type: '',
    //   provider: '',
    //   available: false,
    //   reason: '',
    // },
    totalAmount: 0,
    shippingCharges: 0,
    amountPaid: 0,
    amountReduced: 0,
    createAt: '',
  };

usersPreviousCarts: Cart[] = [];
constructor(
  public utilityService: UtilityService,
  private navigationService: NavigationService
){}
  ngOnInit(): void {
    this.navigationService.getActiveCartOfUser(this.utilityService.getUser().id)
    .subscribe((res: any)=>{
      this.userCart= res;

       // Calculate Payment
       this.utilityService.calculatePayment(
        this.userCart,
        this.usersPaymentInfo
      );
    });
    // Get Previous Carts
    this.navigationService
      .getAllPreviousCarts(this.utilityService.getUser().id)
      .subscribe((res: any) => {
        this.usersPreviousCarts = res;
      });
  }
}
