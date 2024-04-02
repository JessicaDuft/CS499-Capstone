import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RoomDataService } from '../services/room-data.service';
import { Room } from 'models/room';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  constructor(
    private router: Router,
    private roomService: RoomDataService
  ) { }

  ngOnInit() {
    let roomCode = localStorage.getItem("roomCode");
    if (!roomCode) {
      alert("Something wrong, couldn't find where I stashed the roomCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("DeleteComponent found roomCode " + roomCode);

    this.roomService.deleteRoom(roomCode)
      .then( data => {
        console.log(data);
        this.router.navigate(['']);
      });
  }

}