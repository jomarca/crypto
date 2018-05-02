import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ChartModule } from 'angular2-chartjs';
import { AppComponent } from './app.component';
import {BitcoinStatsComponent} from '../bitcoin-stats/bitcoin-stats.component';
import {CryptoTableComponent} from '../crypto-table/crypto-table.component';
import {CryptoFilterComponent} from '../crypto-filter/crypto-filter.component';
import { CryptoService } from '../services/crypto.service';
import { NotFoundComponent } from '../not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent},
  { path: 'bitcoinStats', component: BitcoinStatsComponent},
  { path: '**', component: NotFoundComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    CryptoFilterComponent,
    NotFoundComponent,
    BitcoinStatsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
