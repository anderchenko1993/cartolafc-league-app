import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LigaComponent } from './liga/liga.component';


const routes: Routes = [
  {path: 'liga', component: LigaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
