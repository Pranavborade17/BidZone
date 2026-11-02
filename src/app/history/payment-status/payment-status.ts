
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuctionDataService } from '../../services/auction-data';

@Component({
  selector: 'app-payment-status',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-status.html',
  styleUrl: './payment-status.css'
})
export class PaymentStatus {
  payments;
  selectedStatus = 'All';

  constructor(private auctionData: AuctionDataService) {
    this.payments = this.auctionData.auctions.map(auction => ({
      id: auction.id,
      product: auction.product,
      winner: auction.winner,
      amount: auction.amount,
      status: auction.paymentStatus
    }));
  }

  get filteredPayments() {
    if (this.selectedStatus === 'All') {
      return this.payments;
    }

    return this.payments.filter(payment =>
      payment.status === this.selectedStatus
    );
  }
}
