import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Profile } from './profile/profile.component';


const routes: Routes = [
  { path: 'profile', component: Profile },
  { path: 'profile/:id', component: Profile }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
