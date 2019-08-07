import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooibos-tea',
  templateUrl: './rooibos-tea.page.html',
  styleUrls: ['./rooibos-tea.page.scss'],
})
export class RooibosTeaPage implements OnInit {

  price=15;
  price1=0;
  price2=0;
  price3=0;
  price4=0;
  total=this.price1 + this.price2 + this.price3 + this.price4;
  subtotal=0;
  
    constructor(private route:Router) { 
    }
  onPriceAdd1(){
    this.price+=2;
    this.total=this.price +this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd2(){
    this.price+=2;
    this.total=this.price +this.price2 + this.price3 + this.price4;
  
  }

   onPriceAdd3(){
    this.price+=4;
    this.total=this.price +this.price2 + this.price3 + this.price4;
  
  }
  onPriceAdd4(){
    this.price+=2;
    this.total=this.price +this.price2 + this.price3 + this.price4;
  
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