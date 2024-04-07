import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RoomDataService } from '../services/room-data.service';
import { Room } from 'models/room';


@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private roomService: RoomDataService

  ) { }

  ngOnInit() {
    let roomCode = localStorage.getItem("roomCode");
    if (!roomCode) {
      alert("Something wrong, couldn't find where I stashed roomCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("EditRoomComponent#onInit found roomCode " + roomCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [roomCode, Validators.required],
      name: ["", Validators.required],
      description: ["", Validators.required],
      rate: ["", Validators.required],
      image: ["", Validators.required]
      
    })

    console.log(
      "EditRoomComponent#onInit calling RoomDataService#getRoom('" +
        roomCode +
        "')"
    );

    this.roomService.getRoom(roomCode)
      .then(data => {
        // console.log(data);
        
        this.editForm.patchValue(data[0]);
        
        console.log("patched")
        // using editForm.setValue() will throw a console error
      })

  }

  onSubmit() {
    this.submitted = true;

    if(this.editForm.valid){
      this.roomService.updateRoom(this.editForm.value)
        .then( data => {
            console.log(data);
            this.router.navigate(['']);
        });
    }
  }

  // get the form short name to access the form fields
  get f() {
    return this.editForm.controls;
  }

}

/* WILL BE FIXED IN ENHANCEMENT TWO */