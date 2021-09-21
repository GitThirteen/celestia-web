import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DonationComponent } from './components/donation/donation.component';
import { FaqComponent } from './components/faq/faq.component';
import { LibraryPickerComponent } from './components/library-picker/library-picker.component';
import { LibraryCharactersComponent } from './components/library-characters/library-characters.component';
import { LibraryCompanionsComponent } from './components/library-companions/library-companions.component';
import { LibraryStickersComponent } from './components/library-stickers/library-stickers.component';
import { PatchnotesComponent } from './components/patchnotes/patchnotes.component';
import { GuidesComponent } from './components/guides/guides.component';
import { CommandsComponent } from './components/commands/commands.component';
import {TosComponent} from "./components/tos/tos.component";
import {PrivacyPolicyComponent} from "./components/privacy-policy/privacy-policy.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'library', component: LibraryPickerComponent },
  { path: 'library/characters', component: LibraryCharactersComponent },
  { path: 'library/companions', component: LibraryCompanionsComponent },
  { path: 'library/stickers', component: LibraryStickersComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'patchnotes', component: PatchnotesComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'donate', component: DonationComponent },
  { path: 'tos', component: TosComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
