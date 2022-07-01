/* MODULES */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* MODULES MATERIAL ANGULAR */
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
/* CORE */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
/* PAGES */
import { ManagementComponent } from './pages/management/management.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { CardDetailComponent } from './pages/card-detail/card-detail.component';
import { CardListComponent } from './pages/home/card-list/card-list.component';
import { DetailModalComponent } from './pages/home/detail-modal/detail-modal.component';
import { ErrorComponent } from './pages/management/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    CardListComponent,
    CardDetailComponent,
    ManagementComponent,
    DetailModalComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
