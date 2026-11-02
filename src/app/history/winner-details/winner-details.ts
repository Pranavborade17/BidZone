
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuctionDataService } from '../../services/auction-data';

@Component({
  selector: 'app-winner-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './winner-details.html',
  styleUrl: './winner-details.css'
})
export class WinnerDetails {
  winners;
  selectedAuction = 0;

  constructor(private auctionData: AuctionDataService) {
    this.winners = this.auctionData.auctions.map(auction => ({
      auctionId: auction.id,
      product: auction.product,
      winnerName: auction.winner,
      winningBid: auction.amount
    }));
  }

  get filteredWinners() {
    if (this.selectedAuction === 0) {
      return this.winners;
    }

    return this.winners.filter(winner =>
      winner.auctionId === Number(this.selectedAuction)
    );
  }
}
