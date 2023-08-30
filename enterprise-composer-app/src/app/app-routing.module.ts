/**
 * Title: app-routing.module.ts
 * Author: Jennifer Hoitenga
 * Date: August 23, 2023
 * Sources Used:
 * Angular Tutorial for Beginners: How to Rename Projects video by Professor Krasso (https://youtu.be/T7ef0bOOWs4)
 * Angular Tutorial for Beginners: Classes and Interfaces video by Professor Krasso (https://youtu.be/vvXSW_Cldvg)
 * Angular Tutorial for Beginners: How to Pass Data to Routes by Professor Krasso (https://www.youtube.com/watch?v=KTVHu4hafUs)
 */

// Import the NgModule decorator for defining Angular modules.
import { NgModule } from '@angular/core';
// Import routing-related modules.
import { Routes, RouterModule } from '@angular/router';
// Import the ComposerListComponent.
import { ComposerListComponent } from './composer-list/composer-list.component';
// Import the AboutComponent.
import { AboutComponent } from './about/about.component';
// Import the ContactComponent.
import { ContactComponent } from './contact/contact.component';
// Import the ComposerDetailsComponent.
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

// The routes for the components.
const routes: Routes = [
  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'composer-details/:composerId', component: ComposerDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
