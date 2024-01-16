import { Component, OnInit } from '@angular/core';
import { SuggestedProduct } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage:'Baner/banner-mobile.jpg',
      category:{
        id:0,
        category: 'electronics',
        subcategory: 'mobiles'
      },
    },
    {
      banerimage:'Baner/banner-laptop.jpg',
      category:{
        id:1,
        category: 'electronics',
        subcategory: 'laptops'
      },
    },
    {
      banerimage:'Baner/banner-pc.jpg',
      category:{
        id:2,
        category: 'furniture',
        subcategory: 'chaires'
      },
    }
  ];
  constructor(){}
  ngOnInit(): void {
    
  }
}
