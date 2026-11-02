import { TestBed } from '@angular/core/testing';
import { AuctionData } from './auction-data';

describe('AuctionData', () => {
  let service: AuctionData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
