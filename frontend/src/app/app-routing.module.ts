import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DonationComponent } from './components/donation/donation.component';
import { FaqComponent } from './components/faq/faq.component';
import { LibraryPickerComponent } from './components/library-picker/library-picker.component';
import { LibraryCharactersComponent } from './components/library-characters/library-characters.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonationComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'library', component: LibraryPickerComponent },
  { path: 'library/characters', component: LibraryCharactersComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
