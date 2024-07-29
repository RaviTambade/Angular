import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { LoggedInGuard } from "./loggedinguardservice";
import { AuthService } from "./authservice";
 
import { RouteContainerComponent } from './route-container/route-container.component';
import { HomeComponent } from "./root/home/home.component";
import { AboutusComponent } from "./root/aboutus/aboutus.component";
import { ContactComponent } from "./root/contact/contact.component";
import { ProductListComponent } from "./productCatalog/product-list/product-list.component";
import { ProductDetailComponent } from "./productCatalog/product-detail/product-detail.component";
import { PagenotfoundComponent } from "./root/pagenotfound/pagenotfound.component";
import { ProductUpdateComponent } from "./productCatalog/product-update/product-update.component";
import { ProductCreateComponent } from "./productCatalog/product-create/product-create.component";
import { ProductDeleteComponent } from "./productCatalog/product-delete/product-delete.component";

import { ProtectedComponent } from "./root/protected/protected.component";
import { BarchartComponent } from "./bi/barchart/barchart.component";
import { PiechartComponent } from "./bi/piechart/piechart.component";
import { DashboardComponent } from "./bi/dashboard/dashboard.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ServicesComponent } from './root/services/services.component';

 
export const childRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'bar', component: BarchartComponent },
    { path: 'pie', component: PiechartComponent},
    
  ];
  
  
export const routes: Routes = [
    {path: '', redirectTo: 'services', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'about', component:AboutusComponent },
    {path: 'contact',component: ContactComponent },
    {path:'services',component:ServicesComponent},
    {path: 'lists', component: ProductListComponent},
    {path: 'create', component: ProductCreateComponent},
    {path: 'lists/:id', component: ProductDetailComponent},
    {path: 'addtocart/:id', component: ProductDetailComponent},///Paramterized Routing
    {path: 'update/:id', component: ProductUpdateComponent},
    {path: 'delete/:id', component: ProductDeleteComponent},
    {path: 'dashboard', component: DashboardComponent,children:childRoutes},//Nested Routing
    {path: 'protected',component: ProtectedComponent,canActivate: [LoggedInGuard] }, //secure Routing

    // { path: '**', component: PagenotfoundComponent },
  ];
  
@NgModule({
    declarations: [
        RouteContainerComponent,
        HomeComponent, AboutusComponent, ContactComponent,
        ProductListComponent , ProductDetailComponent,
        PagenotfoundComponent, ProductUpdateComponent,
        ProductCreateComponent,ProductDeleteComponent,
     
        DashboardComponent,PiechartComponent,BarchartComponent,
        SignInComponent,
        ProtectedComponent,
        RouteContainerComponent,
        ServicesComponent
    ],
    exports: [
        RouteContainerComponent,
        HomeComponent, AboutusComponent, ContactComponent,
        ProductListComponent , ProductDetailComponent,
        PagenotfoundComponent, ProductUpdateComponent,ProductCreateComponent,
        ProductDeleteComponent,
     
        DashboardComponent,PiechartComponent,BarchartComponent,
        SignInComponent,
        ProtectedComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes) 
    ],

    providers:[AuthService,LoggedInGuard ],
})
export class SPAModule{}