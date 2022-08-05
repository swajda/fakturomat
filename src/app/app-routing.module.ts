import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptFormComponent } from './receipt-form/receipt-form.component';
import { ReceiptsComponent } from './receipts/receipts.component'

const routes: Routes = [
  { path: 'template', component: ReceiptFormComponent },
  { path: 'list', component: ReceiptsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
