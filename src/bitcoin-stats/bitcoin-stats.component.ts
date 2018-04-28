import { Component} from '@angular/core';
import {CryptoService} from '../services/crypto.service';
import {BitcoinPrice } from '../models/bitcoin-price.class';

@Component({
  selector: 'bitcoin-stats',
  templateUrl: './bitcoin-stats.component.html',
  styleUrls: ['./bitcoin-stats.component.css']
})

export class BitcoinStatsComponent {
public bitcoinStats: BitcoinPrice = new BitcoinPrice();
public options: any;
public type: any;
public average: number;
public time: string[];
public chartData: any;

  constructor(public cryptoService: CryptoService){
    this.cryptoService.getBitCoinPriceStats().subscribe((data: any) => {
      this.bitcoinStats = new BitcoinPrice(data);
 
      this.type = 'line';
      this.chartData = { 
        labels: [this.bitcoinStats.time],
        datasets: [
        {
          label: "Bitcoin",
          data: [this.bitcoinStats.average],
        }
      ]
    };
      this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
    })
  }
}

