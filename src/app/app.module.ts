import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { RecepitsListComponent } from './receipts/recepits-list/recepits-list.component';
import { RecepitDetailComponent } from './receipts/recepit-detail/recepit-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptsComponent,
    RecepitsListComponent,
    RecepitDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
