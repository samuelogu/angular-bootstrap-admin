import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import {LayoutsModule} from "../../components/layouts/layouts.module";


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
