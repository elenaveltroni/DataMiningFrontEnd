import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateAcquisitionComponent} from './create-acquisition/create-acquisition.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create-acquisition',
    component: CreateAcquisitionComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }