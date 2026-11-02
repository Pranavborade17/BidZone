
import { Component } from '@angular/core';

import { AuctionHistory } from './history/auction-history/auction-history';
import { WinnerDetails } from './history/winner-details/winner-details';
import { PaymentStatus } from './history/payment-status/payment-status';
import { TransactionHistory } from './history/transaction-history/transaction-history';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AuctionHistory,
    WinnerDetails,
    PaymentStatus,
    TransactionHistory
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activePage = 'history';
}
