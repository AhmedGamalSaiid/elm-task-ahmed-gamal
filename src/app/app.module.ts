import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OrderCardDataComponent } from './components/order-card-data/order-card-data.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderMidSecComponent } from './components/order-mid-sec/order-mid-sec.component';
import { FormDataComponent } from './components/form-data/form-data.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FooterComponent } from './components/footer/footer.component';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    OrderPageComponent,
    BreadcrumbComponent,
    OrderCardDataComponent,
    OrderSummaryComponent,
    OrderMidSecComponent,
    FormDataComponent,
    FooterComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    MenubarModule,
    BreadcrumbModule,
    InputGroupModule,
    InputGroupAddonModule,
    CascadeSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
