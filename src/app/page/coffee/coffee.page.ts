import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.page.html',
  styleUrls: ['./coffee.page.scss'],
})
export class CoffeePage implements OnInit {

price=12;
price1=0;
price2=0;
price3=0;
total=this.price1 + this.price2 + this.price3;
subtotal=0;

  constructor(private route:Router) { 

  }
  onPriceAdd1(){
    this.price+=2;
    this.total=this.price +this.price2 + this.price3;
  
  }
  onPriceAdd2(){
    this.price+=4;
    this.total=this.price +this.price2 + this.price3; 
  
  }

   onPriceAdd3(){
    this.price+=2;
    this.total=this.price +this.price2 + this.price3;
  
  }
    ngOnInit() {
    }
    onprint(){
      window.print();
    }
    onBack(){
      this.route.navigateByUrl("home");
    }
  }