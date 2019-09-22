import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataentryComponent } from './dataentry/dataentry.component';
import { ScannerComponent } from './scanner/scanner.component';


const routes: Routes = [{ path: '', component: ScannerComponent }, { path: 'dataentry', component: DataentryComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
