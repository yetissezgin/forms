import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  {path:"", component:MainpageComponent},
  {path:"simpleform", component:SimpleformComponent},
  {path:"reactiveform", component:ReactiveformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
