import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RoomDataService } from '../services/room-data.service';
import { Room } from '../models/room';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.css'],
  providers: [RoomDataService]
})
export class RoomListingComponent implements OnInit {

  rooms: Room[];

  message: string;

  constructor(
    private roomDataService: RoomDataService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

    private addRoom(): void {
      console.log('Inside RoomListingComponent#addRoom');
      this.router.navigate(['add-room']);
    }

  private getRooms(): void {
    console.log('Inside RoomListingComponent#getRooms');
    this.message = 'Searching for rooms';
    this.roomDataService
      .getRooms()
      .then(foundRooms => {
        this.message = foundRooms.length > 0 ? '' : 'No rooms found';
        this.rooms = foundRooms;
      });
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.getRooms();
  }

}