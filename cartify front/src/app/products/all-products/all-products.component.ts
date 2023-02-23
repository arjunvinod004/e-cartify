import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
allproducts:any=[];
  
  constructor(private api:ApiService,private cart:CartService) { }

  searchterm:string='';

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )

  }
  addtowishlist(product:any){
    this.api.addtowishlist(product).subscribe(
      (result:any)=>{
        //server to client
        alert(result.message)//aaded sucessfully
      },
      (result:any)=>{
        alert(result.error.message)//error
      }
    )
  }
  addcart(product:any){
    this.cart.addcart(product)
  }

}
