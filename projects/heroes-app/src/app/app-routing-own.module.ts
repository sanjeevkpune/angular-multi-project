import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// command ng generate module aap-routing-own --flat --module=app
// this generates the app-routing-own.module.ts NgModule in the folder from where the 
// command is executed, thanks to --flat option
// --module option registers this module in the app.module.ts 
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingOwnModule { }
