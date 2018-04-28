import {PriceCoordinates} from './price-coordinates.interface';

export class BitcoinPrice{ 
  public time: string;
  public average: number;
  
  //public values: PriceCoordinates[];

  constructor(data?: any) {
    const defaults:any = {
      ...data
    }

    this.time = defaults.time;
    this.average = defaults.average;
  
  }
}