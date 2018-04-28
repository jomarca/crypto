import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CryptoService{
  constructor(public http:HttpClient){}

    public getBitcoinmarketCap() {
    return this.http.get('https://api.coinmarketcap.com/v1/global/');
  }

  public getAllCryptos() {
    return this.http.get('https://api.coinmarketcap.com/v1/ticker/');
  }

  public getBitCoinPriceStats() {
    return this.http.get('https://apiv2.bitcoinaverage.com/indices/global/history/BTCUSD?period=alltime&format=json')
  }
}

