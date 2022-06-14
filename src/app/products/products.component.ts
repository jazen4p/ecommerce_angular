import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  products: any;
  cartProducts: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    localStorage.clear(); //empty local storage each time refresh
    let data = localStorage.getItem("cart");
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Americano",
        description: "Americano",
        img: "assets/noun_4.jpg",
        price: 1
      },
      {
        id: 2,
        title: "Americano",
        description: "Americano",
        img: "assets/noun_5.jpg",
        price: 800
      },
      {
        id: 3,
        title: "Ice Matcha",
        description: "Cold brew Matcha",
        img: "assets/noun_6.png",
        price: 4
      },
      {
        id: 4,
        title: "Iced Tea",
        description: "Cold ice sweet tea",
        img: "assets/noun_7.jpg",
        price: 2
      },
      {
        id: 5,
        title: "Moccachino",
        description: "Moccachino",
        img: "assets/noun_8.jpg",
        price: 3
      },
      {
        id: 6,
        title: "Mineral Water",
        description: "600ml mineral water",
        img: "assets/noun_9.jpg",
        price: 2
      },
      {
        id: 7,
        title: "Latte",
        description: "Latte",
        img: "assets/noun_10.jpg",
        price: 2
      },
      {
        id: 8,
        title: "Cocoa",
        description: "Hot Cocoa",
        img: "assets/noun_11.png",
        price: 2
      },
      {
        id: 9,
        title: "Macchiato",
        description: "12oz macchiato",
        img: "assets/noun_12.jpeg",
        price: 3
      }
    ];
  }

  addToCart(index: string | number) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem("cart");
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData: any) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(["/cart"]);
  }
}
