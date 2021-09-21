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
import { LibraryCompanionsComponent } from './components/library-companions/library-companions.component';
import { LibraryStickersComponent } from './components/library-stickers/library-stickers.component';
import { PatchnotesComponent } from './components/patchnotes/patchnotes.component';
import { GuidesComponent } from './components/guides/guides.component';
import { CommandsComponent } from './components/commands/commands.component';
import { FooterComponent } from './components/footer/footer.component';
import { TosComponent } from './components/tos/tos.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    DonationComponent,
    FaqComponent,
    LibraryPickerComponent,
    LibraryCharactersComponent,
    LibraryCompanionsComponent,
    LibraryStickersComponent,
    PatchnotesComponent,
    GuidesComponent,
    CommandsComponent,
    FooterComponent,
    TosComponent,
    PrivacyPolicyComponent,
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
