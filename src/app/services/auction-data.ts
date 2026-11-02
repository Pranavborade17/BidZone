
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuctionDataService {

  auctions = [
    {
      id: 1,
      product: 'Laptop',
      winner: 'Rohan',
      amount: 25000,
      status: 'Completed',
      paymentStatus: 'Paid',
      transactionId: 'T101',
      date: '2026-10-20'
    },
    {
      id: 2,
      product: 'Smartphone',
      winner: 'Priya',
      amount: 15000,
      status: 'Completed',
      paymentStatus: 'Pending',
      transactionId: 'T102',
      date: '2026-10-21'
    },
    {
      id: 3,
      product: 'Headphones',
      winner: 'Amit',
      amount: 2540,
      status: 'Completed',
      paymentStatus: 'Failed',
      transactionId: 'T103',
      date: '2026-10-22'
    }
  ];

}
