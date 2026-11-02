
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuctionDataService } from '../../services/auction-data';

@Component({
  selector: 'app-auction-history',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auction-history.html',
  styleUrl: './auction-history.css'
})
export class AuctionHistory {
  auctions;
  searchText = '';

  constructor(private auctionData: AuctionDataService) {
    this.auctions = this.auctionData.auctions;
  }

  get filteredAuctions() {
    return this.auctions.filter(auction =>
      auction.product.toLowerCase().includes(
        this.searchText.toLowerCase()
      )
    );
  }
}
