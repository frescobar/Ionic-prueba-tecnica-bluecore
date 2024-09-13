import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { IonicModule } from '@ionic/angular';
import { UsersRoutingModule } from './users.routing.module';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    IonicModule,
    UsersRoutingModule

  ],
  exports: [UsersComponent]
})
export class UsersModule { }
