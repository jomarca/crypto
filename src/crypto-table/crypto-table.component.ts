import {Component} from '@angular/Core';
import {CryptoService} from '../services/crypto.service';
import {CryptoCurrency} from '../models/crypto-currency.class';

@Component({
  selector: 'crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: [ './crypto-table.component.css']
})

export class CryptoTableComponent {
  public top100Cryptos: CryptoCurrency[];
  // to sort table headers
  public sortValues: any = {rank: false, marketCap: true, volume: false, change24: false, change1: false, change7:false, price:false, name: false}; //IF is false we are change to ascending, if is true we are changed to descending or we are goijng to reset that value

  constructor(public cryptoService: CryptoService) {
    this.getTop100Cryptos();
  }

  public getTop100Cryptos(): void {
    this.cryptoService.getAllCryptos().subscribe((data: any) => {
      //to convert to numbers, we use our mocel:
        this.top100Cryptos = data.map((element:any) => {
          return new CryptoCurrency(element);
        });
       
    });
  }

  public sortString(sortValue: boolean, key: string):void {
    if(sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if(nameA < nameB) {
          return -1; //it is telling it that a comes before b
        } else if (nameA > nameB) {
          return 1;
        }
        return 0; //meaning we do not need to move them
      });
    }else {
      this.top100Cryptos = this.top100Cryptos.sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if(nameA > nameB) {
          return -1; //it is telling it that a comes before b
        } else if (nameA < nameB) {
          return 1;
        }
        return 0; //meaning we do not need to move them
      });
    }
  }
  
  public sortNumeric(sortValue: boolean, key:string) {
    //if is true sort it of one way, othersiwe filter other way
    if(sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) =>{
        return a[key] - b[key];
      });
    }else {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) =>{
        return  b[key] -a[key];
      });
    }

  }
}