
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuctionDataService } from '../../services/auction-data';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transaction-history.html',
  styleUrl: './transaction-history.css'
})
export class TransactionHistory {
  transactions;
  searchText = '';

  constructor(private auctionData: AuctionDataService) {
    this.transactions = this.auctionData.auctions.map(auction => ({
      id: auction.transactionId,
      product: auction.product,
      buyer: auction.winner,
      amount: auction.amount,
      date: auction.date,
      status: auction.paymentStatus
    }));
  }

  get filteredTransactions() {
    const search = this.searchText.toLowerCase();

    return this.transactions.filter(transaction =>
      transaction.id.toLowerCase().includes(search) ||
      transaction.product.toLowerCase().includes(search) ||
      transaction.buyer.toLowerCase().includes(search)
    );
  }
}
