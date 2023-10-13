import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
  adressCapture: any;
  title: any

  constructor(
    private route: ActivatedRoute
  ){
    debugger
    const dados : any = this.route.snapshot.paramMap.get('foto'); 
    const name : any = this.route.snapshot.paramMap.get('nome'); 
    this.adressCapture = JSON.parse(decodeURIComponent(dados));
    this.title = JSON.parse(decodeURIComponent(name));
    console.log(this.adressCapture)
  }
}
