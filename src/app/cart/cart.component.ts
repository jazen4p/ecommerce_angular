import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  
  cartProducts:any;
  bill:any;

  constructor() { }

  ngOnInit(): void {
    this.initiateData();
  }

  initiateData(){
    let data = localStorage.getItem('cart');
    if(data!==null){
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      for(let i in this.cartProducts){
        this.cartProducts[i]["qt"]=1;
        this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
      }
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal(){
    this.bill = 0;
    for(let i in this.cartProducts){
      this.bill = this.bill + this.cartProducts[i].price * this.cartProducts[i].qt;
    }
  }

  removeItem(id: any){
    this.cartProducts.splice(id, 1);
    if(this.cartProducts.length){
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    } else {
      localStorage.setItem("cart", "");
    }
  }

  payBill(){
    if(this.cartProducts.length){
      localStorage.removeItem("cart");
      this.initiateData();
      alert("Your bill is: " + this.bill);
    } else {
      alert("No Item In Cart");
    }
  }
}
