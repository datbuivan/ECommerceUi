import { Component, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Category, NavigationItem } from '../models/models';
import { LoginComponent } from '../login/login.component';
import { ResgisterComponent } from '../resgister/resgister.component';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @ViewChild('modalTitle') modelTitle!: ElementRef;
  @ViewChild('container', {read: ViewContainerRef, static:true})
  container!: ViewContainerRef;
  navigationList: NavigationItem[] =[];
  cartItems: number=0;
  constructor(
    private navigationService: NavigationService,
    public utilityService: UtilityService
  ){}
  ngOnInit(): void {
    this.navigationService.getCategoriList().subscribe((list :Category[])=>{
      for(let item of list){
        let persent = false;
        for(let navItem of this.navigationList){
          if(navItem.category === item.category){
            navItem.subcategories.push(item.subcategory);
            persent = true;
          }
        }
        if(!persent){
          this.navigationList.push({
            category: item.category,
            subcategories: [item.subcategory],
          });
        }
      }
    }); 
      if(this.utilityService.isLoggedIn()){
        this.navigationService.getActiveCartOfUser(this.utilityService.getUser().id)
        .subscribe((res:any)=>{
          this.cartItems = res.cartItems.length;
        });
      }

    this.utilityService.changeCart.subscribe((res:any)=>{
      if (parseInt(res) === 0) this.cartItems = 0;
      else this.cartItems += parseInt(res);
    });
  }

  openModel(name: string){
    this.container.clear();
    let componentType!: Type<any>;
    if(name==='login'){
      componentType = LoginComponent;
      this.modelTitle.nativeElement.textContent ='Enter Login Information';
    } 
    if(name=='resgister'){
      componentType = ResgisterComponent;
      this.modelTitle.nativeElement.textContent ='Enter Register Information';
    } 
    this.container.createComponent(componentType);
  }
}
