import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DonationComponent } from './components/donation/donation.component';
import { HttpClientModule } from '@angular/common/http';
import { FaqComponent } from './components/faq/faq.component';
import { LibraryPickerComponent } from './components/library-picker/library-picker.component';
import { LibraryCharactersComponent } from './components/library-characters/library-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    DonationComponent,
    FaqComponent,
    LibraryPickerComponent,
    LibraryCharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
